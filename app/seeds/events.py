from app.models import db, Event

def seed_events():

    test = Event(eventId_x=8, subEventName='Simple pass',
                tags="[{'id': 1801}]", playerId=25413, 
                positions="[{'y': 49, 'x': 49}, {'y': 78, 'x': 31}]",
                matchId=2499719, eventName="Pass", teamId=1609,
                matchPeriod="1H", eventSec=2.7586489999999912,
                gameWeek=1, date="2017-08-11 18:45:00,2499719",
                label="Arsenal - Leicester City, 4 - 3",
                firstName="Alexandre", middleName="",
                lastName="Lacazette")

    db.session.add(test)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_events():
    db.session.execute('TRUNCATE events RESTART IDENTITY CASCADE;')
    db.session.commit()
