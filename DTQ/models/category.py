import import_package
from database import db, Category
class CategoryRecord:
  @staticmethod
  def get_all():
    categories = Category.query.order_by(Category.name)
    return categories

  @staticmethod
  def get_categories_name():
  	categories = CategoryRecord.get_all()
  	names = []
  	for category in categories:
  	  names.append(category.name)
  	return names

  @staticmethod
  def get(categoryid):
    category = db.session.query(Category).filter(Category.id == categoryid).first()
    return category
