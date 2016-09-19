from database import db, Category, Word

class Seed:
  def __init__(self):
    db.create_all()

  def make(self):
    for i in range(20):
      category = Category("Category " + str(i), "Description: Category " + str(i))
      db.session.add(category)
      db.session.commit()
      for j in range(20):
        word = Word("Word " + str(i) + str(j), "Meaning: Word " + str(i) + str(j))
        category.words.append(word)
        db.session.commit()
