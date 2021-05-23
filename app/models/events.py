from .db import db

class Event(db.Model):
  __tablename__ = 'events'

  id = db.Column(db.Integer, primary_key = True)
  eventId_x = db.Column(db.Integer)
  subEventName = db.Column(db.String)
  tags = db.Column(db.Array)
  playerId = db.Column(db.Integer)
  positions = db.Column(db.Array)
  matchId = db.Column(db.Integer)
  eventName = db.Column(db.String)
  teamId = db.Column(db.Integer)
  matchPeriod = db.Column(db.String)
  eventSec = db.Column(db.Float)
  gameWeek = db.Column(db.Integer)
  date = db.Column(db.DateTime)
  wyId = db.Column(db.Integer)
  label = db.Column(db.String)
  firstName = db.Column(db.String)
  middleName = db.Column(db.String)
  lastName = db.Column(db.String)



  