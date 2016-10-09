import import_package
from send import send_message
import json
from cognitive.bing_search_image import BingSearchImage
import requests
import sys
import random

def send_question_message(recipient_id, word, another_choices):
  question = word.name.title() + " mean?"
  data = json.dumps({
    "recipient": {
      "id": recipient_id
    },
    
    "message": {
      "text": question,
      "quick_replies": []
    }
  })
  data = json.loads(data)

  buttons = []
  buttons.append({
    "content_type":"text",
    "title": word.meaning,
    "payload": "Question_True"
  })
  for another_choice in another_choices:
    buttons.append({
      "content_type":"text",
      "title": another_choice,
      "payload": "Question_False_" + word.meaning
    })
  
  random.shuffle(buttons)
  for button in buttons:
    data["message"]["quick_replies"].append(button)

  data = json.dumps(data)

  send_message(data)


def log(message):  # simple wrapper for logging to stdout on heroku
  print str(message)
  sys.stdout.flush()
