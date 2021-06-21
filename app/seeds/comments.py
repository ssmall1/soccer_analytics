from app.models import db, Comment
import random
from faker import Faker
fake = Faker()


# Adds a demo user, you can add other users here if you want
def seed_comments():

    comment1 = Comment(user_id=6, content="This game was wild", match_key=2499719)
    comment2 = Comment(user_id=1, content="What a match", match_key=2499719)
    comment3 = Comment(user_id=3, content="Great performance from the boys", match_key=2499719)

    comment4 = Comment(user_id=4, content="This team was so good when I was the coach", match_key=2499807)
    comment5 = Comment(user_id=5, content="Liverpool really gave the game away", match_key=2499807)
    comment6 = Comment(user_id=2, content="HAHAHAHAHA", match_key=2499807)

    comment7 = Comment(user_id=3, content="They executed my plan to perfection", match_key=2499830)
    comment8 = Comment(user_id=1, content="Arsenal can be a strong team sometimes", match_key=2499830)
    comment9 = Comment(user_id=5, content="Clean and tidy match from the Arsenal boys", match_key=2499830)

    comment10 = Comment(user_id=2, content="Not enough goals", match_key=2499987)
    comment11 = Comment(user_id=6, content="Super tough and tight game. Kinda boring though...", match_key=2499987)
    comment12 = Comment(user_id=4, content="We got our revenge", match_key=2499987)

    comment13 = Comment(user_id=6, content="Game of the season no doubt.", match_key=2500097)
    comment14 = Comment(user_id=1, content="This is my kind of football", match_key=2500097)
    comment15 = Comment(user_id=4, content="I always come out on top", match_key=2500097)

    db.session.add(comment1)
    db.session.add(comment2)
    db.session.add(comment3)
    db.session.add(comment4)
    db.session.add(comment5)
    db.session.add(comment6)
    db.session.add(comment7)
    db.session.add(comment8)
    db.session.add(comment9)
    db.session.add(comment10)
    db.session.add(comment11)
    db.session.add(comment12)
    db.session.add(comment13)
    db.session.add(comment14)
    db.session.add(comment15)

    db.session.commit()


    for num in range(1,30):
        num = Comment(
            user_id=random.randint(7, 28),
            content=fake.sentence(nb_words=9),
            match_key=random.randint(1,6),
        )

    db.session.add(num)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
