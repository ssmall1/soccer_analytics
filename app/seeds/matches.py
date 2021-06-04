from app.models import db, Match

# Adds a demo user, you can add other users here if you want
def seed_matches():

    match1 = Match(match_key=2499719, match_name='Arsenal - Leicester City, 4 - 3')
    match2 = Match(match_key=2499807, match_name='Tottenham Hotspur - Liverpool, 4 - 1')
    match3 = Match(match_key=2499830, match_name='Arsenal - Tottenham Hotspur, 2 - 0')
    match4 = Match(match_key=2499987, match_name='Tottenham Hotspur - Arsenal, 1 - 0')
    match5 = Match(match_key=2500097, match_name='Tottenham Hotspur - Leicester City, 5 - 4')

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
