import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useNavigate, useParams } from 'react-router-dom';
import style from './UpdateStudentData.module.css'
import NavBar from '../NavBar/NavBar';
import  axios from 'axios';

//new 
import {
  isValidEmailSyntax,
  isValidMobile,
  isOnlyLetters,
  isValidString,
  isValidPassword,
} from '../../Regex/Regex';


export default function UpdateStudentData() {
const params=useParams()
  const [validated, setValidated] = useState(false);
  const navigate=useNavigate()
  

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDate] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [parentContact, setParentContact] = useState("");
  const [adharNo, setAdhareNo] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState(null);
  const [course, setCourse] = useState("");


  const getData= async (e) => {
    

      const res = await axios.get(
        `https://server-bu32.onrender.com/api/update/${params.id}`
      );
       setName(res.data.result.name)
       setEmail(res.data.result.email)
       setMobile(res.data.result.mobile)
       setGender(res.data.result.gender)
       setDate(res.data.result.dob)
       setFatherName(res.data.result.fatherName)
       setMotherName(res.data.result.motherName)
       setParentContact(res.data.result.parentContact)
       setAdhareNo(res.data.result.adharNo)
       setAddress(res.data.result.address)
       setCourse(res.data.result.course)
  }

useEffect(()=>{
    getData()
},[])


const handleSubmit = async (e) => {
    
    e.preventDefault();


    if (!isValidString(name)) {
      alert('Give correct namel');
      return;
    }
    if (!isValidEmailSyntax(email)) {
      alert('Give correct email');
      return;
    }
 
    if (!isValidMobile(mobile)) {
      alert('Give correct mobile');
      return;
    }
    if (!isValidString(fatherName)) {
      alert('Give correct father Name');
      return;
    }
    if (!isValidString(motherName)) {
      alert('Give correct Mother Name');
      return;
    }
    if (!isValidMobile(parentContact)) {
      alert('Give correct Parent No');
      return;
    }

    try {
      const res = await axios.put(
        `https://server-bu32.onrender.com/api/updatedata/${params.id}`,
        {
            name,
            email,
            mobile,
            fatherName,
            motherName,
            dob,
            adharNo,
            address,
            parentContact,
            course,
            gender
        }
      );
      alert(res.data.message);
      navigate("/DashBoard")
    } catch (error) {
      console.log(error.message);
    }
  }







  return (
    <>
    <NavBar />
    <div className={style.container}>
    <Form className={style.Form} noValidate validated={validated} onSubmit={handleSubmit }>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label style={{color:"white"}}>Full name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Full name"
            onChange={(e)=>setName(e.target.value)}
            name='name'
            value={name}
            maxlength = "30"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label style={{color:"white"}}>Email id</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Email"
            onChange={(e)=>setEmail(e.target.value)}
            name='email'
            value={email}
            maxlength = "30"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label style={{color:"white"}}>Mobile No</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="number"
              placeholder="Number"
              required
              onChange={(e)=>setMobile(e.target.value)}
              name='mobile'
              value={mobile}
              maxlength = "10"
            />
          </InputGroup>
        </Form.Group>

      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label style={{color:"white"}}l>Parent Contact  No</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="number"
              placeholder="Number"
              onChange={(e)=>setParentContact(e.target.value)}
              name='parentContact'
              value={parentContact}
              required
              maxlength = "10"
            />
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} md="2" controlId="validationCustomUsername">
          <Form.Label style={{color:"white"}}>Courses</Form.Label>
          <InputGroup hasValidation>
            <select className={style.gender}
             onChange={(e)=>setGender(e.target.value)}
             name='course'
             value={gender}
            >
              <option >
                gender 
              </option>
              <option>
                Male
              </option>
              <option>
                Female
              </option>
            
            </select>
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} md="2" controlId="validationCustomUsername">
          <Form.Label style={{color:"white"}}>Courses</Form.Label>
          <InputGroup hasValidation>
            <select className={style.gender}
             onChange={(e)=>setCourse(e.target.value)}
             name='course'
             value={course}
            >
              <option >
                course
              </option>
              <option>
                Java
              </option>
              <option>
                JavaScript
              </option>
              <option>
                Python
              </option>
            </select>
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} md="2" controlId="validationCustomUsername">
          <Form.Label style={{color:"white"}}>DOB</Form.Label>
          <InputGroup hasValidation>
          <Form.Control
              type="date"
              onChange={(e)=>setDate(e.target.value)}
              name='dob'
              value={dob}
              required
            />
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} md="2" controlId="validationCustom04">
          <Form.Label style={{color:"white"}}>Adhaar No</Form.Label>
          <Form.Control type="text" placeholder="Adhaar No" required 
            onChange={(e)=>setAdhareNo(e.target.value)}
            name='adharNo'
            value={adharNo}
            maxlength = "12"
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        </Row>

        <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label style={{color:"white"}}>Address</Form.Label>
          <Form.Control type="text" placeholder="Address" required 
            onChange={(e)=>setAddress(e.target.value)}
            name='address'
            value={address}
            maxlength = "50"
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
       
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label style={{color:"white"}}>Father Name</Form.Label>
          <Form.Control type="text" placeholder="Name" required 
            onChange={(e)=>setFatherName(e.target.value)}
            name='fatherName'
            value={fatherName}
            maxlength = "30"
          />
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label style={{color:"white"}}>Mother Name</Form.Label>
          <Form.Control type="text" placeholder="Name" required
           onChange={(e)=>setMotherName(e.target.value)}
           name='motherName'
           value={motherName}
           maxlength = "30"
          />
        </Form.Group>

   
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} md="2" controlId="validationCustomUsername">
          <Form.Label style={{color:"white"}}>image</Form.Label>
          <InputGroup hasValidation>
          <Form.Control
              type="file"
              onChange={(e)=>setImage(e.target.files[0])}
              required
            />
          </InputGroup>
        </Form.Group>
        </Row>

      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button className={style.btn} type="submit">Submit form</Button>
    </Form>
    </div>
    </>
  );
}

