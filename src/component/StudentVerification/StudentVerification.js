import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from "react"
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from "./StudentVerification.module.css"
import {  useNavigate } from 'react-router-dom';
import NavBar from '../../component/NavBar/NavBar';




function StudentVerification() {
    const [email, setEmail] = useState(" ")
    const [dob, setDob] = useState("")

  const navigate = useNavigate()

 

    async function submit(e){
      e.preventDefault();
      try{
      const res= await axios.post("https://server-bu32.onrender.com/api/verification",{email,dob})
      console.log(res,"data nhi aa raha")
   
      if(res.data.studentData.email==email ){
        localStorage.setItem("userData",JSON.stringify(res.data))
        alert(res.data.message)
        localStorage.setItem("verified",JSON.stringify({
          verified:true
        }))
        navigate("/")
      }else{
        navigate("/StudentVerification")
      }
      }catch(error){
        alert("incorrect data")
      }
    }

  return (
    <>
     <NavBar />
    <div className={style.main}>
    
    <Form  className={style.form}>
   
    <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder="Enter email" name='email'/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

  

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control onChange={(e)=>setDob(e.target.value)} value={dob} type="date"  name='dob' />
      </Form.Group>




      <Button onClick={submit} variant="primary" type="submit">
        Verify
      </Button>
    </Form>
    </div>
    </>
  );
}

export default StudentVerification;