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
