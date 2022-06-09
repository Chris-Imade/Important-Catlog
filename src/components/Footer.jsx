import React from 'react';
import styles from '../pages/home.module.css';
import RightFooter from '../public/right.png';

export const Footer = () => {
  return (
    <div className={`${styles.footerIntro} flex flex-col md:flex-row p-10`}>
        <div className={`${styles.leftFooterIntro} mt-20 flex  items-start`}>
        <div className="">
            <h4 className={`${styles.blog}`}>Blog</h4>
            <h2 className={`${styles.news}`}>Get the latest update on <br /> what's trending in fashion</h2>
            {/* <img className={`${styles.curly__img}`} src={Curly} alt="Curly" width={40} height={20} /> */}
            <button className={`${styles.viewAll} text-white py-2 px-4 w-40`}>
            View all post
            </button>
        </div>
        </div>
        <div className={`${styles.rightFooterIntro} flex justify-center items-center`}>
        <img src={RightFooter} alt='rightFooter' width={450} height={500} />
        </div>
    </div>
  )
};
export default Footer;