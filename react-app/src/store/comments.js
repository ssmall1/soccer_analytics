const GET_COMMENTS = "comments/GET_COMMENTS";
const POST_COMMENT = "comments/POST_COMMENT";
const DELETE_COMMENT = "comments/DELETE_COMMENT";
const UPDATE_COMMENT = "comments/UPDATE_COMMENT";

const setComments = (comments) => {
    return{
        type: GET_COMMENTS,
        comments
    }
}

const setComment = (comment) => {
    return{
        type: POST_COMMENT,
        comment
    }
}

const setDeletedComment = (comment) => {
    return{
        type: DELETE_COMMENT,
        comment
    }
}

const setUpdatedComment = (comment) => {
    return{
        type: UPDATE_COMMENT,
        comment
    }
}

export const getComments = (matchKey) => async (dispatch) => {
    const response = await fetch(`/api/comments/${matchKey}`);

    if (response.ok) {
        const comments = await response.json();
        dispatch(setComments(comments))
    } 
}

export const postComment = (payload) => async (dispatch) => {
    const { userId, matchKey, content } = payload;
    
    const response = await fetch('/api/comments/', {
        method: 'POST',
        body: JSON.stringify({
            user_id: userId,
            match_key: matchKey,
            content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (response.ok) {
        const comment = await response.json();
        dispatch(setComment(comment))
        return comment
    }
}

export const deleteComment = (comment) => async (dispatch) => {
    const response = await fetch(`/api/comments/${comment.id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    })

    if (response.ok) {
        dispatch(setDeletedComment(comment))
        return comment
    } 
}

export const updateComment = (comment) => async (dispatch) => {
    const { id, userId, matchKey, content } = comment

    const response = await fetch(`/api/comments/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            id,
            user_id: userId,
            match_key: matchKey,
            content
        })
    })

    if (response.ok) {
        const updatedComment = await response.json()
        dispatch(setUpdatedComment(updatedComment));
        return updatedComment;
    }
}

const initialState = {};

const commentReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_COMMENTS:
            newState = { ...state }
            newState.comments = action.comments
            return newState
        case POST_COMMENT:
            newState = { ...state }
            newState.comments = [action.comment, ...state.comments]
            return newState;
        case DELETE_COMMENT:
            newState = { ...state }
        case UPDATE_COMMENT:
            newState = { ...state }
            for(let i = 0; i < newState.comments.length; i++) {
                if (newState.comments[i].id === action.comment.id ) {
                    newState.comments[i] = action.comment
                }
            }
            return newState;
        default:
            return state;
    }
}

export default commentReducer;