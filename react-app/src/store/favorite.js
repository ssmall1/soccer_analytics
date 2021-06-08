const POST_FAVORITE = "favorites/POST_FAVORITE";
const GET_FAVORITES = "favorites/GET_FAVORITES";

const setFavorite = (match) => {
    return{
        type: POST_FAVORITE,
        match
    }
}

const setFavorites = (user) => {
    return{
        type: GET_FAVORITES,
        user
    }
}

export const postFavorite = (payload) => async (dispatch) => {
    const { userId, matchId } = payload
    const response = await fetch('/api/favorites/', {
        method: 'POST',
        body: JSON.stringify({
            user_id: userId,
            match_id: matchId
        }),
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


// export const getFavorites = (userId) => async (dispatch) => {
//     const response = 
// }


const initialState = {};
// const initialState = {favorites: []};

const favoriteReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        // make get 
        case POST_FAVORITE:
            newState = { ...state }
            newState.favorites = [...state.favorites, action.favorite]
            return newState;
        default:
            return state;
    }
}

export default favoriteReducer;