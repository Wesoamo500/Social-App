import React,{useState} from 'react'
import './InfoCard.css'
import {UilPen} from '@iconscout/react-unicons'
import ProfileModal from '../ProfileModal/ProfileModal'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import * as UserApi from "../../api/UserRequest.js"
import { logout } from '../../actions/AuthActions'

const InfoCard = () => {
    const [modalOpened , setModalOpened] = useState(false);
    const dispatch = useDispatch();
    const params = useParams();

    const profileUserId = params.id;
    const [profileUser, setProfileUser] = useState({});

    const {user} = useSelector((state)=>state.authReducers.authData)

    const handleLogout =()=>{
        dispatch(logout())
    }
    useEffect(()=>{
        const fetchProfileUser = async() =>{
            if(profileUserId === user._id){
                setProfileUser(user)
            }else{
                const profileUser = await UserApi.getUser(profileUserId)
                setProfileUser(profileUser);
            }
        }
        fetchProfileUser();
    },[user])
  return (
    <div className='info-card'>
        <div className="info-head">
            <h4>Profile Info</h4>
            {user._id === profileUserId ?
                (<div>
                    <UilPen width="2rem" height="1.2rem" onClick={()=>setModalOpened(true)}/>
                    <ProfileModal
                        modalOpened={modalOpened}
                        setModalOpened={setModalOpened}
                        data = {user}
                    />
                </div>):(null)
            }
        </div>
        <div className="info">
            <span>
                <b>Status </b>
            </span>
            <span>{profileUser.status}</span>
        </div>
        <div className="info">
            <span>
                <b>Lives in </b>
            </span>
            <span>{profileUser.livesin}</span>
        </div>
        <div className="info">
            <span>
                <b>Works at </b>
            </span>
            <span>{profileUser.worksAt}</span>
        </div>
        <button className='button lg-button' onClick={handleLogout}>
            Logout
        </button>
    </div>
  )
}

export default InfoCard