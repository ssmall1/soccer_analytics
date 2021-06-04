const SET_MATCHES = "matches/SET_MATCHES";

const setMatches = (matches) => ({
    type: SET_MATCHES,
    payload: matches
});

export const getMatches = () => async (dispatch) => {
    const response = await fetch('/api/matches');
    if(response.ok) {
        const matches = await response.json();
        dispatch(setMatches(matches))
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
        default:
            return state;
    }
}

export default matchesReducer;

