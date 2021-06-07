"""changed decial to float

Revision ID: 00b0e5e47b62
Revises: ee93fa9df840
Create Date: 2021-06-06 19:26:42.244293

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '00b0e5e47b62'
down_revision = 'ee93fa9df840'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('comments', 'content')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('comments', sa.Column('content', sa.VARCHAR(length=255), autoincrement=False, nullable=False))
    # ### end Alembic commands ###