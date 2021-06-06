const SET_EVENTS = "events/SET_EVENTS";

const setEvents = (events) => ({
    type: SET_EVENTS,
    events
});

export const getEvents = (matchKey) => async (dispatch) => {
    const response = await fetch(`/api/events/${matchKey}`);
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
        default:
            return state;
    }
}

export default eventsReducer;

