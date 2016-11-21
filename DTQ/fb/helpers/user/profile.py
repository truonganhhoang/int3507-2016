import requests
import sys
import os
def get_profile(user_id):
  headers = {
    # Request headers
    'Ocp-Apim-Subscription-Key': '752674ef56ac42adaba30990a21fb62c',
  }

  params = {
    "fields": "first_name,last_name,gender",
    "access_token": os.environ["PAGE_ACCESS_TOKEN"]
  }
  
  r = requests.get("https://graph.facebook.com/v2.6/" + user_id +"?", params=params)
  return r.json()
