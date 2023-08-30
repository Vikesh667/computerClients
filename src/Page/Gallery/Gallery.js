import React ,{useState} from 'react'
import style from "./Gallery.module.css"
import NavBar from '../../component/NavBar/NavBar'
import CourseVideo from '../../Atom/SlideBar/CourseVideo'
import { GalleryData } from '../../Atom/SlideBar/GalleryData'

function Gallery() {
    const [search,setSearch] = useState("")

  return (
    <>
       <NavBar/>
    <div className={style.main}>
        <input className={style.inputBox} placeholder='search here....'  value={search} onChange={(e)=>setSearch(e.target.value)} />
         <CourseVideo />
      <h1>Gallery</h1>
      <div className={style.PodcastBox}>
        {GalleryData
         .filter((elem) => {
            return elem?.url.toLowerCase().includes(search.toLowerCase());
          }).
        map((item, i) => (
          <div key={i} className={style.podcast}>
           <img className={style.img} src={item.url} />
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Gallery
