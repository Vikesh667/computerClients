import React, { useEffect,useState } from 'react'
import NavBar from '../../component/NavBar/NavBar'
import style from "./DashBoard.module.css"
import axios from 'axios';
import { CgProfile } from 'react-icons/cg';
import { ImMobile, ImOffice } from 'react-icons/im';
import { MdPayment } from 'react-icons/md';
import { GoIssueReopened } from 'react-icons/go';
import {BiSupport } from 'react-icons/bi';
import { StudentDetails ,Courses,Results,Query} from './DashBoardPages';

function DashBoard() {
  const [data,setData] = useState([])
  const [search,setSearch] = useState("")
  const [id,setId] = useState(0)
  console.log(id,"sdadsd")

  const Pages=[
  <StudentDetails  search={search}/>,
  <Courses />,
  <Results/>,
 < Query/>
]

const PagesName=[
  "StudentDetails",
  "Courses",
  "Results",
  "Querys"
]

function getId(id){
  console.log(id)
   setId(id)
}

  return (
    <>
      <NavBar/>
    <div className={style.main}>
    <div className={style.rightBar}>
    <input className={style.inputBox} placeholder='Search student here....'  value={search} onChange={(e)=>setSearch(e.target.value)} />
            <h3>My Dashboard</h3>
        {PagesName.map((item ,index )=>
        <div key={index} className={style.setRightbox}>
        <h4  onClick={()=>getId(index)}>{item}</h4>
        </div>
        )}
        </div>
        <div className={style.infoBox}>
         {Pages[id]}
        </div>
  
    </div>
    </>
  )
}

export default DashBoard
