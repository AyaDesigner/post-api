/* eslint-disable */
import { useState } from "react";
import "../App.css";



export default function Comments({ post }) {
    const [allComments, setAllComments] = useState([]);
    const [commentsNotLoaded, setCommentsNotLoaded] = useState(true);



    const loadComments = () => {
        setCommentsNotLoaded(false);
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
            .then((response) => response.json())
            .then((array) => {
                setAllComments(array);
            });
    }

    const closeComments = () => {
        setCommentsNotLoaded(true);
        setAllComments([])
    }
    return (
        <div className="App">
            {commentsNotLoaded ?
                <button onClick={loadComments}>Load comments</button> :
                <button onClick={closeComments}>Close comments</button>
            }
            {allComments.map((comment) => (
                <div key={comment.id}>
                    <h5>{comment.name}</h5>
                    <p>{comment.body}</p>
                    <p>{comment.email}</p>
                </div>
            ))}
        </div>
    );
}
