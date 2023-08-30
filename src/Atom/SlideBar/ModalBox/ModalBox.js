import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from "./ModalBox.module.css"
import { useState } from 'react';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalBox() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [name , setName] = useState("")
  const [email , setEmail] = useState("")
  const [query , setQuery] = useState("")


async function handleSubmit(){
  try {
    const res = await axios.post(
      "https://server-bu32.onrender.com/api/query",{
        name,
        email,
        query
      }
    );
    alert(res.data.message);
  } catch (error) {
    console.log(error.message);
  }
}


  return (
    <div>
      <Button className={styles.btn} onClick={handleOpen}>Contact Us</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Fill the Form for Enquiry
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 3 }}>
            <div className={styles.container}>
            <input placeholder='Name' type='text' value={name} name="name" onChange={(e)=>setName(e.target.value)}/>
            <input placeholder='Email'  type='email' value={email} name="email" onChange={(e)=>setEmail(e.target.value)}/>
          
            <textarea placeholder='write your query here.....'  maxlength="50" value={query} name="query" onChange={(e)=>setQuery(e.target.value)}/>
            <button onClick={handleSubmit}>Send</button>
            </div>
         
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
