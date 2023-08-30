import React  from "react";
import style from "./VerifiedProfile.module.css";
import NavBar from "../../component/NavBar/NavBar";
import { CgProfile } from 'react-icons/cg';
import { ImMobile } from 'react-icons/im';
import { MdPayment } from 'react-icons/md';
import { GoIssueReopened } from 'react-icons/go';
import {BiSupport } from 'react-icons/bi';

const VerifiedProfile= () => {
  let user = JSON.parse(localStorage.getItem("userData"));


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
             src={user.studentData.image}
      />
      <div className={style.ProfileData}>
      <h3>My profile</h3>
      <ul >
  
        <li>
            <div className={style.info}>
            <h6>Name</h6>
            {user?.studentData?.name}
            </div>
            </li>
        <li>
            <div className={style.info}>
            <h6>Gender</h6>
            {user?.studentData?.gender}
            </div>
            </li>
        <li>
        <div className={style.info}>
            <h6>Email id</h6>
            {user?.studentData?.email}
            </div>
            </li>
        <li>
        <div className={style.info}>
            <h6>Phone No</h6>
            {user?.studentData?.mobile}
            </div>
          
            </li>
        <li>
        <div className={style.info}>
            <h6>Address</h6>
            {user?.studentData?.address}
            </div>
          
            </li>
        <li>
        <div className={style.info}>
            <h6>Adhar No</h6>
            {user?.studentData?.adharNo}
            </div>
          
            </li>
        <li>
        <div className={style.info}>
            <h6>course</h6>
            {user?.studentData?.course}
            </div>
          
            </li>
        <li>
        <div className={style.info}>
            <h6>Date of birth</h6>
            {user?.studentData?.dob}
            </div>
          
            </li>
        <li>
        <div className={style.info}>
            <h6>Father-Name</h6>
            {user?.studentData?.fatherName}
            </div>
          
            </li>
        <li>
        <div className={style.info}>
            <h6>Mother-Name</h6>
            {user?.studentData?.motherName}
            </div>
          
            </li>
        <li>
        <div className={style.info}>
            <h6>Parent Contact No</h6>
            {user?.studentData?.parentContact}
            </div>
          
            </li>
      </ul>
      </div>
      </div>
    </div>
  );
};

export default VerifiedProfile;