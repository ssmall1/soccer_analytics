from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Favorite, db

favorite_routes = Blueprint('favorites', __name__)

@favorite_routes.route('/<int:user_id>')
@login_required
def getFavorites(user_id):
    res = Favorite.query.filter(Favorite.user_id == user_id).all()
    favorites = [favorite.to_dict() for favorite in res]
    return jsonify(favorites)


@favorite_routes.route('/', methods=["POST"])
@login_required
def postFavorite():
    favorite = Favorite(**request.json)

    db.session.add(favorite)
    db.session.commit()

    return favorite.to_dict()