import os
import sys
import json

import requests
from flask import Flask, request

from database import db, Conversation, User
from luis import Luis
from userrecord import UserRecord
from conversationrecord import ConversationRecord
app = Flask(__name__)


@app.route('/', methods=['GET'])
def verify():
  # when the endpoint is registered as a webhook, it must
  # return the 'hub.challenge' value in the query arguments
  if request.args.get("hub.mode") == "subscribe" and request.args.get("hub.challenge"):
    if not request.args.get("hub.verify_token") == os.environ["VERIFY_TOKEN"]:
      return "Verification token mismatch", 403
    return request.args["hub.challenge"], 200

  return "Hello world", 200


@app.route('/', methods=['POST'])
def webook():

  luis = Luis()

  # endpoint for processing incoming messaging events

  data = request.get_json()
  log(data)  # you may not want to log every incoming message in production, but it's good for testing

  if data["object"] == "page":

    for entry in data["entry"]:
      for messaging_event in entry["messaging"]:

        if messaging_event.get("message"):  # someone sent us a message

          sender_id = messaging_event["sender"]["id"]    # the facebook ID of the person sending you the message
          recipient_id = messaging_event["recipient"]["id"]  # the recipient's ID, which should be your page's facebook ID
          message_text = messaging_event["message"]["text"].lower()  # the message's text

          cvs = db.session.query(Conversation)\
            .filter(Conversation.question == message_text).first()
          # log(cvs)
          if cvs is None:
            answer = luis.get_answer(message_text)
            indent = luis.get_type_activity(answer)
            entity = luis.get_entity(answer)
            cvs = Conversation(message_text, sender_id, indent,
              entity)
            db.session.add(cvs)
            db.session.commit()
          log(cvs)
          # send_text_message(sender_id, str(cvs.indent + " " + cvs.entity)
          if ConversationRecord.is_learn_new_word(cvs):
            if UserRecord.get_state(sender_id) == UserRecord.UserState.NONE:
              send_text_message(sender_id, "Some words for you, please learn carefully")
              send_template(sender_id, "Hello", "xin chao")
            else:
              send_text_message(sender_id, "Hoc chua het da voi lo xin them")
          else:
            send_text_message(sender_id, "Learn new words or do exercises. Please choose one of them!")

        # if messaging_event.get("delivery"):  # delivery confirmation
        #   pass

        # if messaging_event.get("optin"):  # optin confirmation
        #   pass

        # if messaging_event.get("postback"):  # user clicked/tapped "postback" button in earlier message
        #   pass

  return "ok", 200


def send_text_message(recipient_id, message_text):

  log("sending message to {recipient}: {text}".format(recipient=recipient_id, text=message_text))

  params = {
    "access_token": os.environ["PAGE_ACCESS_TOKEN"]
  }
  headers = {
    "Content-Type": "application/json"
  }
  data = json.dumps({
    "recipient": {
      "id": recipient_id
    },
    "message": {
      "text": message_text
    }
  })
  r = requests.post("https://graph.facebook.com/v2.6/me/messages", params=params, headers=headers, data=data)
  if r.status_code != 200:
    log(r.status_code)
    log(r.text)

def send_template(recipient_id, word, word_meaning):
  log("sending temple to {recipient}".format(recipient=recipient_id))

  params = {
    "access_token": os.environ["PAGE_ACCESS_TOKEN"]
  }
  headers = {
    "Content-Type": "application/json"
  }
  data = json.dumps({
    "recipient": {
      "id": recipient_id
    },
    "message": {
      "attachment":{
        "type":"template",
        "payload":{
          "template_type":"generic",
          "elements":[
            {
              "title": word,
              "subtitle": word_meaning,
              "buttons":[
                {
                  "type":"web_url",
                  "url":"http://youglish.com/search/" + str(word),
                  "title":"Pronuciation"
                },
                {
                  "type":"postback",
                  "title":"Learned",
                  "payload":"DEVELOPER_DEFINED_PAYLOAD"
                }              
              ]
            }
          ]
        }
      }
    }
  })
  r = requests.post("https://graph.facebook.com/v2.6/me/messages", params=params, headers=headers, data=data)
  if r.status_code != 200:
    log(r.status_code)
    log(r.text)

def log(message):  # simple wrapper for logging to stdout on heroku
  print str(message)
  sys.stdout.flush()


if __name__ == '__main__':
  app.run(debug=True)
