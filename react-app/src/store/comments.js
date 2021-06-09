const GET_COMMENTS = "comments/GET_COMMENTS";
const POST_COMMENT = "comments/POST_COMMENT"

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
            newState.comments = [...state.comments, action.comment]
            return newState;
        // case DELETE_COMMENT:
        //     newState = { ...state }

        //     const index = newState.commments.indexOf(action.comment)
        //     newState.comments.splice(index, 1)

        //     return newState
        default:
            return state;
    }
}

export default commentReducer;