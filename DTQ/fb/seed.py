from database import db, Category, Word

class Seed:
  def __init__(self):
    db.create_all()

  def make(self):
    with open("data/categories.csv") as inCategories:
      for line in inCategories:
        objLine = line.split(",")
        category = Category(objLine[1].strip(" "), objLine[2].strip("\n").strip(" "))
        db.session.add(category)
        db.session.commit()
    with open("data/words.csv") as inWords:
      for line in inWords:
        objLine = line.strip("\n").split(",")
        if objLine[3].strip(" ") != "":
          print objLine[3].strip("\n").strip(" ")
          category = db.session.query(Category).filter(Category.id == int(objLine[3].strip("\n").strip(" "))).first()
          word = Word(objLine[1].strip(" "), objLine[2].strip(" "))
          category.words.append(word)
          db.session.commit()
