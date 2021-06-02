from .db import db

class Event(db.Model):
  __tablename__ = 'events'

  id = db.Column(db.Integer, primary_key = True)
  eventId_x = db.Column(db.Integer)
  subEventName = db.Column(db.String(255))
  tag1 = db.Column(db.Numeric)
  tag2 = db.Column(db.Numeric)
  tag3 = db.Column(db.Numeric)
  tag4 = db.Column(db.Numeric)
  playerId = db.Column(db.Integer)
  xStart = db.Column(db.Integer)
  yStart = db.Column(db.Integer)
  xEnd = db.Column(db.Integer)
  yEnd = db.Column(db.Integer)
  matchId = db.Column(db.Integer)
  eventName = db.Column(db.String(255))
  teamId = db.Column(db.Integer)
  matchPeriod = db.Column(db.String(255))
  eventSec = db.Column(db.Numeric)
  gameWeek = db.Column(db.Integer)
  dateutc = db.Column(db.String(255))
  wyId = db.Column(db.Integer)
  label = db.Column(db.String(255))
  firstName = db.Column(db.String(255))
  lastName = db.Column(db.String(255)) 