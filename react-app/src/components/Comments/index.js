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
    const comments = useSelector(state => state.comments)
    const matchKey = match.match_key;

    useEffect(() => {
        dispatch(commentReducer.getComments(matchKey));
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

    if (!comments) {
        return null;
    }

    return(
        <div className="commments-wrapper">
            <div className="comment-form-container">
                <form onSubmit={handleCommentSubmit}>
                    <input
                        id="comment-input"
                        type="textbox"
                        name="comment"
                        onChange={updateComment}
                        value={commentContent}
                        placeholder="This game was..."
                    >
                    </input>
                    <div className="submit-comment-container">
                        <button type="submit" id="submit-comment">Post</button>
                    </div>
                </form>
            </div>

            <div className="comments-container">
                {/* {comments.map((comment) => {
                    return(
                        <div id="comment" key={comment.id}>
                            {comment.content}
                        </div>
                    )
                })} */}
            </div>
        </div>
    )
}

export default Comments;