import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../PostDetails/PostDetails.css'


const PostDetails = () => {
    const post = useLoaderData();
    console.log( post);
    
    const navigate=useNavigate();

    const goBack=()=>{
          navigate(-1);
    }

    const {id,title,body}=post;
    return (
        <div className='postDetails'>
            <h1>Id:{id}</h1>
            <p>Name:{title}</p>
            <p>Body:{body}</p>
            <button onClick={goBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;