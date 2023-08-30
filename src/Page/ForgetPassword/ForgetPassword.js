import React, { useEffect, useState } from 'react'
import style from "./ForgetPassword.module.css"
import { useNavigate, useParams } from 'react-router-dom'
import NavBar from '../../component/NavBar/NavBar'
import Image from "../../Image/fingerprint.gif"

const ForgetPassword = () => {
  const  [password,setPassword]=useState("")
  const {id,token}=useParams()
  console.log(id,token)
const navigate=useNavigate()
  const userValid=async()=>{
    const res =await fetch(`https://server-bu32.onrender.com/api/forgotpassword/${id}/${token}`,{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      }
    })
    const data=await res.json()
    console.log(data)
  if(data){
    console.log("user valid")
  }else{
      navigate('/login')
  }
    
  }
  useEffect(()=>{
    userValid()
  },[])
  const updatePassword=async(e)=>{
    e.preventDefault()
    const res =await fetch(`https://server-bu32.onrender.com/api/${id}/${token}`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({password})
    })
    const data=await res.json()
    console.log(data)
    if(data){
     alert(data.message)
    }else{
        navigate('/login')
    }
  }
  return (
    <>
    <NavBar />
    <div className={style.main}>
    <form className={style.container} onSubmit={updatePassword} >
    <img src={Image} alt='image'/>
      <h2>Enter Your New Password </h2>
        <input type='password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='Enter your new password ' autoComplete='off'/>
        <button type='submit'>Submit</button>
    </form>
</div>
</>
  )
}

export default ForgetPassword