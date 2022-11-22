import React from 'react'
import FollowersCard from '../Followers/FollowersCard'
import InfoCard from '../InfoCard/InfoCard'
import LogoSearch from '../LogoSearch/LogoSearch'


const ProfileLeft = () => {
  return (
    <div className='profile-side'>
        <LogoSearch/>
        <InfoCard/>
        <FollowersCard/>
    </div>
  )
}

export default ProfileLeft