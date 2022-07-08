import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import Logo1 from '../public/logo1.png';
import Logotxt from '../public/logotxt.png';
import styles from './header.module.css';
import './header.css';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { SearchBarManipulator } from './index';
import { useSelector } from 'react-redux';
import Inactive from "../public/inactive.png";
import Active from "../public/active.png";


const Header = () => {

    const cart = useSelector(state => state.reducer.cart);
    const [menuActive, setMenuActive] = useState(false);

    let totalItems = cart.line_items.length;
    const location = useLocation();

    if(location.pathname === "/") {
        return (
            <div>
                <div className="hidden lg:block">
                <div className='mb-20'>
                    <nav className={styles.nav}>
                    <div className="nav__top items-center justify-center flex flex-col md:flex-row md:justify-between py-1 px-10">
                            <div className="left flex items-center justify-center">
                                <Link className="logo1" to="/"><img src={Logo1} alt="Logo1" /></Link>
                                <Link to="/"><img src={Logotxt} alt="Logo2" /></Link>
                            </div>
                            <div className="right">
                            <span onClick={() => window.open('https://geniushubglobal.com/', '_blank')} className="text-gray-500 cursor-pointer">geniushubglobal.com</span>
                            </div>
                    </div>
                    <div className={styles.border__line}></div>
                    <div className="nav__bottom flex flex-col py-1 lg:px-10 items-center justify-between md:flex-row md:justify-between">
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
                </div>
                {/* Responsive Menu */}
                <div className={`block lg:hidden fixed top-0 bg-white z-[1000] w-full`}>
                    <div className={`shadow-md px-4 ${menuActive && "rounded-b-[20px]"}`}>
                        <div className="h-[5rem] flex justify-between items-center">
                            <div className="left flex items-center justify-center">
                                <Link className="logo1" to="/"><img src={Logo1} alt="Logo1" /></Link>
                                <Link to="/"><img src={Logotxt} alt="Logo2" /></Link>
                            </div>
                            <div>
                                {menuActive ? (
                                    <img onClick={() => setMenuActive(false)} className="hover:cursor-pointer" src={Active} alt="active menu" />
                                ) : (
                                    <img onClick={() => setMenuActive(true)} className="hover:cursor-pointer" src={Inactive} alt="inactive menu" /> 
                                )}
                            </div>
                        </div>
                        {menuActive && (
                            <div className="">
                                <div className="nav__bottom flex flex-col py-1 lg:px-10 items-center justify-between md:justify-between">
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
                            </div>
                        )}
                    </div>
                </div>
            </div>
            
        )
    } else if (location.pathname === "/products") {
        return (
             <div>
                <div className="hidden lg:block">
                <div className='mb-20'>
                <nav className={styles.nav}>
                    <div className="nav__top items-center justify-center flex flex-col md:flex-row md:justify-between py-1 px-10">
                            <div className="left flex items-center justify-center">
                                <Link className="logo1" to="/"><img src={Logo1} alt="Logo1" /></Link>
                                <Link to="/"><img src={Logotxt} alt="Logo2" /></Link>
                            </div>
                            <div className="right">
                            <span onClick={() => window.open('https://geniushubglobal.com/', '_blank')} className="text-gray-500 cursor-pointer">geniushubglobal.com</span>
                            </div>
                    </div>
                    <div className={styles.border__line}></div>
                    <div className="nav__bottom flex py-1 flex-col lg:px-10 items-center justify-between md:flex-row md:justify-between">
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
             </div>

              {/* Responsive Menu */}
              <div className={`block lg:hidden fixed top-0 bg-white z-[1000] w-full`}>
                    <div className={`shadow-md px-4 ${menuActive && "rounded-b-[20px]"}`}>
                        <div className="h-[5rem] flex justify-between items-center">
                            <div className="left flex items-center justify-center">
                                <Link className="logo1" to="/"><img src={Logo1} alt="Logo1" /></Link>
                                <Link to="/"><img src={Logotxt} alt="Logo2" /></Link>
                            </div>
                            <div>
                                {menuActive ? (
                                    <img onClick={() => setMenuActive(false)} className="hover:cursor-pointer" src={Active} alt="active menu" />
                                ) : (
                                    <img onClick={() => setMenuActive(true)} className="hover:cursor-pointer" src={Inactive} alt="inactive menu" /> 
                                )}
                            </div>
                        </div>
                        {menuActive && (
                            <div className="">
                                <div className="nav__bottom flex flex-col py-1 lg:px-10 items-center justify-between md:justify-between">
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
                            </div>
                        )}
                    </div>
                </div>
             </div>
        )
    } else if (location.pathname === "/cart") {
        return (
            <div>
                <div className="hidden lg:block">
                    <div className='mb-20'>
                        <nav className={styles.nav}>
                        <div className="nav__top items-center justify-center flex flex-col md:flex-row md:justify-between py-1 px-10">
                                <div className="left flex items-center justify-center">
                                    <Link className="logo1" to="/"><img src={Logo1} alt="Logo1" /></Link>
                                    <Link to="/"><img src={Logotxt} alt="Logo2" /></Link>
                                </div>
                                <div className="right">
                                <span onClick={() => window.open('https://geniushubglobal.com/', '_blank')} className="text-gray-500 cursor-pointer">geniushubglobal.com</span>
                                </div>
                        </div>
                        <div className={styles.border__line}></div>
                        <div style={{ marginTop: 5, marginBottom: 5 }} className="nav__bottom flex flex-col lg:px-10 items-center justify-between md:flex-row md:justify-between">
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
                </div>


                {/* Responsive Menu */}
              <div className={`block lg:hidden fixed top-0 bg-white z-[1000] w-full`}>
                    <div className={`shadow-md px-4 ${menuActive && "rounded-b-[20px]"}`}>
                        <div className="h-[5rem] flex justify-between items-center">
                            <div className="left flex items-center justify-center">
                                <Link className="logo1" to="/"><img src={Logo1} alt="Logo1" /></Link>
                                <Link to="/"><img src={Logotxt} alt="Logo2" /></Link>
                            </div>
                            <div>
                                {menuActive ? (
                                    <img onClick={() => setMenuActive(false)} className="hover:cursor-pointer" src={Active} alt="active menu" />
                                ) : (
                                    <img onClick={() => setMenuActive(true)} className="hover:cursor-pointer" src={Inactive} alt="inactive menu" /> 
                                )}
                            </div>
                        </div>
                        {menuActive && (
                            <div className="">
                                <div className="nav__bottom flex flex-col py-1 lg:px-10 items-center justify-between md:justify-between">
                                    <ul className={`${styles.ul} mb-4 md:mb-0`}>
                                        <li className={location.pathname === "/" ? styles.active : ""}><Link to="/" >Home</Link></li>
                                        <li className={location.pathname === "/products" ? styles.active : ""}><Link to="/products" >Products</Link></li>
                                        <li className={location.pathname === "/contact" ? styles.active : ""}><Link to="/contact" >Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    } else {
        return <div></div>
    }
};

export default Header;