import json
import requests
class Luis:
  LINK = "https://api.projectoxford.ai/luis/v1/application?id=8a9a1f57-0cc9-4be6-b1e8-208e11f75cd1&subscription-key=f584a01684e5465f8e5e04848620022b&q="
  START_ACTIVITY = "startActivity"
  STOP_ACTIVITY = "stopActivity"
  WORD = "word"
  EXERSICE = "exersice"
  # def __init__(self):

  def get_answer(self, question):
    response = requests.get(self.LINK + question)
    result = response.json()
    return result

  def get_type_activity(self, answer):
    return answer["intents"][0]["intent"]

  def get_entity(self, answer):
    if len(answer["entities"]): 
      return answer["entities"][0]["entity"]
    else:
      return None

  def is_start_activity(self, answer):
    if self.get_type_activity(answer) == self.START_ACTIVITY:
      return True
    else:
      return False

  def is_stop_activity(self, answer):
    if self.get_type_activity(answer) == self.STOP_ACTIVITY:
      return True
    else:
      return False

  def is_word_entity(self, answer):
    if len(answer["entities"]): 
      if answer["entities"][0]["entity"] == self.WORD:
        return True
      else:
        return False
    else:
      return False

  def is_exersice_entity(self, answer):
    if len(answer["entities"]):
      if answer["entities"][0]["entity"] == self.EXERSICE:
        return True
      else:
        return False
    else:
      return False

  def is_learn_new_word(self, answer):
    return self.is_start_activity(answer) and self.is_word_entity(answer)

  def is_do_exersice(self, answer):
    return self.is_start_activity(answer) and self.is_exersice_entity(answer)
