from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Favorite, db

favorite_routes = Blueprint('favorites', __name__)

@favorite_routes.route('/', methods=["POST"])
@login_required
def postFavorite():
    favorite = Favorite(**request.json)

    db.session.add(favorite)
    db.session.commit()
    print(favorite.to_dict())

    return favorite.to_dict()