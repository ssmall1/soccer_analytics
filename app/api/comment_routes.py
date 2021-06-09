from flask import Blueprint, jsonify, request
from app.models import db, Comment
from flask_login import login_required
from app.forms import CommentForm

comment_routes = Blueprint('comments', __name__)


@comment_routes.route('/<int:match_id>')
@login_required
def get_favorites(match_id):
    res = Comment.query.filter(Comment.match_id == match_id).all()
    comments = [comment.to_dict() for comment in res]
    return jsonify(comments)


@comment_routes.route('/', methods=["POST"])
@login_required
def post_comment():
    form = CommentForm()
    new_comment = Comment(
        user_id = form.user_id.data,
        match_key = form.match_key.data,
        content = form.content.data
    )

    db.session.add(new_comment)
    db.session.commit()
    return new_comment.to_dict()
