import React from 'react'
import './ProfileCard.css'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom';

const ProfileCard = ({location}) => {
    const {user} = useSelector((state)=>state.authReducers.authData)
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
    const posts = useSelector((state)=>state.postReducer.posts)
    
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
                {location && (
                    <>
                        <div className="vl"></div>
                        <div className="gossip">
                            <span>{posts.filter((post)=> post.userId === user._id).length}</span>
                            <span>Gossips</span>
                        </div>
                    </>
                )}
            </div>
            <hr/>
        </div>
        {
            !location?" ":
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