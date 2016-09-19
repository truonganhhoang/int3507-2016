from flask import Flask
from flask.ext.sqlalchemy import SQLAlchemy
import os
import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ['DATABASE_URL']
db = SQLAlchemy(app)

class Conversation(db.Model):
  __tablename__ = 'conversation'
  id = db.Column(db.Integer, primary_key=True)
  question = db.Column(db.String(255))
  user_id = db.Column(db.String(100))
  indent = db.Column(db.String(120))
  entity = db.Column(db.String(45))
  created_at = db.Column(db.Date, default=datetime.datetime.now())
  updated_at = db.Column(db.Date, onupdate=datetime.datetime.now())

  def __init__(self, question, user_id, indent, entity):
    self.question = question
    self.user_id = user_id
    self.indent = indent
    self.entity = entity

  def __repr__(self):
    return '<Question %r>' % self.question

class User(db.Model):
  __tablename__ = 'user_chat'
  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.String(100))
  state = db.Column(db.Integer)
  # word_results = db.relationship("WordResult", back_populates="user")
  created_at = db.Column(db.Date, default=datetime.datetime.now())
  updated_at = db.Column(db.Date, onupdate=datetime.datetime.now())

  def __init__(self, user_id, state):
    self.user_id = user_id
    self.state = state
  def __repr__(self):
    return "<User %r %r>" % (self.user_id, self.state)

class Category(db.Model):
  __tablename__ = 'category'
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(255))
  description = db.Column(db.String(255))
  words = db.relationship("Word", back_populates="category")
  created_at = db.Column(db.Date, default=datetime.datetime.now())
  updated_at = db.Column(db.Date, onupdate=datetime.datetime.now())

  def __init__(self, name, description):
    self.name = name
    self.description = description

  def __repr__(self):
    return "<Category %r>" % self.name

class Word(db.Model):
  __tablename__ = 'word'
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(255))
  meaning = db.Column(db.String(255))
  category_id = db.Column(db.Integer, db.ForeignKey('category.id'))
  category = db.relationship("Category", back_populates="words")
  word_results = db.relationship("WordResult", back_populates="word")
  created_at = db.Column(db.Date, default=datetime.datetime.now())
  updated_at = db.Column(db.Date, onupdate=datetime.datetime.now())

  def __init__(self, name, meaning):
    self.name = name
    self.meaning = meaning

  def __repr__(self):
    return "<Word %r>" % self.name

class WordResult(db.Model):
  __tablename__ = 'word_result'
  id = db.Column(db.Integer, primary_key=True)
  # user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
  # user = db.relationship("User", back_populates="word_results")
  word_id = db.Column(db.Integer, db.ForeignKey('word.id'))
  word = db.relationship("Word", back_populates="word_results")
  created_at = db.Column(db.Date, default=datetime.datetime.now())
  updated_at = db.Column(db.Date, onupdate=datetime.datetime.now())
