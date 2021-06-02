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