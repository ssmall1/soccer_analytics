from werkzeug.security import generate_password_hash
from app.models import db, User
from faker import Faker
fake = Faker()


# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(first_name='Marcelo', last_name='Bielsa', email='bielsa@leeds.com',
                password='whatisgoingon', img_url='https://i0.wp.com/thesefootballtimes.co/wp-content/uploads/2018/03/bielsa.jpeg?fit=1600%2C1091&ssl=1')
    
    demo1 = User(first_name='Pep', last_name='Guardiola', email='pep@city.com',
                password='password', img_url='https://i.guim.co.uk/img/media/a54a93daeb97b98e3012a69d820fdfa79695e378/468_351_2000_1200/master/2000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=8ce553f3717bab7f1fbe6631d8815f00', bio="Manager at Manchester City")

    demo2 = User(first_name='Mikel', last_name='Arteta', email='arteta@arsenal.com',
                password='password', img_url='https://images.daznservices.com/di/library/GOAL/70/55/mikel-arteta-arsenal_1fwe5davm08fe1rsz90tny59km.jpg?t=146609921&quality=60&w=1200&h=800', bio="Manager at Arsenal")

    demo3 = User(first_name='Jose', last_name='Mourinho', email='jose@me.com',
                password='password', img_url='https://icdn.football-espana.net/wp-content/uploads/2020/11/jose-mourinho-tottenham-2019-20_eqbhbu167yof1buhf9y0v0sor.jpg', bio="Manager of my own ego")

    demo4 = User(first_name='Roy', last_name='Hodgson', email='hodgson@palace.com',
                password='password', img_url='https://s.hs-data.com/bilder/spieler/gross/28476.jpg', bio="Manager at Crystal Palace")

    demo5 = User(first_name='Schuler', last_name='Small', email='schuler@me.com',
                password='aguero', img_url='https://images.unsplash.com/photo-1614632537190-23e4146777db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=801', bio="Midfielder at Chicago Magic")
    

    db.session.add(demo)
    db.session.add(demo1)
    db.session.add(demo2)
    db.session.add(demo3)
    db.session.add(demo4)
    db.session.add(demo5)

    db.session.commit()
    
    for num in range(1,20):
        num = User(
            first_name=fake.first_name(),
            last_name=fake.last_name(),
            email=fake.free_email(),
            password="password",
            img_url=fake.image_url(),
            bio=fake.sentence(nb_words=9),
        )

    db.session.add(num)
    db.session.commit()
# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
