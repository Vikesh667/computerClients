import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signup from './Page/Signup/Signup';
import Signin from './Page/Signin/Signin';
import Profile from './Page/Profile/Profile';
import Java from './component/Courses/Java/Java';
import Javascript from './component/Courses/Javascript/Javascript';
import Python from './component/Courses/Python/Python';
import StudentForm from './component/StudentForm/StudentForm';
import RegisterUserHome from './Page/RegisterUserHome/RegisterUserHome';
import { RecoilRoot } from 'recoil';
import PaymentGatewayPage from './component/PaymentGatewayPage/PaymentGatewayPage';
import StudentVerification from './component/StudentVerification/StudentVerification';
import VerifiedProfile from './Page/VerifiedProfile/VerifiedProfile';
import IdCard from './component/IdCard/IdCard';
import ForgetPassword from './Page/ForgetPassword/ForgetPassword';
import ResetPassword from './Page/ResetPassword/ResetPassword';
import AboutUs from './Page/AboutUs/AboutUs';
import Gallery from './Page/Gallery/Gallery';
import ContactUs from './Page/ContactUs/ContactUs';
import Admin from './Page/Admin/Admin';
import DashBoard from './Page/DashBoard/DashBoard';
import UpdateStudentData from './component/UpdateStudentData/UpdateStudentData';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/*",
    element: <App />,
  },
  {
    path: "/Signup",
    element: <Signup />,
  },
  {
    path: "/Signin",
    element: <Signin />,
  },
  {
    path: "/Profile",
    element: <Profile />,
  },
  {
    path: "/Java",
    element: <Java />,
  },
  {
    path: "/Javascript",
    element: <Javascript />,
  },
  {
    path: "/Python",
    element: <Python />,
  },
  {
    path: "/Form",
    element: <StudentForm />,
  },
  {
    path: "/RegisterUserHome",
    element: <RegisterUserHome />,
  },
  {
    path: "/PaymentGatewayPage",
    element: <PaymentGatewayPage />,
  },
  {
    path: "/StudentVerification",
    element: <StudentVerification />,
  },
  {
    path: "/VerifiedProfile",
    element: <VerifiedProfile />,
  },
  {
    path: "/IdCard",
    element: <IdCard />,
  },
  {
    path: "/AboutUs",
    element: <AboutUs />,
  },
  {
    path: "/ResetPassword",
    element: <ResetPassword />,
  },
  {
    path: '/forgotPassword/:id/:token',
    element: <ForgetPassword />,
  },
  {
    path: '/ContactUs',
    element: <ContactUs/>,
  },
  {
    path: '/Gallery',
    element: <Gallery />,
  },
  {
    path: '/Admin',
    element: <Admin />,
  },
  {
    path: '/DashBoard',
    element: <DashBoard />,
  },
  {
    path: '/UpdateStudentData/:id',
    element: <UpdateStudentData />,
  },
]);
root.render(
  <React.StrictMode>
     <RecoilRoot>
     <RouterProvider router={router} />
     </RecoilRoot>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
