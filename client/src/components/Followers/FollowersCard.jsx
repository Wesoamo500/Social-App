import React from 'react'
import './FollowersCard.css'


import User from './User'
import { useEffect } from 'react'
import { useState } from 'react'
import {useSelector} from  'react-redux';
import { getAllUser } from '../../api/UserRequest'

const FollowersCard = () => {
    const [persons, setPersons] = useState([]);
    const {user} = useSelector((state)=>state.authReducers.authData);    
    useEffect(()=>{
        const fetchPersons = async()=>{
            const {data} = await getAllUser();
            setPersons(data);
        }
        fetchPersons()
    },[]);
  return (
    <div className="followers-card">
        <h3>People you  may know</h3>
        {persons.map((person , id)=>{
            if(person._id !== user._id){
            return(
                <User person={person} key={id}/>
            )}
        })}
    </div>
  )
}

export default FollowersCard