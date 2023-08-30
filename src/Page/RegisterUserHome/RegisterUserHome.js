import React from 'react'
import style from "./RegisterUserHome.module.css"
import VideoCard from '../../component/VideoCard/VideoCard'
import {videoPlayerData} from "../../Recoil"
import { useRecoilState } from 'recoil';
import Image from "../../Image/film.gif"


function RegisterUserHome() {
  const [video,setvideo] = useRecoilState(videoPlayerData)
  console.log(video)
  return (
    <div className={style.main}>
      <div className={style.CourseAccodian}>
        <VideoCard />
      </div>
      <div className={style.container}>
        {video.length==0 ? <div>
          <img  src={Image} alt="logo"></img>
          <h3>Please Choose a Video</h3>
        </div> :
         <iframe className={style.video}  src={video[0]?.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        }
     
      </div>
    </div>
  )
}

export default RegisterUserHome
