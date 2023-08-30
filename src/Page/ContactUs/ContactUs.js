import React from 'react'
import style from "./ContactUs.module.css"
import Image from "../../Image/contact.png"
import NavBar from '../../component/NavBar/NavBar'
import ModalBox from '../../Atom/SlideBar/ModalBox/ModalBox'
import phone from "../../Image/phone.gif"
import location from "../../Image/location.gif"
import mail from "../../Image/mail.gif"


function ContactUs() {
  return (
    <>
      <NavBar />
    <div className={style.main} >
      
      <div className={style.box1}>
        <div className={style.data}>
            <img src={location} alt='location' />
            <div>
                <h4>Address</h4>
                <h6>Siwan Bihar, Tarwara</h6>
            </div>
        </div>
        <div className={style.data}>
            <img src={phone} alt='phone' />
            <div>
                <h4>Contact No</h4>
                <h6>7004514938</h6>
            </div>
        </div>
        <div className={style.data}>
            <img src={mail} alt='mail' />
            <div>
                <h4>Email</h4>
                <h6>vikesh.667kumar@gmail.com</h6>
            </div>
        </div>
       
     <ModalBox />
      </div>
      <div className={style.box2}>
        <img className={style.img} src={Image} alt='logo' />
      </div>
    
    </div>
    </>
  )
}

export default ContactUs


