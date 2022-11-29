import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { followUser, unFollowUser } from '../../actions/updateActions'

const User = ({person}) => {
    const{user} = useSelector((state)=>state.authReducers.authData)
    const dispatch = useDispatch();
    const [following, setFollowing] = useState(person.followers.includes(user._id))
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
    const handleFollow =()=>{
        following ?
        dispatch(unFollowUser(person._id,user)):
        dispatch(followUser(person._id,user));
        setFollowing((prev)=>!prev)
    }
  return (
    <div className="follower">
        <div>
            <img src={person.profilePicture? serverPublic + person.profilePicture:serverPublic + "defaultProfilePicture.png"} alt="img" className='follower-image'/>
            <div className="name">
                <span>{person.firstname}</span>
                <span>_@{person.username}</span>
            </div>
        </div>
        <button className={following ? "button fc-button unfollowButton":"button fc-button"} onClick={handleFollow}>{following ? "unfollow":"follow"}</button>
    </div>
  )
}

export default User