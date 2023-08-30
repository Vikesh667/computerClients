import React from 'react'
import style from "./VideoCard.module.css"
import {videoData } from "../../Recoil"
import {videoPlayerData} from "../../Recoil"

import { useRecoilState } from 'recoil';

function VideoCard() {
    
    const [data,setData] = useRecoilState(videoData )
    const [video,setvideo] = useRecoilState(videoPlayerData)

      function findVideo(id){
        const newData=data.filter((item)=>item.id===id)
          setvideo(newData)
      }
  return (
    <div className={style.main}>
        {data.map((item)=>
        <div onClick={()=>findVideo(item.id)} className={style.container}>
              <div className={style.box1}>
             <img className={style.img} src={item.img}/> 
            </div>
            <div className={style.box2}>
              <h4>{item.heading}</h4> 
               <p>{item.para}</p>
            </div>
            </div>
        )}
    
    </div>
  )
}

export default VideoCard
