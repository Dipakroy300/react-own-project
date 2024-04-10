import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friendDetails=useLoaderData();
    // console.log(friendDetails);
    return (
        <div>
            <h1>here is some friendsDetails</h1>
            <h1>Name:{friendDetails.name}</h1>
        </div>
    );
};

export default FriendDetails;