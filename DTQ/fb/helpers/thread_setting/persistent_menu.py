from send import send_thread
import json

def send_persistent_menu():
  data = json.dumps({
    "setting_type" : "call_to_actions",
    "thread_state" : "existing_thread",
    "call_to_actions":[
      {
        "type":"postback",
        "title":"Help",
        "payload":"MENU_HELP"
      },
      {
        "type":"postback",
        "title":"Account",
        "payload":"MENU_ACCOUNT"
      },
      {
        "type":"postback",
        "title":"Process",
        "payload":"MENU_PROCESS"
      }
    ]
  })
  send_thread(data)
