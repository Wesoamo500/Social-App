import React from 'react'
import './FollowersCard.css'

import { Followers } from '../../Data/FollowersData'

const FollowersCard = () => {
  return (
    <div className="followers-card">
        <h3>People you  may know</h3>
        {Followers.map((follower , id)=>{
            return(
                <div className="follower">
                    <div>
                        <img src={follower.img} alt="img" className='follower-image'/>
                        <div className="name">
                            <span>{follower.name}</span>
                            <span>_@{follower.username}</span>
                        </div>
                    </div>
                    <button className='button fc-button'>follow</button>
                </div>
            )
        })}
    </div>
  )
}

export default FollowersCard