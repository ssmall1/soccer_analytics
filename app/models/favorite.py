from .db import db

class Favorite(db.Model):
  __tablename__ = 'favorites'

  id = db.Column(db.Integer, primary_key = True)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
  match_id = db.Column(db.Integer, db.ForeignKey('matches.id'), nullable=False)

  user = db.relationship('User')
  match = db.relationship('Match', back_populates="favorite")

  def to_dict(self):
    return {
      "id": self.id,
      "user_id": self.user_id,
      "match_id": self.match_id
    }
