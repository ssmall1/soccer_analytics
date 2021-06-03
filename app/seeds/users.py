from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(first_name='Marcelo', last_name='Bielsa', email='bielsa@leeds.com',
                password='whatisgoingon', img_url='https://i0.wp.com/thesefootballtimes.co/wp-content/uploads/2018/03/bielsa.jpeg?fit=1600%2C1091&ssl=1')

    db.session.add(demo)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
