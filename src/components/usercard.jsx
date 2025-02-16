// write the component code here
import React from 'react';
import profileImage from '../assets/Priyanka Arul Mohan.jpg';

const Usercard=()=>{
    const name="Harshith"
    const email="harshithrenikindi@gmail.com"
    const phone="9390048916"
    const address="Nizamabad,Telangana"

    return(
        <div>
            <h1>Name:{name}</h1>
            <p><strong>Email:{email}</strong></p>
            <p><strong>Phone:{phone}</strong></p>
            <p><strong>Address:{address}</strong></p>
            <h1>Favourite Heorine</h1>
            <img src={profileImage} alt="image"/>
        </div>
    )
}

export default Usercard;