import React from 'react'
import style from "./AboutUs.module.css"
import Image from "../../Image/work.png"
import NavBar from '../../component/NavBar/NavBar'
import ModalBox from '../../Atom/SlideBar/ModalBox/ModalBox'


function AboutUs() {
  return (
    <div className={style.main} >
        <NavBar />
      <div className={style.box1}>
        <h1>About Us</h1>
        <h5>We believe that education is the key to unlocking a brighter future for individuals and society as a whole. Our mission is to make quality education accessible to all, regardless of age, background, or circumstances. We strive to inspire lifelong learning, foster critical thinking skills, and nurture a love for knowledge in every student we serve.</h5>
      </div>
      <div className={style.box2}>
        <img className={style.img} src={Image} alt='logo' />
      </div>
    
    </div>
  )
}

export default AboutUs
