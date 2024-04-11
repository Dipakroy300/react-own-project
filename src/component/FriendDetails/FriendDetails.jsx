import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const FriendDetails = () => {
    const friendDetails=useLoaderData();
    // console.log(friendDetails);

    const navigate=useNavigate();

    const goBack=()=>{
        navigate(-1);
    }
    return (
        <div>
            <h1>here is some friendsDetails</h1>
            <h1>Name:{friendDetails.name}</h1>
            <button onClick={goBack}>Go Back</button>
        </div>
    );
};

export default FriendDetails;