from send import send_message
import json

def send_list_message(recipient_id, title, category):
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
              "title": "#" + title,
              "buttons":[]
            }
          ]
        }
      }
    }
  })

  data = json.loads(data)
  data["message"]["attachment"]["payload"]["elements"][0]["buttons"].append({\
    "type":"postback",\
    "title": category.name,\
    "payload": "category" + " " + str(category.id)
  })
  data = json.dumps(data)

  send_message(data)
