import React from 'react';
import '../styles/components/Item.styl';

function Profile({profile}){
    return (
        <profile>
            <div className="Item-title Profile-title">
                <p>PROFILE</p>
            </div>
            <div className="Item-content Profile-desc">
                <p>{profile}</p>
            </div>
        </profile>
    );
}

export default Profile;