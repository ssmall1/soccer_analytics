from .db import db

class Comment(db.Model):
  __tablename__ = 'comments'

  id = db.Column(db.Integer, primary_key = True)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
  content = db.Column(db.String(255), nullable=False)
  match_id = db.Column(db.Integer, db.ForeignKey('matches.id'), nullable=False)

  user = db.relationship('User', back_populates="comment")
  match = db.relationship('Match', back_populates="comment")

  def to_dict(self):
    return {
      "id": self.id,
      "user_id": self.user_id,
      "content": self.content,
      "match_id": self.match_id
    }
