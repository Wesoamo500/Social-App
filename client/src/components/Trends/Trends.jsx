import React,{useState} from 'react'
import './Trends.css'

import Home from '../../img/message.png'
import Notification from '../../img/notification.png'
import Comment from '../../img/comment.png'
import {UilSetting} from '@iconscout/react-unicons'
import TrendCard from '../TrendCard/TrendCard'
import ShareModal from '../ShareModal/ShareModal'

const Trends = () => {
  const [modalOpened , setModalOpened] = useState(false)
  return (
    <div className="trends">
         <div className="nav-icons">
            <img src={Home} alt="" />
            <UilSetting/>
            <img src={Notification} alt="" />
            <img src={Comment} alt="" />
         </div>
         <TrendCard/>
         <button className='button t-button' onClick={()=>setModalOpened(true)}>
          Share
         </button>
         <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened}/>
    </div>
  )
}

export default Trends