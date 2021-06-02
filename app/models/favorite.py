from .db import db

class Favorite(db.Model):
  __tablename__ = 'favorites'

  id = db.Column(db.Integer, primary_key = True)
  user_id = db.Column(db.Integer, nullable=False)
  match_id = db.Column(db.Integer, nullable=False)

  user = db.relationship('User')
  match = db.relationship('Match')

  def to_dict(self):
    return {
      "id": self.id,
      "user_id": self.user_id,
      "match_id": self.match_id
    }
