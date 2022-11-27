import React from 'react'
import './ProfileCard.css'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom';

const ProfileCard = () => {
    const {user} = useSelector((state)=>state.authReducers.authData)
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

    const ProfilePage = false;
  return (
    <div className="profile-card"> 
        <div className="profile-img">
            <img src={user.coverPicture ? serverPublic + user.coverPicture : serverPublic + "defaultCover.jpg"} alt="" />
            <img src={user.profilePicture ? serverPublic + user.profilePicture : serverPublic + "defaultProfile.jpg" } alt="" />
        </div>
        <div className="profile-name">
            <span>{user.firstname}{user.lastname}</span>
            <span>{user.worksAt ? user.worksAt : "write occupation"}</span>
        </div>
        <div className="gossip-status">
            <hr/>
            <div>
                <div className="gossip">
                    <span>{user.following.length}</span>
                    <span>Followers</span>
                </div>
                <div className="vl"></div>
                <div className="gossip">
                    <span>{user.followers.length}</span>
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
            ProfilePage?"":
                <span>
                    <Link style={{textDecoration:"none", color:'inherit'}} to={`/profile/${user._id}`}>
                        My Profile
                    </Link> 
                </span>
        }
    </div>
  )
}

export default ProfileCard