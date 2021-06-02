from .db import db

class Event(db.Model):
  __tablename__ = 'events'

  id = db.Column(db.Integer, primary_key = True)
  event_id_x = db.Column(db.Integer)
  sub_event_name = db.Column(db.String(255))
  tag_1 = db.Column(db.Numeric)
  tag_2 = db.Column(db.Numeric)
  tag_3 = db.Column(db.Numeric)
  tag_4 = db.Column(db.Numeric)
  player_id = db.Column(db.Integer)
  x_start = db.Column(db.Integer)
  y_start = db.Column(db.Integer)
  x_end = db.Column(db.Integer)
  y_end = db.Column(db.Integer)
  match_id = db.Column(db.Integer)
  event_name = db.Column(db.String(255))
  team_id = db.Column(db.Integer)
  match_period = db.Column(db.String(255))
  event_sec = db.Column(db.Numeric)
  game_week = db.Column(db.Integer)
  date_utc = db.Column(db.String(255))
  wy_id = db.Column(db.Integer)
  label = db.Column(db.String(255))
  first_name = db.Column(db.String(255))
  last_name = db.Column(db.String(255))

  match_key = db.relationship('Match', back_populates="match")

  def to_dict(self):
    return {
      "id": self.id,
      "event_id_x": self.event_id_x,
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
      "match_period": self.match_period,
      "event_sec": self.event_sec,
      "game_week": self.game_week,
      "date_utc": self.date_utc,
      "wy_id": self.wy_id,
      "label": self.label,
      "first_name": self.first_name,
      "last_name": self.event_sec,



    }