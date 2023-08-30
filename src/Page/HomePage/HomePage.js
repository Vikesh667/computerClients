import React from 'react'
import style from "./HomePage.module.css"
import expert from "../../Image/expert.gif"
import course from "../../Image/course.gif"
import most from "../../Image/most.gif"
import time from "../../Image/time.gif"
import SlideShow from '../../Atom/SlideBar/SlideShow'



function HomePage() {
  return (
    <div className={style.main}>
      <SlideShow />
      <div className={style.footer}>
              <div>
              <img className={style.expert} src={most} alt='Most Recommended'/>
                <h3>Most Recommended</h3>
                <p>Best reviews from our alumni</p>
                </div>
              <div>
                <img className={style.expert} src={expert} alt='Experts Instruction'/>
                <h3>Experts Instruction</h3>
                <p>Certified & experienced Instructor</p>
                </div>
              <div>
              <img className={style.expert} src={course} alt='100+ Courses'/>
                <h3>100+ Courses</h3>
                <p>Explore a variety of new subjects</p>
                </div>
              <div>
              <img className={style.expert} src={time} alt='life time support'/>
                <h3>Lifetime Support</h3>
                <p>Lifetime support for upgradation</p>
                </div>
      </div>
    </div>
  )
}

export default HomePage
