from .db import db

class Match(db.Model):
  __tablename__ = 'matches'

  id = db.Column(db.Integer, primary_key = True)
  match_key = db.Column(db.Integer)

  match = db.relationship('Event')

  def to_dict(self):
    return {
      "id": self.id,
      "match_key": self.match_key
    }
