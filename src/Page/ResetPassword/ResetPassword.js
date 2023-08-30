import React, { useState } from 'react'
import style from "./ResetPassword.module.css"
import Image from "../../Image/mail.gif"
import NavBar from '../../component/NavBar/NavBar'

function ResetPassword() {
    const [email,setEmail] = useState("")

    const sendLink=async(e)=>{
        e.preventDefault()
         const res =await fetch("https://server-bu32.onrender.com/api/sendpasswordlink",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({email})
         })
setEmail("")
alert("Email sent successfully🎉")
    }
  return (
    <>      <NavBar />
    <div className={style.main}>

      <div className={style.container}>
      <img src={Image} alt='Email'/>
      <h1>Enter your mail</h1>
        <input  onChange={(e)=>setEmail(e.target.value)} value={email}  placeholder='Enter your email here'  />
        <button onClick={sendLink}>Send</button>
      </div>
   
    </div>
    </>
  )
}

export default ResetPassword