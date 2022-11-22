import React from 'react'

import Likefilled from '../../img/likefilled.png'
import Like from '../../img/like.png'
import Share from '../../img/send.png'
import Comment from '../../img/comment.png'



import './Post.css'

const Post = ({data}) => {
  return (
    <div className="post">
        <img src={data.img} alt="" />
        <div className="reactions">
            <img src={data.liked?Likefilled:Like} alt="" />
            <img src={Comment} alt="" />
            <img src={Share} alt="" />
        </div>
        <span style={{color:"var(--gray)",fontSize:"12px"}}>{data.likes} likes</span>
        <div className="details">
            <span><b>{data.name}</b></span>
            <span>{data.desc}</span>
        </div>
    </div>
  )
}

export default Post