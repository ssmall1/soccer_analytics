from flask import Blueprint, jsonify
from app.models import Event

event_routes = Blueprint('events', __name__)

# @event_routes.route('/')
# def allEvents():
#     events = Events.query.all()
#     return jsonify([event.to_dict() for event in events])


@event_routes.route('/<int:match_key>')
def matchEvents(match_key):
    print("IN ZE BACKEND")
    events = Event.query.get(match_key)
    return events.to_dict()

