from flask import Blueprint, jsonify
from app.models import Favorite

match_routes = Blueprint('favorites', __name__)

@favorite_routes.route('/')
def postFavorite():
    