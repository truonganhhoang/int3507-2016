from send import send_message
import json

def send_text_message(recipient_id, message_text):
  data = json.dumps({
    "recipient": {
      "id": recipient_id
    },
    "message": {
      "text": message_text
    }
  })
  send_message(data)
