import React from 'react';

// regular nextjs stuff
import { Hero, Products, Footer } from '../components/index';
import styles from './home.module.css';
// assets
import Logo2 from '../public/logo2.png';
import mainImg from '../public/mainshirt.png';
import Star from '../public/star.png';
import vectorRound from '../public/vectorRound.png';


export default function Home({ products }) {


//   return <div></div>
  return (
    <div>
     <Hero />
     <Products />
     <div className={`${styles.banner} px-10 mx-10 my-10 py-4 flex justify-between items-center`}>
      <div className="left flex items-center justify-center">
        <svg className={styles.icon} width="39" height="40" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M37.6008 0.108425C37.8847 0.237352 38.108 0.470766 38.2242 0.760111C40.4029 7.02609 36.478 12.1466 32.6971 15.0443L33.39 16.0376C33.7725 16.5843 33.9067 17.5435 33.6864 18.1723L31.6879 24.4703C31.4676 25.1011 30.8428 25.9261 30.3021 26.3086L11.4901 39.5014C10.577 40.1382 9.55367 40.2484 8.91286 39.3372L0.363973 27.1056C0.057767 26.6669 -0.0621062 26.1247 0.0305994 25.5977C0.123305 25.0707 0.421035 24.602 0.858603 24.2941L19.6706 11.1033C20.3285 10.6838 21.0875 10.45 21.8673 10.4264L28.2515 10.3984C28.9163 10.4064 29.7714 10.861 30.1539 11.4077L31.2913 13.0377C34.1069 10.899 37.7996 6.90594 35.9393 1.55913C35.8498 1.26044 35.879 0.938758 36.0206 0.661011C36.1623 0.383263 36.4056 0.170831 36.7 0.067909C36.9943 -0.0350131 37.3169 -0.0205015 37.6008 0.108425ZM28.3205 20.0059C28.7335 19.9145 29.1245 19.7426 29.471 19.5C29.9693 19.1495 30.3584 18.6655 30.5937 18.1036C30.8289 17.5417 30.9007 16.9248 30.8007 16.3239C30.3662 16.5823 29.9496 16.8005 29.5611 16.9848C29.3949 17.0629 29.2187 17.1029 29.0465 17.1029C28.7715 17.1021 28.5049 17.0079 28.2904 16.8357C28.076 16.6636 27.9264 16.4237 27.8661 16.1553C27.8058 15.887 27.8385 15.6062 27.9587 15.3588C28.0789 15.1115 28.2796 14.9123 28.5278 14.794C28.5979 14.7639 28.9724 14.5717 29.5171 14.2433C28.9749 13.8485 28.3228 13.633 27.6522 13.6269C26.9815 13.6208 26.3256 13.8244 25.7763 14.2092C25.0756 14.7013 24.5988 15.4512 24.4505 16.2945C24.3022 17.1377 24.4946 18.0054 24.9853 18.707C25.2277 19.0537 25.536 19.3492 25.8927 19.5767C26.2493 19.8042 26.6473 19.9592 27.0639 20.0329C27.4804 20.1065 27.9074 20.0974 28.3205 20.0059ZM12.9169 27.7806C11.6667 28.5765 10.4335 29.3615 10.459 29.4395C10.5094 29.5953 18.0702 27.4589 18.2651 27.0599C18.3871 26.8112 17.8516 25.8676 17.4441 25.1496C17.1984 24.7167 16.9992 24.3658 17.0189 24.2987C17.0435 24.2161 18.128 23.522 19.2825 22.7831C20.622 21.9259 22.0556 21.0085 22.0374 20.9156C22.0031 20.7423 14.3765 22.8903 14.2307 23.2948C14.1468 23.5266 14.5931 24.3225 14.9752 25.004C15.2595 25.5111 15.5084 25.9549 15.477 26.056C15.4399 26.1745 14.1699 26.983 12.9169 27.7806Z" fill="#FFD83A"/>
        </svg>
        <p className="text-white">Flashsale</p>
      </div>
      <div className="right">
        <p className="text-white">Time Left: 00h : 00m : 00s</p>
      </div>
     </div>
      <div className={`flex flex-col md:flex-row flex-wrap justify-center items-center`}>
        <div className={styles.underneath}>
          <svg width="405" height="532" viewBox="0 0 405 532" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M-103 439.209C-7.33914 439.209 70.2093 361.661 70.2093 266C70.2093 170.339 -7.33914 92.7907 -103 92.7907C-198.661 92.7907 -276.209 170.339 -276.209 266C-276.209 361.661 -198.661 439.209 -103 439.209ZM-103 532C43.9077 532 163 412.908 163 266C163 119.092 43.9077 0 -103 0C-249.908 0 -369 119.092 -369 266C-369 412.908 -249.908 532 -103 532Z" fill="#FB575C"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M378 68.4815C385.998 68.4815 392.481 61.9979 392.481 54C392.481 46.0021 385.998 39.5185 378 39.5185C370.002 39.5185 363.519 46.0021 363.519 54C363.519 61.9979 370.002 68.4815 378 68.4815ZM378 77C390.703 77 401 66.7025 401 54C401 41.2975 390.703 31 378 31C365.297 31 355 41.2975 355 54C355 66.7025 365.297 77 378 77Z" fill="#A82682"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M394 95.9259C397.825 95.9259 400.926 92.8251 400.926 89C400.926 85.1749 397.825 82.0741 394 82.0741C390.175 82.0741 387.074 85.1749 387.074 89C387.074 92.8251 390.175 95.9259 394 95.9259ZM394 100C400.075 100 405 95.0751 405 89C405 82.9249 400.075 78 394 78C387.925 78 383 82.9249 383 89C383 95.0751 387.925 100 394 100Z" fill="#DD3A3F"/>
          </svg>
        </div>
        {/* <ProductItem imgURL={Item1} itemName="Ankara Sweat Shirt" itemPrice={"₦7,000"} rating={"4.5"}  />
        <ProductItem imgURL={Item2} itemName="Ankara Sweat Shirt" itemPrice={"₦7,000"} rating={"4.5"}  />
        <ProductItem imgURL={Item3} itemName="Ankara Sweat Shirt" itemPrice={"₦7,000"} rating={"4.5"}  />
        <ProductItem imgURL={Item4} itemName="Ankara Sweat Shirt" itemPrice={"₦7,000"} rating={"4.5"}  /> */}
      </div>
      <div className={`${styles.sectionMain} pl-10 pt-10 pb-10 mb-20 flex flex-col md:flex-row`}>
        <div className={styles.vectorRound}>
          <img src={vectorRound} alt='vector' />
        </div>
        <div className={`${styles.leftMain}`}>
          <div className={`${styles.topMainLeft}`}>
            <div className={`${styles.img} py-4 px-6 bg-white mb-4`}>
              <div>
                <img src={Logo2} alt="logo" />
              </div>
            </div>
            <p className='text-whit font-bold'>Genius Hub <span className='text-gray-900 font-light'>Catalog</span></p>
            <div className="middleMainLoe">
              <p className={`${styles.mainTxt} font-extrabold`} >We  produce our product with <br />strong & long lasting facilities</p>
            </div>
            <p className='text-gray-400 mb-5 text-sm'>Don’t worry when you buy a product from our store, we provide a <br />legit fashion outfit, Bags & wigs for you. </p>

            <div className={`${styles.bottomTxt} flex justify-between w-96`}>
              <div className={`${styles.bottomTxtLeft} flex-start ${styles.bottomCouter}`}>
                <p className={`${styles.couter} font-extrabold text-4xl`}>2k+</p>
                <span className='text-gray-400 text-xs'>Customers</span>
              </div>
              <div className={`${styles.bottomTxtLeft} flex-start`}>
                <p className={`${styles.couter} font-extrabold text-4xl`}>180k+</p>
                <span className='text-gray-400 text-xs'>Product Shipped</span>
              </div>
              <div className={`${styles.bottomTxtLeft} flex-start`}>
                  <img src={Star} alt="star" />
                <span className='text-gray-400 text-xs'>Rating 4.6</span>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.rightMain} flex justify-center items-center`}>
          <img src={mainImg} alt='' /> 
        </div>
      </div>
      <Footer />
    </div>
  )
}
