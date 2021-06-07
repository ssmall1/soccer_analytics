const SET_MATCHES = "matches/SET_MATCHES";
const SET_MATCH = "matches/SET_MATCH";

const setMatches = (matches) => ({
    type: SET_MATCHES,
    matches
});

const setMatch = (match) => ({
    type: SET_MATCH,
    match
});

export const getMatches = () => async (dispatch) => {
    const response = await fetch('/api/matches/');
    if (response.ok) {
        const matches = await response.json();
        // console.log(matches)
        dispatch(setMatches(matches))
    }
}

export const getMatch = (matchKey) => async (dispatch) => {
    const response = await fetch(`/api/matches/${matchKey}`);
    if (response.ok) {
        const match = await response.json();
        dispatch(setMatch(match))
    }
}

const initialState = {};

const matchesReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_MATCHES:
            newState = { ...state }
            newState.matches = action.matches
            return newState;
        case SET_MATCH:
            newState = { ...state }
            newState.match = action.match
            return newState;
        default:
            return state;
    }
}

export default matchesReducer;

