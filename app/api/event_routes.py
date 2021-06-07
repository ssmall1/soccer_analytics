import pprint
from flask import Blueprint, jsonify
from app.models import Event


event_routes = Blueprint('events', __name__)

@event_routes.route('/')
def allEvents():
    events1 = Event.query.limit(5).all()
    events = [event.to_dict() for event in events1]
    pp = pprint.PrettyPrinter(width=41, compact=True)
    # pp.pprint(events)
    return jsonify(events)


@event_routes.route('/<int:match_key>')
def matchEvents(match_key):
    events1 = Event.query.filter(Event.match_id == match_key).all()
    pp = pprint.PrettyPrinter(width=41, compact=True)
    # print(events1)
    events = [event.to_dict() for event in events1]
    # pp.pprint(events)
    return jsonify(events)
