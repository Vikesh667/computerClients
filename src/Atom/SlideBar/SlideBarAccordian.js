import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import {BiBook } from 'react-icons/bi';
import {IoIosWoman } from 'react-icons/io';
import {HiUserGroup} from 'react-icons/hi';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



export function CourseSlideBarAccordian() {
   
  return (
    <Accordion defaultActiveKey="0">
  
      <Accordion.Item style={{outline:"none",border:"none"}} eventKey="1">
      <Accordion.Header style={{outline:"none",border:"none"}}><h4><BiBook />Course</h4></Accordion.Header>
        <Accordion.Body >
   <ul style={{outline:"none",border:"none",listStyle:"none"}}>
     <Link to={"/Javascript"}><li>JavaScript</li></Link> 
     <Link to={"/Java"}><li>Java</li></Link> 
     <Link to={"/Python"}><li>Python</li></Link> 
      

   </ul>
        </Accordion.Body>
        </Accordion.Item>
    </Accordion>
  );
}






export function StudentSlideBarAccordian() {
   
  return (
    <Accordion defaultActiveKey="0">
  
      <Accordion.Item style={{outline:"none",border:"none"}} eventKey="1">
      <Accordion.Header style={{outline:"none",border:"none"}}><h4><IoIosWoman/>Student</h4></Accordion.Header>
        <Accordion.Body >
   <ul style={{outline:"none",border:"none",listStyle:"none"}}>
     <Link to={"/Form"}><li>Online Enquiry</li></Link> 
     <Link to={"/StudentVerification"}><li>Student Verification</li></Link> 
     <Link to={"/Signin"}><li>Student Login</li></Link> 
     <Link to={"/IdCard"}><li>Id Card</li></Link> 
 
   </ul>
        </Accordion.Body>
        </Accordion.Item>
    </Accordion>
  );
}



export function FacultiesSlideBarAccordian() {
  const navigate= useNavigate()
  const [Admin,setAdmin] = useState(JSON.parse(localStorage.getItem("Admin") || false)) 

  function removeData(){
    localStorage.clear()
    navigate("/")
  }
  return (
    <Accordion defaultActiveKey="0">
  
      <Accordion.Item style={{outline:"none",border:"none"}} eventKey="1">
      <Accordion.Header style={{outline:"none",border:"none"}}><h4><HiUserGroup/>Faculties</h4></Accordion.Header>
        <Accordion.Body >
   <ul style={{outline:"none",border:"none",listStyle:"none"}}>
    {Admin.Admin ?  <h6 ><li onClick={removeData}>Sign out</li></h6>
     :
    <Link to={"/Admin"}><li>Sign In</li></Link> 
    }
    
     
   </ul>
        </Accordion.Body>
        </Accordion.Item>
    </Accordion>
  );
}

