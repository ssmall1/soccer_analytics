"""empty message

Revision ID: 0e76803ea752
Revises: 1f70ef8e02f8
Create Date: 2021-06-02 12:00:51.334212

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0e76803ea752'
down_revision = '1f70ef8e02f8'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('events', sa.Column('date_utc', sa.String(length=255), nullable=True))
    op.add_column('events', sa.Column('event_id_x', sa.Integer(), nullable=True))
    op.add_column('events', sa.Column('event_name', sa.String(length=255), nullable=True))
    op.add_column('events', sa.Column('event_sec', sa.Numeric(), nullable=True))
    op.add_column('events', sa.Column('first_name', sa.String(length=255), nullable=True))
    op.add_column('events', sa.Column('game_week', sa.Integer(), nullable=True))
    op.add_column('events', sa.Column('last_name', sa.String(length=255), nullable=True))
    op.add_column('events', sa.Column('match_id', sa.Integer(), nullable=True))
    op.add_column('events', sa.Column('match_period', sa.String(length=255), nullable=True))
    op.add_column('events', sa.Column('player_id', sa.Integer(), nullable=True))
    op.add_column('events', sa.Column('sub_event_name', sa.String(length=255), nullable=True))
    op.add_column('events', sa.Column('tag_1', sa.Numeric(), nullable=True))
    op.add_column('events', sa.Column('tag_2', sa.Numeric(), nullable=True))
    op.add_column('events', sa.Column('tag_3', sa.Numeric(), nullable=True))
    op.add_column('events', sa.Column('tag_4', sa.Numeric(), nullable=True))
    op.add_column('events', sa.Column('team_id', sa.Integer(), nullable=True))
    op.add_column('events', sa.Column('wy_id', sa.Integer(), nullable=True))
    op.add_column('events', sa.Column('x_end', sa.Integer(), nullable=True))
    op.add_column('events', sa.Column('x_start', sa.Integer(), nullable=True))
    op.add_column('events', sa.Column('y_end', sa.Integer(), nullable=True))
    op.add_column('events', sa.Column('y_start', sa.Integer(), nullable=True))
    op.drop_column('events', 'yStart')
    op.drop_column('events', 'dateutc')
    op.drop_column('events', 'eventId_x')
    op.drop_column('events', 'firstName')
    op.drop_column('events', 'teamId')
    op.drop_column('events', 'matchPeriod')
    op.drop_column('events', 'playerId')
    op.drop_column('events', 'eventName')
    op.drop_column('events', 'tag1')
    op.drop_column('events', 'tag2')
    op.drop_column('events', 'yEnd')
    op.drop_column('events', 'lastName')
    op.drop_column('events', 'gameWeek')
    op.drop_column('events', 'xStart')
    op.drop_column('events', 'tag3')
    op.drop_column('events', 'eventSec')
    op.drop_column('events', 'subEventName')
    op.drop_column('events', 'xEnd')
    op.drop_column('events', 'matchId')
    op.drop_column('events', 'tag4')
    op.drop_column('events', 'wyId')
    op.add_column('users', sa.Column('first_name', sa.String(length=255), nullable=False))
    op.add_column('users', sa.Column('img_url', sa.String(length=255), nullable=True))
    op.add_column('users', sa.Column('last_name', sa.String(length=255), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'last_name')
    op.drop_column('users', 'img_url')
    op.drop_column('users', 'first_name')
    op.add_column('events', sa.Column('wyId', sa.INTEGER(), autoincrement=False, nullable=True))
    op.add_column('events', sa.Column('tag4', sa.NUMERIC(), autoincrement=False, nullable=True))
    op.add_column('events', sa.Column('matchId', sa.INTEGER(), autoincrement=False, nullable=True))
    op.add_column('events', sa.Column('xEnd', sa.INTEGER(), autoincrement=False, nullable=True))
    op.add_column('events', sa.Column('subEventName', sa.VARCHAR(length=255), autoincrement=False, nullable=True))
    op.add_column('events', sa.Column('eventSec', sa.NUMERIC(), autoincrement=False, nullable=True))
    op.add_column('events', sa.Column('tag3', sa.NUMERIC(), autoincrement=False, nullable=True))
    op.add_column('events', sa.Column('xStart', sa.INTEGER(), autoincrement=False, nullable=True))
    op.add_column('events', sa.Column('gameWeek', sa.INTEGER(), autoincrement=False, nullable=True))
    op.add_column('events', sa.Column('lastName', sa.VARCHAR(length=255), autoincrement=False, nullable=True))
    op.add_column('events', sa.Column('yEnd', sa.INTEGER(), autoincrement=False, nullable=True))
    op.add_column('events', sa.Column('tag2', sa.NUMERIC(), autoincrement=False, nullable=True))
    op.add_column('events', sa.Column('tag1', sa.NUMERIC(), autoincrement=False, nullable=True))
    op.add_column('events', sa.Column('eventName', sa.VARCHAR(length=255), autoincrement=False, nullable=True))
    op.add_column('events', sa.Column('playerId', sa.INTEGER(), autoincrement=False, nullable=True))
    op.add_column('events', sa.Column('matchPeriod', sa.VARCHAR(length=255), autoincrement=False, nullable=True))
    op.add_column('events', sa.Column('teamId', sa.INTEGER(), autoincrement=False, nullable=True))
    op.add_column('events', sa.Column('firstName', sa.VARCHAR(length=255), autoincrement=False, nullable=True))
    op.add_column('events', sa.Column('eventId_x', sa.INTEGER(), autoincrement=False, nullable=True))
    op.add_column('events', sa.Column('dateutc', sa.VARCHAR(length=255), autoincrement=False, nullable=True))
    op.add_column('events', sa.Column('yStart', sa.INTEGER(), autoincrement=False, nullable=True))
    op.drop_column('events', 'y_start')
    op.drop_column('events', 'y_end')
    op.drop_column('events', 'x_start')
    op.drop_column('events', 'x_end')
    op.drop_column('events', 'wy_id')
    op.drop_column('events', 'team_id')
    op.drop_column('events', 'tag_4')
    op.drop_column('events', 'tag_3')
    op.drop_column('events', 'tag_2')
    op.drop_column('events', 'tag_1')
    op.drop_column('events', 'sub_event_name')
    op.drop_column('events', 'player_id')
    op.drop_column('events', 'match_period')
    op.drop_column('events', 'match_id')
    op.drop_column('events', 'last_name')
    op.drop_column('events', 'game_week')
    op.drop_column('events', 'first_name')
    op.drop_column('events', 'event_sec')
    op.drop_column('events', 'event_name')
    op.drop_column('events', 'event_id_x')
    op.drop_column('events', 'date_utc')
    # ### end Alembic commands ###
