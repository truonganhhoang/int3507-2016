import import_package
from luis import Luis
class ConversationRecord:
  @staticmethod
  def is_learn_new_word(conversation):
    if conversation:
      if conversation.indent == Luis.START_ACTIVITY and conversation.entity == Luis.WORD:
        return True
      else:
        return False
    else:
      return False
  
  @staticmethod
  def is_do_exercises(conversation):
    conversations = ["do exercises", "exercise", "some exercises"]
    for cvs in conversations:
      if cvs.upper() == conversation.upper():
        return True
    return False
