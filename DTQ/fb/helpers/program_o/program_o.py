import requests
import sys
class ProgramO:
  @staticmethod
  def get_answer(user_id, say):
    params ={
    # Request parameters
      "say": say,
      "convo_id": user_id,
      "format": "json"
    }
    r = requests.get("http://lebot.3eeweb.com/chatbot/conversation_start.php?",params=params)
    # r = requests.get("http://chatbot.3dles.com/VWchat/chatbot/conversation_start.php?say=hello&convo_id=Dave&bot_id=1&format=json")
    if r.status_code != 200:
      log(r.status_code)
      log(r.text)
    r = r.json()
    return r["botsay"]

def log(message):  # simple wrapper for logging to stdout on heroku
  print str(message)
  sys.stdout.flush()
