"""empty message

Revision ID: c5479344dbe9
Revises: 
Create Date: 2021-06-02 15:11:54.117116

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c5479344dbe9'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('comments',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('content', sa.String(length=255), nullable=False),
    sa.Column('match_id', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('events',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('event_id_x', sa.Integer(), nullable=True),
    sa.Column('sub_event_name', sa.String(length=255), nullable=True),
    sa.Column('tag_1', sa.Numeric(), nullable=True),
    sa.Column('tag_2', sa.Numeric(), nullable=True),
    sa.Column('tag_3', sa.Numeric(), nullable=True),
    sa.Column('tag_4', sa.Numeric(), nullable=True),
    sa.Column('player_id', sa.Integer(), nullable=True),
    sa.Column('x_start', sa.Integer(), nullable=True),
    sa.Column('y_start', sa.Integer(), nullable=True),
    sa.Column('x_end', sa.Integer(), nullable=True),
    sa.Column('y_end', sa.Integer(), nullable=True),
    sa.Column('match_id', sa.Integer(), nullable=True),
    sa.Column('event_name', sa.String(length=255), nullable=True),
    sa.Column('team_id', sa.Integer(), nullable=True),
    sa.Column('match_period', sa.String(length=255), nullable=True),
    sa.Column('event_sec', sa.Numeric(), nullable=True),
    sa.Column('game_week', sa.Integer(), nullable=True),
    sa.Column('date_utc', sa.String(length=255), nullable=True),
    sa.Column('wy_id', sa.Integer(), nullable=True),
    sa.Column('label', sa.String(length=255), nullable=True),
    sa.Column('first_name', sa.String(length=255), nullable=True),
    sa.Column('last_name', sa.String(length=255), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('favorites',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('match_id', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('matches',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('match_key', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('first_name', sa.String(length=255), nullable=False),
    sa.Column('last_name', sa.String(length=255), nullable=False),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.Column('img_url', sa.String(length=255), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('users')
    op.drop_table('matches')
    op.drop_table('favorites')
    op.drop_table('events')
    op.drop_table('comments')
    # ### end Alembic commands ###