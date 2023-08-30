import React  from "react";
import style from "./Profile.module.css";
import NavBar from "../../component/NavBar/NavBar";
import { CgProfile } from 'react-icons/cg';
import { ImMobile } from 'react-icons/im';
import { MdPayment } from 'react-icons/md';
import { GoIssueReopened } from 'react-icons/go';
import {BiSupport } from 'react-icons/bi';

const Profile = () => {
  let user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className={style.home}>
        <NavBar />
        <div className={style.rightBar}>
            <h3>My Dashboard</h3>
             <h5 ><CgProfile/>Accounts</h5>
             <h5><ImMobile/>Mobile</h5>
             <h5><MdPayment/>Payment</h5>
             <h5><GoIssueReopened/>Complaints</h5>
             <h5><BiSupport/>Supports</h5>
        </div>
    <div className={style.container}>
      
        <img className={style.Profilebg} src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2017/02/Photoshop-Replace-Background-Featured.jpg" />
      
      <img className={style.img}
        src={`https://server-bu32.onrender.com/api/userImages/${user?.userData?.image}`}
      />
      <div className={style.ProfileData}>
      <h3>My profile</h3>
      <ul >
  
        <li>
            <div className={style.info}>
            <h5>Name</h5>
            {user?.userData?.name}
            </div>
            </li>
        <li>
        <div className={style.info}>
            <h5>Email id</h5>
            {user?.userData?.email}
            </div>
            </li>
        <li>
        <div className={style.info}>
            <h5>Phone No</h5>
            {user?.userData?.mobile}
            </div>
          
            </li>
      </ul>
      </div>
      </div>
    </div>
  );
};

export default Profile;