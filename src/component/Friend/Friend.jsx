import React from 'react';
import '../Friend/Friend.css'
import { Link } from 'react-router-dom';
const Friend = ({friend}) => {

    const {name,username,email,id,address}=friend;
    return (
        <div className='profile'>
            <h2>name:{name}</h2>
            <p>Username:{username}</p>
            <p>Email:{email}</p>
            <p> <Link to={`/friend/${id}`}>Details</Link> </p>
        </div>
    );
};

export default Friend;