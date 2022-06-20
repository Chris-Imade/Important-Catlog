import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import Logo1 from '../public/logo1.png';
import Logotxt from '../public/logotxt.png';
import styles from './header.module.css';
import './header.css';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { SearchBarManipulator } from './index';
import { useSelector } from 'react-redux';


const Header = () => {

    const cart = useSelector(state => state.reducer.cart);

    let totalItems = cart.line_items.length;
    const location = useLocation();

    if(location.pathname === "/") {
        return (
            <div className='mb-20'>
            <nav className={styles.nav}>
               <div className="nav__top items-center justify-center flex flex-col md:flex-row md:justify-between py-4 px-10">
                    <div className="left flex items-center justify-center">
                        <Link className="logo1" to="/"><img src={Logo1} alt="Logo1" /></Link>
                        <Link to="/"><img src={Logotxt} alt="Logo2" /></Link>
                    </div>
                    <div className="right">
                    <span onClick={() => window.location.replace('https://geniushubglobal.com/')} className="text-gray-500 cursor-pointer">geniushub.com</span>
                    </div>
               </div>
               <div className={styles.border__line}></div>
               <div className="nav__bottom flex flex-col py-4 px-10 items-center justify-between md:flex-row md:justify-between">
                    <ul className={`${styles.ul} mb-4 md:mb-0`}>
                        <li className={location.pathname === "/" ? styles.active : ""}><Link to="/" >Home</Link></li>
                        <li className={location.pathname === "/products" ? styles.active : ""}><Link to="/products" >Products</Link></li>
                        <li className={location.pathname === "/contact" ? styles.active : ""}><Link to="/contact" >Contact</Link></li>
                    </ul>
                    <div className="searchBar relative  mb-4 md:mb-0">
                       <SearchBarManipulator />
                    </div>
                    <a href="/cart">
                        <div className={`${styles.cart} mr-24 md:mr-0 cursor-pointer flex items-center justify-center`}>
                            <div className={styles.cart__basket}>
                               <ShoppingBasketIcon className="hover:text-pink-800 text-gray-700" />
                            </div>
                            <p>{totalItems ? totalItems : 0}</p>
                        </div>
                    </a>
               </div>
               <div className={styles.border__line}></div>
            </nav>
            </div>
        )
    } else if (location.pathname === "/products") {
        return (
             <div className='mb-20'>
        <nav className={styles.nav}>
           <div className="nav__top items-center justify-center flex flex-col md:flex-row md:justify-between py-4 px-10">
                <div className="left flex items-center justify-center">
                    <Link className="logo1" to="/"><img src={Logo1} alt="Logo1" /></Link>
                    <Link to="/"><img src={Logotxt} alt="Logo2" /></Link>
                </div>
                <div className="right">
                <span onClick={() => window.location.replace('https://geniushubglobal.com/')} className="text-gray-500 cursor-pointer">geniushub.com</span>
                </div>
           </div>
           <div className={styles.border__line}></div>
           <div className="nav__bottom flex py-4 flex-col px-10 items-center justify-between md:flex-row md:justify-between">
                <ul className={`${styles.ul} mb-4 md:mb-0`}>
                    <li className={location.pathname === "/" ? styles.active : ""}><Link to="/" >Home</Link></li>
                    <li className={location.pathname === "/products" ? styles.active : ""}><Link to="/products" >Products</Link></li>
                    <li className={location.pathname === "/contact" ? styles.active : ""}><Link to="/contact" >Contact</Link></li>
                </ul>
                <div className="searchBar relative  mb-4 md:mb-0">
                   <SearchBarManipulator /> 
                </div>
                <a href="/cart">
                    <div className={`${styles.cart} mr-24 md:mr-0 cursor-pointer flex items-center justify-center`}>
                        <div className={styles.cart__basket}>
                           <ShoppingBasketIcon className="hover:text-pink-800 text-gray-700" />
                        </div>
                        <p>{totalItems ? totalItems : 0}</p>
                    </div>
                </a>
           </div>
           <div className={styles.border__line}></div>
        </nav>
        </div>
        )
    } else if (location.pathname === "/cart") {
        return (
            <div className='mb-20'>
            <nav className={styles.nav}>
               <div className="nav__top items-center justify-center flex flex-col md:flex-row md:justify-between py-4 px-10">
                    <div className="left flex items-center justify-center">
                        <Link className="logo1" to="/"><img src={Logo1} alt="Logo1" /></Link>
                        <Link to="/"><img src={Logotxt} alt="Logo2" /></Link>
                    </div>
                    <div className="right">
                    <span onClick={() => window.location.replace('https://geniushubglobal.com/')} className="text-gray-500 cursor-pointer">geniushub.com</span>
                    </div>
               </div>
               <div className={styles.border__line}></div>
               <div style={{ marginTop: 5, marginBottom: 5 }} className="nav__bottom flex flex-col px-10 items-center justify-between md:flex-row md:justify-between">
                    <ul className={`${styles.ul} mb-4 md:mb-0`}>
                        <li className={location.pathname === "/" ? styles.active : ""}><Link to="/" >Home</Link></li>
                        <li className={location.pathname === "/products" ? styles.active : ""}><Link to="/products" >Products</Link></li>
                        <li className={location.pathname === "/contact" ? styles.active : ""}><Link to="/contact" >Contact</Link></li>
                    </ul>
                    <div className="searchBar relative  mb-4 md:mb-0">
                       <SearchBarManipulator /> 
                    </div>
    
                   {location.pathname === "/cart" ? (
                       <div className='w-40'></div>
                   ) : (
                       <a href="/cart">
                        <div className={`${styles.cart} mr-24 md:mr-0 cursor-pointer flex items-center justify-center`}>
                            <div className={styles.cart__basket}>
                               <ShoppingBasketIcon className="hover:text-pink-800 text-gray-700" />
                            </div>
                            <p>{totalItems ? totalItems : 0}</p>
                        </div>
                    </a>
                   )}
               </div>
               <div className={styles.border__line}></div>
            </nav>
            </div>
        )
    } else {
        return <div></div>
    }
};

export default Header;