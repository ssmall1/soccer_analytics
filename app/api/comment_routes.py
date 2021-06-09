from flask import Blueprint, jsonify, request
from app.models import db, Comment
from flask_login import login_required, current_user
from app.forms import CommentForm

comment_routes = Blueprint('comments', __name__)


# @comment_routes.route('/add', methods=["POST"])
@login_required
def post_comment():
  form = CommentForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    comment = Comment(
    #   user_id = current_user.id,
      content = form.data['content'],
    #   match_id = 
    )
    db.session.add(comment)
    db.session.commit()
    return comment.to_dict()