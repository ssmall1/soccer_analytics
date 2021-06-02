"""empty message

Revision ID: 1f70ef8e02f8
Revises: 90bd707286d6
Create Date: 2021-06-01 21:06:00.361280

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '1f70ef8e02f8'
down_revision = '90bd707286d6'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('events', 'middleName')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('events', sa.Column('middleName', sa.VARCHAR(length=255), autoincrement=False, nullable=True))
    # ### end Alembic commands ###