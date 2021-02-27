import { useState } from "react";
import Comments from './Comments';

import "./App.css";


const Post = ({ post }) => {

    const [totalLikes, setTotalLikes] = useState(0);
    const addLike = () => {
        setTotalLikes(totalLikes + 1)
    }

    return (<div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <button onClick={addLike}>Like {totalLikes}</button>
        <Comments post={post} />

    </div>);
}

export default Post;