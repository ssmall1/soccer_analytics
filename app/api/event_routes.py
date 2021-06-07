from flask import Blueprint, jsonify
from app.models import Event

event_routes = Blueprint('events', __name__)

# @event_routes.route('/')
# def allEvents():
#     events = Events.query.all()
#     return jsonify([event.to_dict() for event in events])


@event_routes.route('/<int:match_key>')
def matchEvents(match_key):
    events1 = Event.query.filter(Event.match_id == match_key).all()
    events = [event.to_dict() for event in events1]
    # user = User.query.filter(User.username == currentuser).first().email
    print('----------------------------------------------')
    print("EVENTS", events)
    # return events.to_dict()
    return "something"

