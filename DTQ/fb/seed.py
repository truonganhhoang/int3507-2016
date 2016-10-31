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
        objLine = line.strip("\n").strip("\r").split("\t")
        if objLine[2].strip(" ") != "":
          print objLine[2].strip("\n").strip(" ")
          category = db.session.query(Category).filter(Category.id == int(objLine[2].strip("\n").strip(" "))).first()
          # print objLine[4]
          word = Word(objLine[0].strip(" "), objLine[1].strip(" "), objLine[3].strip(" "), objLine[4].strip(" "))
          category.words.append(word)
          db.session.commit()