from flask import Blueprint, jsonify
from app.models import Match

match_routes = Blueprint('matches', __name__)

@match_routes.route('/')
def matches():
    matches = Match.query.all()
    return jsonify([match.to_dict() for match in matches])


# @match_routes.route('/<int:match_key>')
# def match(match_key):
#     match = Match.query.get(match_key)
#     return match.to_dict()

