from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Favorite, db

favorites_routes = Blueprint('favorites', __name__)

@favorites_routes.route('/<int:user_id>')
@login_required
def get_favorites(user_id):
    res = Favorite.query.filter(Favorite.user_id == user_id).all()
    favorites = [favorite.to_dict() for favorite in res]
    return jsonify(favorites)


@favorites_routes.route('/', methods=["POST"])
@login_required
def post_favorite():
    favorite = Favorite(**request.json)

    db.session.add(favorite)
    db.session.commit()

    return favorite.to_dict()


@favorites_routes.route("/<int:favoriteId>", methods=["DELETE"])
@login_required
def remove_favorite(favoriteId):
    favorite = Favorite.query.get(favoriteId)

    db.session.delete(favorite)
    db.session.commit()
    return favorite.to_dict