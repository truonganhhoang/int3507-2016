import sys
import os
import requests

def send_thread(data):

  log("sending thread...")

  params = {
    "access_token": os.environ["PAGE_ACCESS_TOKEN"]
  }
  headers = {
    "Content-Type": "application/json"
  }

  r = requests.post("https://graph.facebook.com/v2.6/me/thread_settings", params=params, headers=headers, data=data)
  if r.status_code != 200:
    log(r.status_code)
    log(r.text)
  else:
    log(r)

def log(message):  # simple wrapper for logging to stdout on heroku
  print str(message)
  sys.stdout.flush()
