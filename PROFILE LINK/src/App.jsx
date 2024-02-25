import React from 'react';
import favicon from './assets/favicon.png';
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const App = () => {
  return (
    <div className='w-full h-auto md:h-screen bg-black text-white flex justify-center items-center'>
      <div className="w-1/2 bg-slate-800 flex flex-col justify-center items-center rounded-md p-5">
        <img className='w-28' src={favicon} alt="profileIcon" />
        <h2 className='text-2xl text-center'>Ekhlakh Ahmad</h2>
        <p className='md:text-lg text-center mb-3'>passionate Web Development.</p>
        <a href="https://github.com/ekhlakhahmad" target="_blank" className='w-4/5 flex justify-center gap-2 items-center border-2 border-spacing-y-1 rounded-md m-2 border-white py-2 text-lg hover:bg-slate-900 cursor-pointer'><FaSquareGithub />GitHub Profile</a>
        <a href="https://www.linkedin.com/in/ekhlakhahmad" target="_blank" className='w-4/5 flex justify-center gap-2 items-center border-2 border-spacing-y-1 rounded-md m-2 border-white py-2 text-lg hover:bg-slate-900 cursor-pointer'><FaLinkedin />LinkedIn Profile</a>
        <a href="https://www.instagram.com/ekhlakhahmad9" target="_blank" className='w-4/5 flex justify-center gap-2 items-center border-2 border-spacing-y-1 rounded-md m-2 border-white py-2 text-lg hover:bg-slate-900 cursor-pointer'><FaSquareInstagram />Instagram Profile</a>
        <a href="https://t.me/EkhlakhAhmad" target="_blank" className='w-4/5 flex justify-center gap-2 items-center border-2 border-spacing-y-1 rounded-md m-2 border-white py-2 text-lg hover:bg-slate-900 cursor-pointer'><FaTelegram />Telegram Profile</a>
        <a href="https://www.facebook.com/ekhlakhahmad95" target="_blank" className='w-4/5 flex justify-center gap-2 items-center border-2 border-spacing-y-1 rounded-md m-2 border-white py-2 text-lg hover:bg-slate-900 cursor-pointer'><FaSquareFacebook />Facebook Profile</a>
        <a href="https://wa.me/9576650491" target="_blank" className='w-4/5 flex justify-center gap-2 items-center border-2 border-spacing-y-1 rounded-md m-2 border-white py-2 text-lg hover:bg-slate-900 cursor-pointer'><FaWhatsappSquare />WhatsApp Profile</a>
        <a href="mailto:ekhlakhahmadpc@gmail.com" className='w-4/5 flex justify-center gap-2 items-center border-2 border-spacing-y-1 rounded-md m-2 border-white py-2 text-lg hover:bg-slate-900 cursor-pointer'><MdEmail />E-mail ID</a>
      </div>
    </div>
  );
};

export default App;
