import os
import sys
import json

import requests
from flask import Flask, request
from recieve_message import recieve
from helpers.thread_setting.persistent_menu import send_persistent_menu
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
  # endpoint for processing incoming messaging events
  data = request.get_json()
  log(data)  # you may not want to log every incoming message in production, but it's good for testing
  recieve(data)
  return "ok", 200

@app.before_first_request
def send_menu():
  send_persistent_menu()

def log(message):  # simple wrapper for logging to stdout on heroku
  print str(message)
  sys.stdout.flush()


if __name__ == '__main__':
  app.run(debug=True)
  
