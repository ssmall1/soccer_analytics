from .db import db
from .event import Event

class Match(db.Model):
  __tablename__ = 'matches'

  id = db.Column(db.Integer, primary_key = True)
  match_key = db.Column(db.Integer, unique=True)
  match_name = db.Column(db.String(255), unique=True)
  match_img = db.Column(db.String(255))

  matches = db.relationship('Event', foreign_keys=[Event.match_id], back_populates="match")
  matches_label = db.relationship('Event', foreign_keys=[Event.label], back_populates="match_label")
  comment = db.relationship('Comment', back_populates="match")
  favorite = db.relationship('Favorite', back_populates="match")

  def to_dict(self):
    return {
      "id": self.id,
      "match_key": self.match_key,
      "match_name": self.match_name,
      "match_img": self.match_img
    }
