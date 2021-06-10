import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as commentReducer from "../../store/comments";
import './Comments.css';

const Comments = () => {
    const dispatch = useDispatch();
    const [commentContent, setCommentContent] = useState("");

    const user = useSelector(state => state.session.user);
    const userId = user.id;
    const match = useSelector(state => state.matches.match);
    const comments = useSelector(state => state.comments.comments)
    const matchKey = match.match_key;
    
    useEffect(async () => {
        await dispatch(commentReducer.getComments(matchKey));
    }, [dispatch])

    const updateComment = (e) => {
        setCommentContent(e.target.value);
      }

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        const content = commentContent;
        setCommentContent("");

        const payload = {
            userId,
            matchKey,
            content,
        }

        dispatch(commentReducer.postComment(payload));
    }

    async function handleDeleteComment(comment){
        await dispatch(commentReducer.deleteComment(comment));
        await dispatch(commentReducer.getComments(matchKey))
    }

    if (!comments) {
        return null;
    }

    let renderedComments = [];
    if (comments) {

        function pickComments(comments) {
            for (let i = 0; i < 5; i++) {
                let comment = comments[i]
                if (comment) {
                renderedComments.push(comment); 
                }
            }
        }
        pickComments(comments);
    }

    return(
        <div className="comments-wrapper">
            <div className="comment-form-container">
                <form id="comment-form" onSubmit={handleCommentSubmit}>
                    <input
                        id="comment-input"
                        type="textbox"
                        name="comment"
                        onChange={updateComment}
                        value={commentContent}
                        placeholder="This game was..."
                        required
                    >
                    </input>
                    <div className="submit-comment-container">
                        <button type="submit" id="submit-comment">Post</button>
                    </div>
                </form>
            </div>

            <div className="comments-container">
                {renderedComments.map((comment) => {
                    return(
                        <div id="comment-container" key={comment.id}>
                            <div id="comment">
                                {comment.content}
                            </div>
                            {comment.user_id === user.id ? <button id="delete-comment" onClick={() => handleDeleteComment(comment)}>Delete</button> : <></>}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Comments;