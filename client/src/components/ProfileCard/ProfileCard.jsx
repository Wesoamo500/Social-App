import React from 'react'
import Cover from '../../img/cover.jpg'
import Profile from '../../img/cro.jpg'
import './ProfileCard.css'

const ProfileCard = () => {

    const ProfilePage = true;
  return (
    <div className="profile-card">
        <div className="profile-img">
            <img src={Cover} alt="" />
            <img src={Profile} alt="" />
        </div>
        <div className="profile-name">
            <span>Cristiano Ronaldo</span>
            <span>Professional footballer</span>
        </div>
        <div className="gossip-status">
            <hr/>
            <div>
                <div className="gossip">
                    <span>3,456</span>
                    <span>Followers</span>
                </div>
                <div className="vl"></div>
                <div className="gossip">
                    <span>1</span>
                    <span>Followings</span>
                </div>
                {ProfilePage && (
                    <>
                        <div className="vl"></div>
                        <div className="gossip">
                            <span>3</span>
                            <span>Gossips</span>
                        </div>
                    </>
                )}
            </div>
            <hr/>
        </div>
        {
            !ProfilePage&&
                <span>
                    My Profile
                </span>
        }
    </div>
  )
}

export default ProfileCard