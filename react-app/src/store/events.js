const SET_MATCH_EVENTS = "events/SET_MATCH_EVENTS";
const SET_EVENTS = "events/SET_EVENTS";
const SET_TYPE_MATCH_EVENTS = "events/SET_TYPE_MATCH_EVENTS";

const setMatchEvents = (matchEvents) => ({
    type: SET_MATCH_EVENTS,
    matchEvents
});

const setEvents = (events) => ({
    type: SET_EVENTS,
    events
});

const setTypeMatchEvents = (typeMatchEvents) => ({
    type: SET_TYPE_MATCH_EVENTS,
    typeMatchEvents
}) 

export const getMatchEvents = (matchKey) => async (dispatch) => {
    const response = await fetch(`/api/events/${matchKey}`);
    if (response.ok) {
        const matchEvents = await response.json();
        dispatch(setMatchEvents(matchEvents))
    }
}

export const getEvents = () => async (dispatch) => {
    const response = await fetch('/api/events/');
    if (response.ok) {
        const events = await response.json();
        dispatch(setEvents(events))
    }
}

export const getTypeMatchEvents = (matchKey) => async (dispatch) => {
    const response = await fetch(`/api/events/type/${matchKey}`);
    if (response.ok) {
        const typeMatchEvents = await response.json();
        dispatch(setTypeMatchEvents(typeMatchEvents))
    }
}

const initialState = {};

const eventsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_EVENTS:
            newState = { ...state }
            newState.allEvents = action.events
            return newState;
        case SET_MATCH_EVENTS:
            newState = { ...state }
            newState.matchEvents = action.matchEvents
            return newState;
        case SET_TYPE_MATCH_EVENTS:
            newState = { ...state }
            newState.typeMatchEvents = action.typeMatchEvents
            return newState;
        default:
            return state;
    }
}

export default eventsReducer;

