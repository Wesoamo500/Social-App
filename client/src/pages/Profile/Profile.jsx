import React from 'react'
import PostSide from '../../components/PostSide/PostSide'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import Trends from '../../components/Trends/Trends'
import './Profile.css'

const Profile = () => {
  return (
    <div className='profile'>
        <ProfileLeft/>
        <div className="profile-center">
            <ProfileCard location="profilePage"/>
            <PostSide/>
        </div>
        <Trends/>
    </div>
  )
}

export default Profile 