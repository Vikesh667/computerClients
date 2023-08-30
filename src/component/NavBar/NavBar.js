import React,{useState} from "react";
import style from "./NavBar.module.css";
import { useNavigate } from "react-router-dom";
import TemporaryDrawer from "../../Atom/SlideBar/TemporaryDrawer";

function NavBar() {
  const user=JSON.parse(localStorage.getItem("user"))
  const User=JSON.parse(localStorage.getItem("userData"))


  const navigate = useNavigate()
  const [show,setShow] = useState(JSON.parse(localStorage.getItem("verified") || false)) 
  const [Admin,setAdmin] = useState(JSON.parse(localStorage.getItem("Admin") || false)) 

  function logout(){
    localStorage.clear()
    navigate("/Signin")
  }
  function navigateToVerifiedProfile(){
    navigate("/VerifiedProfile")
  }

function navigateToProfile(){
  navigate("/Profile")
}
  function navigateToSignin(){
    navigate("/Signin")
  }
  return (
    <nav>
      <ul className={style.nav_links}>
         <span className={style.logo}><TemporaryDrawer /></span>
        <li>
          <a href="/">Home</a>
        </li>

        <li className={style.dropdown}>
          <a href="/AboutUs">About </a>
        </li>

        <li className={style.dropdown}>
          <a>Course <span className={style.character}>	&#11165;</span></a>
          <ul className={style.dropdown_content}>
            <li>
              <a href="/Javascript">Javascript</a>
            </li>
            <li>
              <a href="/Java">Java</a>
            </li>
            <li>
              <a href="/Python">Python</a>
            </li>
          </ul>
        </li>

        <li className={style.dropdown}>
          <a href="#">Student Zone <span className={style.character}>	&#11165;</span></a>
          <ul className={style.dropdown_content}>
            <li>
              <a href="/Form">Online Enquiry</a>
            </li>
            <li>
              <a href="/StudentVerification">Student Verfication</a>
            </li>
            <li>
              <a href="/Signin">Student login</a>
            </li>
            <li>
              <a href="/Signin">Certificate Verfication</a>
            </li>
    
          </ul>
        </li>

        <li className={style.dropdown}>
          <a href="/Gallery">Gallery</a>
        </li>

        <li className={style.dropdown}>
          <a href="/ContactUs">Contact</a>
      
        </li>
        {Admin.Admin ?  <li className={style.dropdown}>
          <a href="/DashBoard">Dashboard</a>
      
        </li>: null }
      

        <li className={style.dropdown}>
          <a>Facultie<span className={style.character}>	&#11165;</span></a>
          <ul className={style.dropdown_content}>
          {Admin.Admin ?  <li className={style.dropdown}>
          <h6 onClick={logout} >Admin Signout</h6>
        </li>: <a href="/Admin">Admin SignIn</a> }
          </ul>
        </li>
        <li>
          {show ?          <div>
          {
            show ?  
            <>
                 <li className={style.dropdown}>
                 <img  className={style.userImg}
            src={User.studentData.image}
            />
          <ul className={style.dropdown_contents}>
            <li>
            <span onClick={navigateToVerifiedProfile}>Profile</span> 
            </li>
            <li>
            <span onClick={logout}>Signout</span> 
            </li>
          </ul>
        </li>
         
  
      </>
      :  <span  onClick={navigateToSignin}>Signin</span>
       }
       </div> : 
          <div>
          {
            user ?  
            <>
                 <li className={style.dropdown} hidden={Admin.Admin} >
                 <img  className={style.userImg}
              src={`https://server-bu32.onrender.com/api/userImages/${user?.userData?.image}`}
            />
          <ul className={style.dropdown_contents}>
            <li>
            <span onClick={navigateToProfile}>Profile</span> 
            </li>
            <li>
            <span onClick={logout}>Signout</span> 
            </li>
          </ul>
        </li>
         
  
      </>
      :  <span hidden={Admin.Admin} onClick={navigateToSignin}>Signin</span>
       }
       </div>
          }
    
  
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
