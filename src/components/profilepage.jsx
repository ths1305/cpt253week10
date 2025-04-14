import React from 'react'
import { UserProfile } from './profilepageelements';

const ProfilePage = () =>{
    return (
        <UserProfile>
            <h1>Welcome to your profile</h1>
            <p>Username: ths1305</p>
            <p>Birthdate: January 30, 2005</p>
            <p>Date Joined: April 13, 2025</p>
            <p>Favorite Band: Radiohead</p>
            <p>Favorite Hobby: Web design</p>
        </UserProfile>
    );
};

export default ProfilePage;