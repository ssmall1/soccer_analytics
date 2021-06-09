from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class CommentForm(FlaskForm):
  user_id = IntegerField('user_id', validators=[DataRequired()])
  match_key = IntegerField('match_key', validators=[DataRequired()])
  content = StringField('content', validators=[DataRequired()])