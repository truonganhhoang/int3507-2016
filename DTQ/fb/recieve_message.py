import sys
import time
from random import randint
from helpers.sendMessage.send_text import send_text_message
from helpers.sendMessage.send_list import send_list_message
from helpers.sendMessage.send_word import send_word_message
from helpers.sendMessage.send_question import send_question_message
from helpers.sendMessage.send_image_question import send_image_question_message
from helpers.sendMessage.send_audio_question import send_audio_question_message
from helpers.program_o.program_o  import ProgramO
from luis import Luis
from database import db, Conversation, User
from models.category import CategoryRecord
from models.conversation import ConversationRecord
from models.post_back import PostBack
from models.user import UserRecord
from models.word import WordRecord
from models.word_result import WordResultRecord

def recieve(data):
  word_listen = None
  if data["object"] == "page":

    for entry in data["entry"]:
      log(entry["messaging"])
      for messaging_event in entry["messaging"]:
        if messaging_event.get("message"):  # someone sent us a message

          sender_id = messaging_event["sender"]["id"]    # the facebook ID of the person sending you the message
          recipient_id = messaging_event["recipient"]["id"]  # the recipient's ID, which should be your page's facebook ID
          message_text = messaging_event["message"]["text"].lower()  # the message's text
          luis = Luis()
          
          if "quick_reply" in messaging_event["message"]:
            payload = messaging_event["message"]["quick_reply"]["payload"]
            if PostBack.PAY_LOAD_WORD in payload:
              word_id = int(payload.split(" ")[1])
              user = UserRecord.get(sender_id)
              for word_result in user.word_results:
                if word_result.word_id == word_id:
                  word_result.is_learned = True
                  db.session.add(word_result)
                  db.session.commit()

                  user.word_learned += 1
                  db.session.add(user)
                  db.session.commit()
                
                  if (user.word_learned - 1) % 3 and user.word_learned > 0:
                    UserRecord.set_state(sender_id, UserRecord.UserState.TESTING_WORD)
                    send_random_type_question(sender_id)
                  else:
                    send_new_word(sender_id)
            else:
              if PostBack.PAY_LOAD_QUESTION in payload:
                if "True" in payload:
                  send_text_message(sender_id, "Correct")
                else:
                  answer_right = payload.split("_")[2].upper()
                  send_text_message(sender_id, "Wrong. Correct answer is " + answer_right)
                time.sleep(1)
                send_word_not_learn(sender_id)
                UserRecord.set_state(sender_id, UserRecord.UserState.NONE)
              else:
                if PostBack.PAY_LOAD_DO_EXERCISE in payload:
                  if "True" in payload:
                    send_text_message(sender_id, "Correct")
                    log("Gui Correc")
                  else:
                    answer_right = payload.split("_")[2].upper()
                    send_text_message(sender_id, "Wrong. Correct answer is " + answer_right)
                  time.sleep(1)
                  send_random_type_question(sender_id, do_exercise=True)

          else:
            if message_text:

              cvs = db.session.query(Conversation)\
                .filter(Conversation.question == message_text).first()
              # log(cvs)
              if cvs is None:
                answer = luis.get_answer(message_text)
                indent = luis.get_type_activity(answer)
                entity = luis.get_entity(answer)
                cvs = Conversation(message_text, sender_id, indent,
                  entity)
                db.session.add(cvs)
                db.session.commit()
              log(cvs)
              
              if ConversationRecord.is_learn_new_word(cvs):
                if UserRecord.get_state(sender_id) == UserRecord.UserState.NONE:
                  send_word_not_learn(sender_id)
                else:
                  if UserRecord.get_state(sender_id) == UserRecord.UserState.TESTING_WORD:
                    send_random_type_question(sender_id)
              else:
                if ConversationRecord.is_do_exercises(message_text):
                  send_random_type_question(sender_id, do_exercise=True)
                else:
                  botsay = ProgramO.get_answer(sender_id, message_text)
                  send_text_message(sender_id, botsay)

def send_question(sender_id, do_exercise=False):
  random_result = WordResultRecord.get_random_result(sender_id)
  if random_result:
    word_question = WordRecord.get(random_result.word_id)
    meanings = WordRecord.get_meanings(2)
    send_question_message(sender_id, word_question, meanings, do_exercise=do_exercise)

def send_image_quesion(sender_id, do_exercise=False):
  random_result = WordResultRecord.get_random_result(sender_id)
  if random_result:
    word_question = WordRecord.get(random_result.word_id)
    names = WordRecord.get_random_names(2)
    send_image_question_message(sender_id, word_question, names, do_exercise=do_exercise)

def send_audio_question(sender_id, do_exercise=False):
  random_result = WordResultRecord.get_random_result(sender_id)
  if random_result:
    word_question = WordRecord.get(random_result.word_id)
    send_audio_question_message(sender_id, word_question)
    word_listen = word_question

def send_random_type_question(sender_id, do_exercise=False):
  type_question = randint(0, 1)
  func = {0: send_question, 1: send_image_quesion, 2: send_audio_question}
  func[type_question](sender_id, do_exercise)

def send_new_word(sender_id):
  word = WordRecord.get_new_word(sender_id, 1)
  log(word)
  send_word_message(sender_id, word)

def send_word_not_learn(sender_id):
  word_result = WordResultRecord.get_wordresult_not_learn(sender_id)
  if word_result:
    word = WordRecord.get(int(word_result.word_id))
    send_word_message(sender_id, word)
  else:
    send_new_word(sender_id)

def log(message):  # simple wrapper for logging to stdout on heroku
  print str(message)
  sys.stdout.flush()
