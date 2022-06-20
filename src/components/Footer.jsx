import React from 'react';
// import styles from '../pages/home.module.css';
import styles from "./Footer.module.css";
import Facebook from "../public/Facebook.svg";
// import RightFooter from '../public/right.png';
import Instagram from "../public/Instagram.svg";
import Youtube from "../public/Youtube.svg";

export const Footer = () => {
  return (
    <div className={`relative flex flex-col justify-center items-center bg-[#212020]`}>
      <div className='absolute top-[-2rem] bg-white w-ful lg:w-[65%] h-[4rem] flex justify-center items-center rounded-lg shadow-lg'>
        <form className="flex justify-center items-center px-4 lg:px-0">
          <input type="email" placeholder='Subscribe for Our Daily News Letter' className='outline-none border-[1px] border-[#b0cb1f] text-sm text-gray-800 lg:w-[30rem] rounded-l-[5px] px-2 py-1' />
          <button type='submit' className='bg-[#b0cb1f] rounded-r-[5px] px-2 py-[0.42rem] text-white text-xs'>Submit</button>
        </form>
      </div>
        <div className="flex flex-col lg:flex-row justify-around lg:px-0 px-4 w-[100%] lg:w-[55rem] pb-8 pt-12">
          <div>
            <dl>
              <dt className='flex items-center mb-3'><img src="https://geniushubglobal.com/img/Genius%20Hub....png" width={60} alt="Genius Hub Logo" /><span className='ml-3 text-[#fecc00] font-semibold text-2xl'>Genius Hub</span></dt>
              <dt className='mb-3 font-semibold text-xs text-white'>Head Office:</dt>
              <dd className='text-xs text-white'>Edo Production Centre, Magistrate Court Premises, off Sapele Road, Benin City.</dd>
              <dt className='mb-3 font-semibold text-xs text-white'>Branch Office:</dt>
              <dd className='text-xs text-white'>Moscow Filling Station, Moscow Junction, Ekpoma, Edo State.</dd>
              <dt className='mb-3 font-semibold text-xs text-white'>Contact:</dt>
              <dd className='text-xs text-white'>+2348183109822, +2347038255215</dd>
              <dt className='mb-3 font-semibold text-xs text-white'>Email:</dt>
              <dd className='text-xs text-white'>info@geniushubglobal.com, geniushubglobal@gmail.com</dd>
            </dl>
          </div>
          <div>
            <ol>
              <li className='mb-3 font-semibold text-xl text-white'>Quick Links</li>
              <li className='text-xs mb-3 text-white hover:cursor-pointer' onClick={() => window.open("https://geniushubglobal.com/", "_blank")}>Home</li>
              <li className='text-xs mb-3 text-white hover:cursor-pointer' onClick={() => window.open("https://geniushubglobal.com/", "_blank")}>About</li>
              <li className='text-xs mb-3 text-white hover:cursor-pointer' onClick={() => window.open("https://geniushubglobal.com/", "_blank")}>Blog</li>
              <li className='text-xs mb-3 text-white hover:cursor-pointer' onClick={() => window.open("https://geniushubglobal.com/", "_blank")}>Careers</li>
              <li className='text-xs mb-3 text-white hover:cursor-pointer' onClick={() => window.open("https://geniushubglobal.com/", "_blank")}>Contact</li>
              <li className='text-xs mb-3 text-white hover:cursor-pointer' onClick={() => window.open("https://geniushubglobal.com/", "_blank")}>Donate</li>
            </ol>
          </div>
          <div>
            <h2 className='mb-3 font-semibold text-xl text-white'>Social Links</h2>
            <ol className="flex">
              <li className='flex mr-4 justify-center items-center rounded-full border-[1px] border-white w-9 h-9'><img src={Facebook} alt="Facebook" className='text-white w-5' /></li>
              <li className='flex mr-4 justify-center items-center rounded-full border-[1px] border-white w-9 h-9'><img src={Instagram} alt="Intagram" className='text-white w-5' /></li>
              <li className='flex mr-4 justify-center items-center rounded-full border-[1px] border-white w-9 h-9'><img src={Youtube} alt="Youtube" className='text-white w-5' /></li>
            </ol>
          </div>
        </div>
        <div className="text-white mb-8">&copy; Copyright 2022, Genius Hub Global Initiative. All rights reserved</div>
    </div>
  )
};
export default Footer;