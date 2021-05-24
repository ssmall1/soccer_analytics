from .db import db

class Event(db.Model):
  __tablename__ = 'events'

  id = db.Column(db.Integer, primary_key = True)
  eventId_x = db.Column(db.Integer)
  subEventName = db.Column(db.String(255))
  tags = db.Column(db.PickleType)
  playerId = db.Column(db.Integer)
  positions = db.Column(db.PickleType)
  matchId = db.Column(db.Integer)
  eventName = db.Column(db.String(255))
  teamId = db.Column(db.Integer)
  matchPeriod = db.Column(db.String(255))
  eventSec = db.Column(db.Float)
  gameWeek = db.Column(db.Integer)
  date = db.Column(db.String(255))
  wyId = db.Column(db.Integer)
  label = db.Column(db.String(255))
  firstName = db.Column(db.String(255))
  middleName = db.Column(db.String(255))
  lastName = db.Column(db.String(255))



  