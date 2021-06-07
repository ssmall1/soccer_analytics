from .db import db

class Event(db.Model):
  __tablename__ = 'events'

  id = db.Column(db.Integer, primary_key = True)
  sub_event_name = db.Column(db.String(255))
  tag_1 = db.Column(db.Float)
  tag_2 = db.Column(db.Float)
  tag_3 = db.Column(db.Float)
  tag_4 = db.Column(db.Float)
  player_id = db.Column(db.Integer)
  x_start = db.Column(db.Integer)
  y_start = db.Column(db.Integer)
  x_end = db.Column(db.Integer)
  y_end = db.Column(db.Integer)
  match_id = db.Column(db.Integer, db.ForeignKey('matches.match_key'))
  event_name = db.Column(db.String(255))
  team_id = db.Column(db.Integer)
  event_sec = db.Column(db.Float)
  date_utc = db.Column(db.String(255))
  label = db.Column(db.String(255), db.ForeignKey('matches.match_name'))
  first_name = db.Column(db.String(255))
  last_name = db.Column(db.String(255))

  match = db.relationship('Match', foreign_keys=[match_id], back_populates="matches")
  match_label = db.relationship('Match', foreign_keys=[label], back_populates="matches_label")


  def to_dict(self):
    return {
      "id": self.id,
      "sub_event_name": self.sub_event_name,
      "tag_1": self.tag_1,
      "tag_2": self.tag_2,
      "tag_3": self.tag_3,
      "tag_4": self.tag_4,
      "player_id": self.player_id,
      "x_start": self.x_start,
      "y_start": self.y_start,
      "x_end": self.x_end,
      "y_end": self.y_end,
      "match_id": self.match_id,
      "event_name": self.event_name,
      "team_id": self.team_id,
      "event_sec": self.event_sec,
      "date_utc": self.date_utc,
      "label": self.label,
      "first_name": self.first_name,
      "last_name": self.last_name,
    }