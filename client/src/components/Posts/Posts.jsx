import React from 'react'
import Post from '../Post/Post'
import {useDispatch, useSelector} from 'react-redux'
import './Posts.css'
import { useEffect } from 'react'
import { getTimelinePosts } from '../../actions/postActions'

const Posts = () => {
  const dispatch = useDispatch();
  const {user} = useSelector((state)=>state.authReducer.authData);
  const {posts, loading} = useSelector((state)=>state.postReducer);

  useEffect(()=>{
    dispatch(getTimelinePosts(user._id))
  },[])
  return (
    <div className="posts">
        {loading ? "Fetching Posts...":posts.map((post,id)=>{
            return <Post data={post}/> 
        })}
    </div>
  )
}

export default Posts