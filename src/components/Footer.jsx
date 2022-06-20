import React from 'react';
// import styles from '../pages/home.module.css';
import styles from "./Footer.module.css";
import Facebook from "../public/Facebook.svg";
// import RightFooter from '../public/right.png';

export const Footer = () => {
  return (
    <div className={`flex flex-col justify-center items-center bg-[#212020]`}>
        <div className="flex justify-around w-full">
          <div>
            <dl>
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
              <li className='mb-3 font-semibold text-xl text-white' onClick={() => window.open("", "_blank")}>Quick Links</li>
              <li className='text-xs mb-3 text-white hover:cursor-pointer' onClick={() => window.open("https://geniushubglobal.com/", "_blank")}>Home</li>
              <li className='text-xs mb-3 text-white hover:cursor-pointer' onClick={() => window.open("https://geniushubglobal.com/", "_blank")}>About</li>
              <li className='text-xs mb-3 text-white hover:cursor-pointer' onClick={() => window.open("https://geniushubglobal.com/", "_blank")}>Blog</li>
              <li className='text-xs mb-3 text-white hover:cursor-pointer' onClick={() => window.open("https://geniushubglobal.com/", "_blank")}>Careers</li>
              <li className='text-xs mb-3 text-white hover:cursor-pointer' onClick={() => window.open("https://geniushubglobal.com/", "_blank")}>Contact</li>
              <li className='text-xs mb-3 text-white hover:cursor-pointer' onClick={() => window.open("https://geniushubglobal.com/", "_blank")}>Donate</li>
            </ol>
          </div>
          <div>
            <h2>Social Links</h2>
            <ol>
              <li className='flex justify-center items-center rounded-full border-[1px] border-white w-9 h-9'><img src={Facebook} alt="Facebook" className='text-white w-5' /></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ol>
          </div>
        </div>
        <div>&copy; Copyright 2022, Genius Hub Global Initiative. All rights reserved</div>
    </div>
  )
};
export default Footer;