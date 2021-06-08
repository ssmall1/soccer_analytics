from flask import Blueprint, jsonify
from app.models import Match

match_routes = Blueprint('matches', __name__)

@match_routes.route('/')
def matches():
    matches = Match.query.all()
    return jsonify([match.to_dict() for match in matches])


@match_routes.route('/<int:match_key>')
def match(match_key):
    res = Match.query.filter(Match.match_key == match_key).one()
    match = res.to_dict()
    return jsonify(match)
