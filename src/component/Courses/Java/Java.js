import React from 'react'
import style from "./Java.module.css"
import NavBar from '../../NavBar/NavBar'
import { BsBarChartFill } from 'react-icons/bs';
import { BiTimeFive} from 'react-icons/bi';
import { TbCertificate} from 'react-icons/tb';
import { LuBookOpenCheck} from 'react-icons/lu';
import Accordian from '../../../Atom/SlideBar/Accordian';
import RatingStar from '../../../Atom/SlideBar/RatingStar';

function Java() {
  function navigate(){
    window.open("/Form")
  }
  return (
    <>     
       <NavBar/>
    <div className={style.main}>
        <div className={style.box1}>
            <p>Course</p>
        <h1> Learn Java</h1>
        <p>Learn how to use Java- Java is the foundation for virtually every type of networked application and is the global standard for developing and delivering embedded and mobile applications, games, web-based content, and enterprise software</p>
        <h6><RatingStar  /></h6>
        <button onClick={navigate}>Start</button>
        </div>
        <div className={style.box2}>
          <ul>
            <li>
               <span><BsBarChartFill /></span> 
                <p>Skill level</p>
                <h4>Beginner</h4>
            </li>
            <li>
               <span><BiTimeFive /></span> 
                <p>Time to complete</p>
                <h4>Approx. 20 hours</h4>
            </li>
            <li>
               <span><TbCertificate /></span> 
                <p>Certificate of completion</p>
                <h4>Included with paid plans</h4>
            </li>
            <li>
               <span><LuBookOpenCheck /></span> 
                <p>Prerequisites</p>
                <h4>None</h4>
            </li>
          </ul>
        </div>
        <div className={style.box3}>
           <div>
            <h1>About this Course</h1>
            <p>You interact with JavaScript code all the time — you just might not realize it. It powers dynamic behavior on websites (like this one) and plays an important role in many fields, like front- and back-end engineering, game and mobile development, virtual reality, and more. In this course, you’ll learn JavaScript fundamentals that will be helpful as you dive deeper into more advanced topics.</p>
           </div>
           <div className={style.innerbox3}>
            <h1>Skills you'll gain</h1>
            <ul>
               <li>Build core programming concepts</li>
               <li>Learn object-oriented concepts</li>
               <li>Read and write JavaScript</li>
            </ul>
           </div>
        </div>
        <div className={style.box4}>
            <div className={style.innerBox4}>
                <h3>Syllabus</h3>
                <h6>11 lessons • 12 projects • 8 quizzes</h6>
            </div>
        < Accordian/>
        </div>
       
    </div>
    </>
  )
}

export default Java;
