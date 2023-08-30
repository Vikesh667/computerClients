
import './App.css';
import HomePage from './Page/HomePage/HomePage';
import RegisterUserHome from './Page/RegisterUserHome/RegisterUserHome';
import NavBar from './component/NavBar/NavBar';
import { useState } from 'react';




function App() {


  const [show,setShow] = useState(JSON.parse(localStorage.getItem("verified") || false)) 

  return (
    <div className="App">
      <NavBar />
      {show.verified ? <RegisterUserHome />  :<HomePage /> }
   

    </div>
  );
}

export default App;
