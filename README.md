# SCHUSA
[Visit SCHUSA](http://schusa.herokuapp.com/)*

**Table of Contents**
* [What is SCHUSA](#What-is-SCHUSA)
* [Frontend Overview](#frontend-overview)
* [Backend Overview](#backend-overview)
* [Conclusion & Next Steps](#conclusion-and-next-steps)

## What is SCHUSA
SCHUSA is a fullstack application that gives fans and professionals alike the ability to analyze European football matches

Users are given access to highly specific event data with positional characteristics, which provides them with a complete match analysis.

![](/readme-resources/schusa-walkthrough.gif)

SCHUSA makes use of [Wyscout's](https://wyscout.com/) data to provide a full picture of each match.

## Frontend Overview
SCHUSA's frontend was built using React and Redux, with React Chart.js serving as the tool to construct the pitch stastical mapping container. It makes use of React's emphasis on reusable components as well as the combination of React and Redux, which allows rapid access to information. This is of paramount importance when dealing with 1,500+ events per match. 

#### Chart.js
SCHUSA uses the [Chart.js](https://www.chartjs.org/docs/latest/) library for its match analysis. Specifically, SCHUSA uses a unique scatterplot construction which maps each of the events into a dataset for easy and repeatable placement of data. Organizing the style and presentation of the chart was a unique challenge, but I am very pleased with the scatterplot's rendering as well as the seamless integration with the pitch layout. Mapping the data was and continues to be a challenge to the unique nature of each event type as well as the copious possible permutations. For example, certain event types only have start or end data and so these had to be filtered accordingly using ternaries. As the project progresses with team-oriented data, the mapping will have to be refactored for more complicated filters.

##### Scatterplot Mapping Component
```jsx
function EventScatterChart({ matchKey, eventType }) {
  const dispatch = useDispatch();

  const typeEvents = useSelector(state => state.events.typeMatchEvents)

  useEffect(()=> {
    dispatch(eventsReducer.getTypeMatchEvents(matchKey, eventType));
  }, [dispatch, eventType])

  if (!typeEvents) return null;

  const data = {
    datasets:
      typeEvents.map((typeEvent) => {
        return {
        label: `${typeEvent.event_sec}`,
        data: [{
          x: typeEvent.event_name === "Save attempt" ? null : typeEvent.x_start,
          y: typeEvent.event_name === "Save attempt" ? null : typeEvent.y_start,
        }, {
          x: typeEvent.event_name === "Shot" ? null : typeEvent.x_end,
          y: typeEvent.event_name === "Shot" ? null : typeEvent.y_end
        }],
        showLine: true,
        backgroundColor: 'rgb(0, 143, 200)',
        pointRadius: 7,
      }
      })
  }
```

## Backend Overview
SCHUSA uses a Flask server with PostgreSQL as the database. The biggest challenge with the backend was undoubtedly cleaning and organizing the data for seeding. Wyscout provides incredibly detailed event data but there are a lot of unnecessary and overly complicated tags and associations that had to be parsed through. Furthermore, the data had to be refactored into types and constructions that were suitable for a Postgres database. Due to the limit on Heroku databases of 10,000 rows, only five matches could be seeded. That being said, a future goal for the project is to expand beyond Heroku in order to seed full leagues and seasons. More data will only lead to more definitive conclusions and analysis possibilities.

## Conclusion and Next Steps

Building this project was a true labor of love. I have played soccer since I was three years old and have been following the European game since I was 10. To be able to create something for a game that has given me so much joy and feeling, not to mention mental toughness and acuity, has been one of my favorite parts of my software engineering journey to date.

SCHUSA is also the first project I created that is completely independent from any existing site in terms of its construction, appearance, and application. Working on the design from database organization and manipulation to user-facing features and experience has been the most demanding challenge of my engineering experience. I found myself constantly reflecting and reevaluating my choices to ensure efficient use of data, bandwidth, and of course the user's time. I learned so much about my approach to application design, which I will implement and develop further in my next project.

**Next Steps:** There are numerous next steps outlined in this paper including seeding more matches and creating more team-oriented event filters. Additionally, I plan to add a player profile and search feature, which will allow the user to search for any player and view their season-long performance statistics.
