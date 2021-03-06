from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  first_name = db.Column(db.String(255), nullable = False)
  last_name = db.Column(db.String(255), nullable = False)
  email = db.Column(db.String(255), nullable = False, unique = True)
  hashed_password = db.Column(db.String(255), nullable = False)
  img_url = db.Column(db.String(255))
  bio = db.Column(db.String(255))

  comment = db.relationship('Comment', back_populates="user")

  @property
  def password(self):
    return self.hashed_password


  @password.setter
  def password(self, password):
    self.hashed_password = generate_password_hash(password)


  def check_password(self, password):
    return check_password_hash(self.password, password)


  def to_dict(self):
    return {
      "id": self.id,
      "first_name": self.first_name,
      "last_name": self.last_name,
      "email": self.email,
      "img_url": self.img_url,
      "bio": self.bio
    }

  def to_dict_comment(self):
    return {
      "first_name": self.first_name,
      "last_name": self.last_name,
      "img_url": self.img_url,
    }
