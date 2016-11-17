import requests
import sys
class SimSimi:
  @staticmethod
  def get_answer(say):
    params ={
    # Request parameters
      "key": "00cf8901-ec9d-41af-b4df-baa236fea088",
      "lc": "en",
      "ft": "1.0",
      "text": say
    }
    r = requests.get("http://sandbox.api.simsimi.com/request.p?",params=params)
    # r = requests.get("http://5d25b11f.ngrok.io/Program-O/chatbot/conversation_start.php?", params=params)
    # r = requests.get("http://chatbot.3dles.com/VWchat/chatbot/conversation_start.php?say=hello&convo_id=Dave&bot_id=1&format=json")
    if r.status_code != 200:
      log(r.status_code)
      log(r.text)
    r = r.json()
    log(r)
    if "result" in r:
      if int(r["result"]) == 100:
        return r["response"]
      else:
        return None
    else:
      return None

def log(message):  # simple wrapper for logging to stdout on heroku
  print str(message)
  sys.stdout.flush()
