import sys
from helpers.sendMessage.send_text import send_text_message
from helpers.sendMessage.send_list import send_list_message
from helpers.sendMessage.send_word import send_word_message
from luis import Luis
from database import db, Conversation, User
from models.category import CategoryRecord
from models.conversation import ConversationRecord
from models.post_back import PostBack
from models.user import UserRecord
from models.word import WordRecord
from models.word_result import WordResultRecord

def recieve(data):  
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
              for word_result in UserRecord.get(sender_id).word_results:
                if word_result.word_id == word_id:
                  word_result.is_learned = True
                  db.session.add(word_result)
                  db.session.commit()
                  word = WordRecord.get_new_word(sender_id, 1)
                  log(word)
                  send_word_message(sender_id, word)
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
              # send_text_message(sender_id, str(cvs.indent + " " + cvs.entity)
              if ConversationRecord.is_learn_new_word(cvs):
                if UserRecord.get_state(sender_id) == UserRecord.UserState.NONE:
                  word_result = WordResultRecord.get_wordresult_not_learn(sender_id)
                  if word_result:
                    word = WordRecord.get(int(word_result.word_id))
                    send_word_message(sender_id, word)
                  else:
                    word = WordRecord.get_new_word(sender_id, 1)
                    log(word)
                    send_word_message(sender_id, word)
                else:
                  send_text_message(sender_id, "Hoc chua het da voi lo xin them")
              else:
                send_text_message(sender_id, "Learn new words or do exercises. Please choose one of them!")

def log(message):  # simple wrapper for logging to stdout on heroku
  print str(message)
  sys.stdout.flush()
