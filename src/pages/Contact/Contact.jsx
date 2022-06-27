import React from 'react';
import "./Contact.module.css";
import Send from "../../public/send.png";
import Facebook from "../../public/facebook.png";
import Instagram from "../../public/instagram.png";
import LinkedIn from '../../public/linkedin.png';
import { Link } from "react-router-dom";

const Contact = () => {

  return (
    <div className='w-full h-[100vh] flex flex-col md:flex-row md:p-4 justify-between lg:p-12 bg-[#EA580C] relative'>
      <div className='p-4 md:p-0'>
      <div className='hover:cursor-pointer text-white flex items-center mb-2' onClick={() => window.history.back()}>&larr; Back</div>
      {/* left */}
      <div className='flex flex-col justify-between h-full'>
        {/* left--top */}
        <div>
          <h4 className='text-2xl md:text-4xl text-center md:text-left font-semibold text-white mb-2'>Contact support</h4>
          <p className='text-gray-200'>Leave us a message we'll respond within an hour. <br />We understand the value of time and wouldn't keep you waiting long.</p>
        </div>
        {/* left--center */}
        <div>
          <ul>
            <li className='text-gray-200 p-3 hover:shadow-sm hover:border-2 border-blue-300 rounded-lg hover:cursor-pointer w-64'><span></span>+2347080896901</li>
            <li className='text-gray-200 p-3 hover:shadow-sm hover:border-2 border-blue-300 rounded-lg hover:cursor-pointer w-64'><span></span>jephthahimade@gmail.com</li>
            <li className='text-gray-200 p-3 hover:shadow-sm hover:border-2 border-blue-300 rounded-lg hover:cursor-pointer w-64'><span></span>Magistrate court premises.</li>
          </ul>
        </div>
        {/* left--bottom */}
        <div className='flex justify-start mb-6 md:mb-0'>
          <span onClick={() =>  window.open("https://www.facebook.com/geniushubglobal/", "_blank")} className='w-16 h-16 flex justify-center items-center rounded-full hover:shadow-lg hover:cursor-pointer hover:bg-white'><img src={Facebook} alt="Facebook" /></span>
          <span onClick={() =>  window.open("https://www.instagram.com/geniushubglobal/", "_blank")} className='w-16 h-16 flex justify-center items-center rounded-full hover:shadow-lg hover:cursor-pointer hover:bg-white'><img src={Instagram} alt="Instagram" /></span>
          <span onClick={() =>  window.open("https://ng.linkedin.com/company/genius-hub-global-initiative", "_blank")} className='w-16 h-16 flex justify-center items-center rounded-full hover:shadow-lg hover:cursor-pointer hover:bg-white'><img src={LinkedIn} alt="" /></span>
        </div>
      </div>
       </div>
      {/* Right */}
      <div className="bg-white px-8 md:w-[30rem] rounded-[12px]">
        <form className="flex flex-col">
          <div className='flex flex-col mt-12'>
            <label htmlFor="name">Your Name</label>
            <input id="name" placeholder='Fullname' className="mb-4 mt-2 outline-none rounded-lg p-3 text-gray-400 border-2 border-solid hover:border-blue-300 border-gray-200" type="text" />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="email">Your Email</label>
            <input id="email" placeholder='Fullname' className="mb-4 mt-2 outline-none rounded-lg p-3 text-gray-400 border-2 border-solid hover:border-blue-300 border-gray-200" type="email" />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder='Message' name="message" cols="30" rows="10" className="mb-4 outline-none rounded-lg p-3 text-gray-400 bg-gray-100 hover:border-blue-300"></textarea>
          </div>
          <div className='flex justify-center items-center fixed right-[1.5rem] bottom-9 w-[4rem] h-[4rem] bg-white shadow-lg rounded-full'>
            <span className="hover:cursor-pointer"><img width={30} src={Send} alt="Send" /></span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact