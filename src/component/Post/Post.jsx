import React from 'react';
import { Link } from 'react-router-dom';
const Post = ({post}) => {

    const {title,body,id}=post;
    return (
        <div>
           <h3>userId:{id}</h3>
            <p>title:{title}</p>
            <p>body:{body}</p>
            <Link to={`/post/${id}`}>Details</Link>
            <button>Show Details</button>
        </div>
    );
};

export default Post;