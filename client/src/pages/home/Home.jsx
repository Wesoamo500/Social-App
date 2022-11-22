import React from 'react'
import PostSide from '../../components/PostSide/PostSide'
import ProfileSide from '../../components/ProfileSide/ProfileSide'
import Trends from '../../components/Trends/Trends'
import './Home.css'

const Home = () => {
  return (
    <div className='Home'>
        <ProfileSide/>
        <PostSide/>
        <Trends/>
    </div>
  )
}

export default Home