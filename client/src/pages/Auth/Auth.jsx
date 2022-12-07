import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'
import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { logIn, signUp } from '../../actions/AuthActions'

const Auth = () => {
    const loading = useSelector((state)=>state.authReducers.loading)
    const [isSignUp,setIsSignUp] = useState(false)

    const [data, setData] = useState({firstname:"",lastname:"",username:"",password:"",confirmPassword:""})

    const dispatch = useDispatch()
    const handleChange = (e) => {
        setData({...data, [e.target.name]:e.target.value})
    }

    const [confirmPassword,setConfirmPassword] = useState(true)

    const handleSubmit = (e)=>{
        e.preventDefault()

        if(isSignUp) {
            data.password === data.confirmPassword ? dispatch(signUp(data)):setConfirmPassword(false)
        }else{
            dispatch(logIn(data))
        }

    }
    const resetForm = () =>{
        setConfirmPassword(true);
        setData({firstname:"",lastname:"",username:"",password:"",confirmPassword:""})
    }

  return (
    <div className="auth">
        <div className="auth-img">
            <img src={Logo} alt=""/>
            <div className='webname'>
                <h1>SAMW Media</h1>
                <h6>Home of gossips and rumours</h6>
            </div>
        </div>
        <div className="auth-form">
        <form action="" className="info-form auth-form" onSubmit={handleSubmit}>
            <h3>{isSignUp?"Sign Up":"Login"}</h3>
            {
                isSignUp &&
                    <div>
                        <input type="text" name="firstname" placeholder='First Name' className='info-input' value={data.firstname} onChange={handleChange} />
                        <input type="text" name="lastname" placeholder='Last Name' className='info-input' value={data.lastname} onChange={handleChange} />
                    </div>
            }
            <div>
                <input type="text" className="info-input" placeholder='Username' name='username' value={data.username} onChange={handleChange}/>
            </div>
            <div>
                <input type="password" name="password" placeholder='Password' className='info-input' value={data.password} onChange={handleChange} />
                {
                isSignUp &&
                    <input type="password" name="confirmPassword" placeholder='Confirm Password' className='info-input' value={data.confirmPassword} onChange={handleChange}/>
                }
            </div>
            <span style={{display:confirmPassword?"none":"block",color:'red',alignSelf:'flex-end',marginRight:'5px',fontSize:'12px'}}>
                * Password not the same
            </span>
            <div>
                <span style={{fontSize:"12px", cursor:"pointer"}} onClick={()=>{setIsSignUp((prev)=>!prev); resetForm()}}>{isSignUp?"Already have an account. Login":"Don't have an account? Signup"}</span>
            </div>
            <button className="button info-button" type='submit' disabled={loading}>
                {loading? "Loading..." : isSignUp ? "Sign Up" : "Login"}
                </button>
        </form>
    </div>
    </div>
  )
}

export default Auth