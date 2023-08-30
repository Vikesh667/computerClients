import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from "react"
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from "./Signup.module.css"
import { useNavigate } from 'react-router-dom';
import {
  isValidEmailSyntax,
  isValidMobile,
  isOnlyLetters,
  isValidString,
  isValidPassword,
} from '../../Regex/Regex';
import NavBar from '../../component/NavBar/NavBar';

function Signup() {
    const [email, setEmail] = useState(" ")
    const [password, setPassword] = useState(null)
    const [mobile, setMobile] = useState(null)
    const [name, setName] = useState("")
    const [image, setImage] = useState(null)
const navigate = useNavigate()

    function NavigateToSignin(){
      navigate("/Signin")
  }

    async function submit(e){
      e.preventDefault();
      if (!isValidEmailSyntax(email)) {
        alert('Give correct email');
        return;
      }
      if (!isValidPassword(password)) {
        alert('add strong Password !!');
        return;
      }
      const formData=new FormData()
      formData.append("image",image)
      formData.append("name",name)
      formData.append("email",email)
      formData.append("mobile",mobile)
      formData.append("password",password)
      try{
      const res= await axios.post("https://server-bu32.onrender.com/api/register",formData)
      console.log(res,"console")
      alert(res.data.message)
      navigate("/Signin")
      }catch(error){
       console.log(error.message)
      }
    }

  return (
    <>
        <NavBar />
    <div className={style.main}>
      
    <Form  className={style.form}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={(e)=>setName(e.target.value)} value={name} type="name" placeholder="Enter name"  name='name'/>
         <br/>
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder="Enter email" name='email'/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Mobile No</Form.Label>
        <Form.Control onChange={(e)=>setMobile(e.target.value)} value={mobile} type="number" placeholder="Mobile Number" name='mobile'/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={(e)=>setPassword(e.target.value)} value={password}  placeholder="Password" name='password' />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Image</Form.Label>
        <Form.Control onChange={(e)=>setImage(e.target.files[0])}  type="file" placeholder="Image"  />
      </Form.Group>


      <Button onClick={submit} variant="primary" type="submit">
        Submit
      </Button>
      <br/>
      <h6 className={style.login} onClick={NavigateToSignin}>Login</h6>
    </Form>
    </div>
    </>
  );
}

export default Signup;