import React from 'react'
import Post from '../Post/Post'
import {useDispatch, useSelector} from 'react-redux'
import './Posts.css'
import { useEffect } from 'react'
import { getTimelinePosts } from '../../actions/postActions'
import {useParams} from 'react-router-dom'

const Posts = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const {user} = useSelector((state)=>state.authReducer.authData);
  let {posts, loading} = useSelector((state)=>state.postReducer);

  useEffect(()=>{
    dispatch(getTimelinePosts(user._id))
  },[])

  if(!posts) return "no posts";
  if(params.id) posts = posts.filter((post)=>post.userId === params.id)
  return (
    <div className="posts">
        {loading ? "Fetching Posts...":posts.map((post,id)=>{
            return <Post data={post}/> 
        })}
    </div>
  )
}

export default Posts