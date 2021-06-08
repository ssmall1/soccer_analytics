const GET_FAVORITES = "favorites/GET_FAVORITES";
const POST_FAVORITE = "favorites/POST_FAVORITE";
const DELETE_FAVORITE = "favorites/DELETE_FAVORITE"

const setFavorites = (favorites) => {
    return{
        type: GET_FAVORITES,
        favorites
    }
}

const setFavorite = (match) => {
    return{
        type: POST_FAVORITE,
        match
    }
}

const setDeletedFavorite = (favorite) => {
    return{
        type: DELETE_FAVORITE,
        favorite
    }
}

export const getFavorites = (userId) => async (dispatch) => {
    const response = await fetch(`/api/favorites/${userId}`);

    if (response.ok) {
        const favorites = await response.json();
        dispatch(setFavorites(favorites))
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

export const deleteFavorite = (favoriteId) => async (dispatch) => {
    const response = await fetch(`/api/favorites/${favoriteId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    })

    if (response.ok) {
        dispatch(setDeletedFavorite(favoriteId))
        return favoriteId
    } 
}

const initialState = {};

const favoriteReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_FAVORITES:
            newState = { ...state }
            newState.favorites = action.favorites
            return newState
        case POST_FAVORITE:
            newState = { ...state }
            newState.favorites = [...state.favorites, action.favorite]
            return newState;
        case DELETE_FAVORITE:
            newState = { ...state }
            delete newState[action.favorite]
            return newState
        default:
            return state;
    }
}

export default favoriteReducer;