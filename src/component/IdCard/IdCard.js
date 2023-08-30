
import style from "./IdCard.module.css"
import barcode from "../../Image/Barcode.png"
import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';


function IdCard() {
  const pdfRef = useRef();



  const handleDownload = () => {
      
    const input = pdfRef.current;
    html2canvas(input).then((canvas)=>{
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF("p","mm","a4",true);
      const pdfWidth=pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth/imgWidth, pdfHeight/imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) /2;
      const imgY=30;
      pdf.addImage(imgData, "PNG",imgX, imgY, imgWidth*ratio, imgHeight * ratio);
      pdf.save("demo.pdf")
    })

  };
  
    let user = JSON.parse(localStorage.getItem("userData"));
  return (
    <div className={style.main} >
        <div className={style.container} ref={pdfRef} id="myDiv">
    <div className={style.box1}>
      <img  className={style.img}  src={user.studentData.image} alt='dp' />
      <h4>{user?.studentData?.name}</h4>
    </div>
    <div className={style.box2}>
        <h5>Id No :  000000</h5>
        <h5>DOB :  {user?.studentData?.dob}</h5>
        <h5>Email  :  {user?.studentData?.email}</h5>
        <h5>Phone  :  {user?.studentData?.mobile}</h5>
    </div>
    <div className={style.box3}>
      <img className={style.barcode} src={barcode} alt='barCode'/>
    </div>
    </div>
    <button className={style.btn} onClick={handleDownload}>Download Page as PDF</button>
    </div>
  )
}

export default IdCard
