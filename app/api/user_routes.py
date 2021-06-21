from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User, db

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route("/<int:id>", methods=["PUT"])
@login_required
def update_user(id):
    user = User.query.get(id)

    user.first_name = request.json["first_name"]
    user.last_name = request.json["last_name"]
    user.img_url = request.json["img_url"]
    user.bio = request.json["bio"]

    db.session.add(user)
    db.session.commit()
    new_user = user.to_dict()
    return jsonify(new_user)
