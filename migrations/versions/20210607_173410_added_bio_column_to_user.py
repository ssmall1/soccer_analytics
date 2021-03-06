"""added bio column to user

Revision ID: 60ebedc0328e
Revises: 7a35434facb6
Create Date: 2021-06-07 17:34:10.094638

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '60ebedc0328e'
down_revision = '7a35434facb6'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('bio', sa.String(length=255), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'bio')
    # ### end Alembic commands ###
