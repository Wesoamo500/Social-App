import React from 'react'

import Likefilled from '../../img/likefilled.png'
import Like from '../../img/like.png'
import Share from '../../img/send.png'
import Comment from '../../img/comment.png'



import './Post.css'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { likePost } from '../../api/PostRequest'


const Post = ({data}) => {
  const {user} = useSelector((state)=>state.authReducers.authData);
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length);
  const handleLike = () =>{
    setLiked((prev)=>!prev)
    likePost(data._id, user._id)
    liked ? setLikes((prev)=>prev -1): setLikes((prev)=>prev + 1)
  }
  return (
    <div className="post">
        <img src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image :""} alt="" />
        <div className="reactions">
            <img src={liked?Likefilled:Like} alt="" onClick={handleLike} style={{cursor:"pointer"}} />
            <img src={Comment} alt="" />
            <img src={Share} alt="" />
        </div>
        <span style={{color:"var(--gray)",fontSize:"12px"}}>{likes} likes</span>
        <div className="details">
            <span><b>{data.name}</b></span>
            <span>{data.desc}</span>
        </div>
    </div>
  )
}

export default Post