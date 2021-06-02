from .db import db

class Match(db.Model):
  __tablename__ = 'matches'

  id = db.Column(db.Integer, primary_key = True)
  match_key = db.Column(db.Integer, db.ForeignKey('events.match_id'))

  match = db.relationship('Event', back_populates="match_key")
  comment = db.relationship('Comment', back_populates="match")
  favorite = db.relationship('Favorite', back_populates="match")

  def to_dict(self):
    return {
      "id": self.id,
      "match_key": self.match_key
    }
