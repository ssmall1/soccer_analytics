"""added content comment back

Revision ID: c02169ce232b
Revises: 00b0e5e47b62
Create Date: 2021-06-06 19:27:13.403249

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c02169ce232b'
down_revision = '00b0e5e47b62'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('comments', sa.Column('content', sa.String(length=255), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('comments', 'content')
    # ### end Alembic commands ###
