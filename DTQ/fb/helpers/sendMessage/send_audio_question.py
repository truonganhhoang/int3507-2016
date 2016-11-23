import import_package
from send import send_message
import json
import requests
import sys

def send_audio_question_message(recipient_id, word):

  #get sound
  # sound_url = "http://dict.laban.vn/ajax/getsound?accent=uk&word=" + word.name.lower()
  # r = requests.get(sound_url)
  # r = r.json()
  # log(r)
  # # sound_link = "http://"
  # # if int(r["error"]) == 0:
  # sound_link = r["data"]
  
  data = json.dumps({
    "recipient": {
      "id": recipient_id
    },
    
    "message": {
      "text": "What word in this audio?"
    }
  })
  send_message(data)

  sound_link = "http://stream.dict.laban.vn/uk/d422d0ec37672abb3f2fef58b94c608d/157765c6199/H/hello.mp3"
  # sound_link = word.link_pronunciation
  log(sound_link)
  data = json.dumps({
    "recipient": {
      "id": recipient_id
    },
    
    "message": {
      "attachment":{
        "type":"audio",
        "payload":{
          "url": sound_link
        }
      }
    }
  })
  send_message(data)


def log(message):  # simple wrapper for logging to stdout on heroku
  print str(message)
  sys.stdout.flush()
