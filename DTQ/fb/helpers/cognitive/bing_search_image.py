import requests
import sys
class BingSearchImage:
  headers = {
    # Request headers
    'Ocp-Apim-Subscription-Key': '752674ef56ac42adaba30990a21fb62c',
  }

  params ={
    # Request parameters
    'q': 'cats',
    'count': '1',
    'offset': '3',
    'mkt': 'en-us',
    'safeSearch': 'Moderate',
  }

  @staticmethod
  def search(query):
    BingSearchImage.params["q"] = query
    r = requests.get("https://api.cognitive.microsoft.com/bing/v5.0/images/search?", params=BingSearchImage.params, headers=BingSearchImage.headers)
    if r.status_code != 200:
      log(r.status_code)
      log(r.text)
    return r.json()

  @staticmethod
  def get_image(query):
    r = BingSearchImage.search(query)
    if len(r["value"]) > 0:
      return r["value"][0]["thumbnailUrl"]
    else:
      return None

def log(message):  # simple wrapper for logging to stdout on heroku
  print str(message)
  sys.stdout.flush()