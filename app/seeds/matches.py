from app.models import db, Match

# Adds a demo user, you can add other users here if you want
def seed_matches():

    match1 = Match(match_key=2499719)
    match2 = Match(match_key=2499807)
    match3 = Match(match_key=2499830)
    match4 = Match(match_key=2499987)
    match5 = Match(match_key=2500097)

    db.session.add(match1)
    db.session.add(match2)
    db.session.add(match3)
    db.session.add(match4)
    db.session.add(match5)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_matches():
    db.session.execute('TRUNCATE matches RESTART IDENTITY CASCADE;')
    db.session.commit()
