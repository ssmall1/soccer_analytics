// const SET_MATCH_EVENTS = "events/SET_MATCH_EVENTS";
const SET_EVENTS = "events/SET_EVENTS";

// const setMatchEvents = (matchEvents) => ({
//     type: SET_MATCH_EVENTS,
//     matchEvents
// });

const setEvents = (events) => ({
    type: SET_EVENTS,
    events
});

// export const getMatchEvents = (matchKey) => async (dispatch) => {
//     const response = await fetch(`/api/events/${matchKey}`);
//     if (response.ok) {
//         const matchEvents = await response.json();
//         dispatch(setMatchEvents(matchEvents))
//     }
// }

export const getEvents = () => async (dispatch) => {
    const response = await fetch('/api/events/');
    if (response.ok) {
        const events = await response.json();
        dispatch(setEvents(events))
    }
}

const initialState = {};

const eventsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_EVENTS:
            newState = { ...state }
            newState.events = action.events
            return newState;
        // case SET_MATCH_EVENTS:
        //     newState = { ...state }
        //     newState.matchEvents = action.matchEvents
        //     return newState;
        default:
            return state;
    }
}

export default eventsReducer;

