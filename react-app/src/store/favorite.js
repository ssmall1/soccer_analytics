const POST_FAVORITE = "favorites/POST_FAVORITE";

const setFavorite = (match) => {
    return{
        type: POST_FAVORITE,
        match
    }
}

export const postFavorite = (payload) => async (dispatch) => {
    
    const response = await fetch('/api/favorites', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (response.ok) {
        const favorite = await response.json();
        dispatch(setFavorite(favorite))
        return favorite
    }
}


const initialState = {};

const favoriteReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case POST_FAVORITE:
            newState = { ...state }
            newState.favorites = [...state.favorites, action.favorite]
            return newState;
        default:
            return state;
    }
}

export default favoriteReducer;