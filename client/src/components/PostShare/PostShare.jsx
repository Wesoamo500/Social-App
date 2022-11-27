import React,{useState,useRef} from 'react'
import Profile from '../../img/cro.jpg'
import './PostShare.css'

import {UilScenery,UilPlayCircle,UilTimes,UilLocationPoint,UilSchedule} from '@iconscout/react-unicons'
import { useDispatch, useSelector } from 'react-redux'
import { uploadImage, uploadPost } from '../../actions/uploadAction'

const PostShare = () => {
    const loading = useSelector((state)=>state.postReducer.uploading)
    const dispatch = useDispatch()
    const [image, setImage] = useState(null)
    const imageRef = useRef()
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
    const desc = useRef()
    const {user} = useSelector((state)=>state.authReducers.authData)
    
    const reset = () =>{
        setImage(null);
        desc.current.value=""
    }
    const handleShare = (e) => {
        e.preventDefault();

        const newPost = {
            userId: user._id,
            desc: desc.current.value
        }
        if(image){
            const data = new FormData()
            const filename = Date.now() + image.name;
            data.append("name", filename);
            data.append("file",image);
            newPost.image = filename;
            console.log(newPost)
            try {
                dispatch(uploadImage(data))
            } catch (error) {
                console.log(error)
            }
        }
        dispatch(uploadPost(newPost))
        reset()
    }
    const onImageChange =(e)=>{
        if(e.target.files && e.target.files[0]){
            let img = e.target.files[0]
            setImage(img)
        }
    }
  return (
    <div className="post-share">
        <img src={user.profilePicture ? serverPublic + user.profilePicture : serverPublic + "defaultProfile.jpg"} alt="profile"/>
        <div>
            <input type="text" required ref={desc} name="" placeholder='Drop the gossip' />
            <div className="post-options">
            <div className='option' style={{color:'var(--photo)'}} onClick={()=>imageRef.current.click()}>
                <UilScenery/>
                Photo
            </div>
            <div className='option' style={{color:'var(--video)'}}>
                <UilPlayCircle/>
                Video
            </div>
            <div className='option' style={{color:'var(--location)'}}>
                <UilLocationPoint/>
                Location
            </div>
            <div className='option' style={{color:'var(--schedule)'}}>
                <UilSchedule/>
                Schedule
            </div>
            <button className='button ps-button' disabled={loading} onClick={handleShare}>
                {loading ? "uploading..." : "Share"}
            </button>
            <div style={{display:"none"}}>
                <input type="file" name="myImage" ref={imageRef} onChange={onImageChange}/>
            </div>
        </div>
        {image && 
            <div className="preview-image">
                <UilTimes onClick={()=>setImage(null)}/> 
                <img src={URL.createObjectURL(image)} alt="" />
            </div>
        }
        </div>
    </div>
  )
}

export default PostShare