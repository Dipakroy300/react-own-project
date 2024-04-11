import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../Post/Post.css'

const Post = ({post}) => {

    const navigate=useNavigate();

    const navigateHandler=()=>{
        navigate(`/post/${id}`);
    }

    const {title,body,id}=post;
    return (
        <div className='post'>
           <h3>userId:{id}</h3>
            <p>title:{title}</p>
            <p>body:{body}</p>
           <Link to={`/post/${id}`}> <button>Show Details</button></Link>
           <Link to={`/post/${id}`}>show details</Link>
           <button onClick={navigateHandler}>with navigate</button>
        </div>
    );
};

export default Post;