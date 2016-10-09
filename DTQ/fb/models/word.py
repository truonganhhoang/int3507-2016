import import_package
from database import db, Word
from random import randint
from word_result import WordResultRecord
from category import CategoryRecord
import sys

class WordRecord:
  @staticmethod
  def get(word_id):
    word = db.session.query(Word)\
      .filter(Word.id == word_id).first()
    return word

  @staticmethod
  def get_new_word(user_id, category_id):
    category = CategoryRecord.get(category_id)
    words = category.words
    WordRecord.log(words)
    result = None
    for word in words:
      WordRecord.log(word)
      if not WordResultRecord.get(user_id, word.id):
        result = word
        break
    WordResultRecord.create_wordresult(user_id, word.id)
    return word

  @staticmethod
  def get_meanings(nMeaning):
    meanings = []
    words = Word.query.all()
    while len(meanings) < nMeaning:
      random_int = randint(0, len(words))
      if len(words[random_int].meaning) < 20:
        meanings.append(words[random_int].meaning)
        del words[random_int]
    return meanings

  @staticmethod
  def get_random_names(nName):
    names = []
    words = Word.query.all()
    while len(names) < nName:
      random_int = randint(0, len(words))
      if len(words[random_int].name) < 20:
        names.append(words[random_int].name)
        del words[random_int]
    return names

  @staticmethod
  def log(message):  # simple wrapper for logging to stdout on heroku
    print str(message)
    sys.stdout.flush()