from app.models import db, Match

# Adds a demo user, you can add other users here if you want
def seed_matches():

    match1 = Match(match_key=2499719, match_name='Arsenal - Leicester City, 4 - 3', match_img='https://e0.365dm.com/20/06/2048x1152/skysports-arsenal-leicester-city_5005658.jpg')
    match2 = Match(match_key=2499807, match_name='Tottenham Hotspur - Liverpool, 4 - 1', match_img='https://e0.365dm.com/18/09/768x432/skysports-tottenham-hotspur_4410423.jpg?20180903153156')
    match3 = Match(match_key=2499830, match_name='Arsenal - Tottenham Hotspur, 2 - 0', match_img='https://e0.365dm.com/17/11/768x432/skysports-arsenal-tottenham-hotspur-premier-league-alexandre-lacazette-harry-kane_4155588.jpg?20171114150242')
    match4 = Match(match_key=2499987, match_name='Tottenham Hotspur - Arsenal, 1 - 0', match_img='https://e0.365dm.com/20/06/2048x1152/skysports-tottenham-hotpsur_5005700.jpg')
    match5 = Match(match_key=2500097, match_name='Tottenham Hotspur - Leicester City, 5 - 4', match_img='https://e0.365dm.com/19/02/768x432/skysports-tottenham-hotspur_4569852.jpg?20190206150504')

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
