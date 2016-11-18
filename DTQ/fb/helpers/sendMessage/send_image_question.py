import import_package
from send import send_message
import json
from cognitive.bing_search_image import BingSearchImage
import requests
import sys
import random

def send_image_question_message(recipient_id, word, another_choices, do_exercise=False):
  question = "What's in the picture?"
  data = json.dumps({
    "recipient": {
      "id": recipient_id
    },
    
    "message": {
      "text": question
    }
  })
  send_message(data)

  data = json.dumps({
    "recipient": {
      "id": recipient_id
    },
    
    "message": {
      "attachment":{
        "type":"image",
        "payload":{
          "url":BingSearchImage.get_image(word.name)
        }
      },
      "quick_replies": []
    }
  })
  data = json.loads(data)

  payload = "Question"
  if do_exercise:
    payload = "Exercise"

  buttons = []
  buttons.append({
    "content_type":"text",
    "title": word.name,
    "payload": payload + "_True"
  })
  for another_choice in another_choices:
    buttons.append({
      "content_type":"text",
      "title": another_choice,
      "payload": payload + "_False_" + word.name
    })
  
  random.shuffle(buttons)
  for button in buttons:
    data["message"]["quick_replies"].append(button)

  data = json.dumps(data)

  send_message(data)


def log(message):  # simple wrapper for logging to stdout on heroku
  print str(message)
  sys.stdout.flush()
