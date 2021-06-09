from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired

class CommentForm(FlaskForm):
  content = StringField('content', validators=[DataRequired()])