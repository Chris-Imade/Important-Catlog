import React, { useEffect, useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
// import commerce from '../lib/commerce';
import styles from '../styles/productDetail.module.css';
import { Footer } from '../components/index';
import { collection, doc, onSnapshot, query } from 'firebase/firestore';
import { db } from '../firebase';
import { bindActionCreators } from "redux";
import { allActions } from "../Redux/ActionCreators/action";
import { useDispatch } from 'react-redux';
import Logo1 from '../public/logo1.png';
import Logotxt from '../public/logotxt.png';
import { SearchBarManipulator } from '../components/index';
import { useSelector } from 'react-redux';
import '../components/header.css';
import CancelIcon from '@material-ui/icons/Cancel';
import Inactive from "../public/inactive.png";
import Active from "../public/active.png";
// import ReactImageMagnify from 'react-image-magnify';



const ProductDetail = () => {
    const location = useLocation();
    // const [productImages, setProductImages] = useState([]);/
    const [displayModal, setDisplayModal] = useState(false);
    const [cartProduct, setCartProduct] = useState({});
    const [products, setProducts] = useState();
    const [cartProductRelated, setCartProductRelated] = useState({});
    const [index, setIndex] = useState(0);
    const dispatch = useDispatch();
    const cart = useSelector(state => state.reducer.cart);
    const productDetail = useSelector(state => state.reducer.productDetail);
    console.log("productDetail: " + JSON.stringify(productDetail.imageUrl));
    const [menuActive, setMenuActive] = useState(false);
    let totalItems = cart.line_items.length;

  // Dispatches OR SETTERS
  const { addToCart, setProductDetail } = bindActionCreators(allActions, dispatch);

    const { productId } = useParams();
    const { imageUrl } = productDetail;
    const { discountPrice } = productDetail;

    // console.log(productId);

    
    
    const fetchSingleProduct = async () => {
        try {
          onSnapshot(doc(db, "products", productId), (doc) => {
            setProductDetail(doc.data());
            // console.log(doc.data());
        });
        } catch (error) {
          console.log(error);
        }
      }

        const fetchProducts = () => {
                const q = query(collection(db, "products"));
                try {
                onSnapshot(q, (querySnapshot) => {
                    const items = [];
                    querySnapshot.forEach((doc) => {
                    items.push(doc.data());
                    });
                items.join(", ");
                setProducts(items);
            
                    });
                } catch (error) {
                    console.log(error);
                }
            };
            useEffect(() => {
                fetchSingleProduct();
                fetchProducts();
            }, [productId]);
    

   return (
    <div>
      <div className="hidden lg:block">
                <div className='mb-20'>
                    <nav className={styles.nav}>
                    <div className="nav__top items-center justify-center flex flex-col md:flex-row md:justify-between py-4 px-10">
                            <div className="left flex items-center justify-center">
                                <Link className="logo1" to="/"><img src={Logo1} alt="Logo1" /></Link>
                                <Link to="/"><img src={Logotxt} alt="Logo2" /></Link>
                            </div>
                            <div className="right">
                            <span onClick={() => window.open('https://geniushubglobal.com/', '_blank')} className="text-gray-500 cursor-pointer">geniushubglobal.com</span>
                            </div>
                    </div>
                    <div className={styles.border__line}></div>
                    <div className="nav__bottom flex flex-col py-4 lg:px-10 items-center justify-between md:flex-row md:justify-between">
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
                                <div className="nav__bottom flex flex-col py-4 lg:px-10 items-center justify-between md:justify-between">
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


            {/* you should wrap here over */}
        <div className='mx-8 flex flex-col justify-center items-center'>
        <div className={`${styles.productDetail} pt-40 md:pt-20 flex flex-col-reverse md:flex-row pb-20 items-center md:items-start`}>
         <div className={`${styles.productDetailLeft}`}>
            <div className='flex flex-col justify-between items-center md:items-start h-full'>
                <h4 className="text-4xl md:text-4xl text-gray-900 font-bold mb-4">{productDetail.itemName} <span>&rarr;</span></h4>
                <p className="font-light mb-4" style={{ lineHeight: "2rem" }}>{productDetail.itemDesc}</p>
                <p className="font-light text-xl"><span className='text-gray-800 font-semibold mb-4'>Colour: </span>{"Multicolor"}</p>
                <div className="flex justify-between">
                    <h3 className='font-semibold text-green-500 mr-4'><span className="text-gray-800 font-semibold">Price: </span> <span>{"₦" + (discountPrice ? discountPrice : productDetail.itemPrice)}</span></h3>
                    {discountPrice && (
                        <h3 className='font-semibold text-green-500'><span className="text-gray-800 font-semibold">Original Price: </span> <span  className='line-through'>{"₦" + productDetail.originalPrice}</span></h3>
                    )}
                </div>
                
                <button onClick={() => addToCart(productDetail.id)} className='border-gray-600 border-2 rounded-md py-2 mt-10 px-10' type='button'>Add to cart <ShoppingBasketIcon /></button>
            </div>
          </div>
            {!imageUrl ? (
                 <div className={`${styles.productDetailRight} flex ml-32`}>
                 <div className={`rounded-md bg-pink-100 w-56 h-90`}></div>
                 <div className={`${styles.rightRight} ml-12 h-full`}>
                     <ul className={`${""} h-full flex flex-col justify-between`}>
                         <li className={`bg-pink-100 mb-4 w-20 h-20 overflow-hidden rounded-md`}></li>
                         <li className={`bg-pink-100 mb-4 w-20 h-20 overflow-hidden rounded-md`}></li>
                         <li className={`bg-pink-100 mb-4 w-20 h-20 overflow-hidden rounded-md`}></li>
                         <li className={`bg-pink-100 mb-4 w-20 h-20 overflow-hidden rounded-md`}></li>
                     </ul>
                 </div>
                 </div>
            ) : (
                <div className={`${styles.productDetailRight} lg:ml-32 flex`}>
                <div className={`${styles.rightLeft}`}>
                    <img className="hover:cursor-zoom-in" onClick={() => setDisplayModal(true)} src={productDetail.imageUrl[index]} alt={productDetail.itemName} />
                </div>
                <div className={`${styles.rightRight} ml-12 h-full`}>
                    <ul className={`${""} h-full flex flex-col justify-between`}>
                        <li onMouseOver={() => setIndex(0)} className={`${styles.imageOptions} cursor-pointer mb-4 w-20 h-20 overflow-hidden rounded-md border-2 border-gray-600`}><img src={productDetail.imageUrl[0]} alt="" /></li>
                        <li onMouseOver={() => setIndex(1)} className={`${styles.imageOptions} cursor-pointer mb-4 w-20 h-20 overflow-hidden rounded-md border-2 border-gray-600`}><img src={productDetail.imageUrl[1]} alt="" /></li>
                        <li onMouseOver={() => setIndex(2)} className={`${styles.imageOptions} cursor-pointer mb-4 w-20 h-20 overflow-hidden rounded-md border-2 border-gray-600`}><img src={productDetail.imageUrl[2]} alt="" /></li>
                        <li onMouseOver={() => setIndex(3)} className={`${styles.imageOptions} cursor-pointer mb-4 w-20 h-20 overflow-hidden rounded-md border-2 border-gray-600`}><img src={productDetail.imageUrl[3]} alt="" /></li>
                    </ul>
                </div>
            </div>
            )}
     </div>
        <div className={`lg:w-[79%] flex flex-col margin-auto justify-center items-center`}>
            <h4 className='text-3xl text-gray-900 font-semibold text-center mb-20 lg:self-start'>You may also like</h4>
            {products ? (
                <div className={`${styles.relatedPosts} ml-40 md:ml-0 mb-20 flex flex-wrap lg:flex-nowrap flex-col md:flex-row`}>
                    <div className={`${styles.itemsCard} m-3 flex flex-col justify-between items-center`}>
                        <Link to={`/product-details/${products[1].id}`}>
                        <div className={`${styles.imageTop} flex justify-center items-between`}>
                            <img className={styles.productImg} src={products[1].imageUrl[0]} alt="Item" width={221} height={326} />
                        </div>
                        </Link>
                        <div className={`${styles.bottomText} ml-4 mr-4`}>
                            <Link to={`/product-details/${products[1].id}`}>
                            <h4 className={`text-slate-900 font-light`}>{products[1].itemName}</h4>
                            </Link>
                            <h3>₦{products[1].itemPrice}</h3>
                            <div className={`${styles.addToCart} flex justify-between items-center`}>
                                <button onClick={() => {
                                    addToCart(products[0].id);
                                }} className="mt-4 py-2 px-4 bg-gray-800 flex justify-center items-center text-white rounded-md mb-6 mr-2 w-[145px]">
                                    Add to cart
                                    <ShoppingBasketIcon className="ml-2 text-white" />
                                </button>
                                <div className="">
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.89126 17.9946C3.85843 18.1352 3.85784 18.2813 3.88954 18.4222C3.92123 18.563 3.98439 18.6948 4.07429 18.8077C4.16418 18.9207 4.27847 19.0118 4.40859 19.0743C4.53871 19.1368 4.68129 19.169 4.82564 19.1686C5.01494 19.1686 5.20001 19.1126 5.35751 19.0076L10.5756 15.5288L15.7938 19.0076C15.957 19.1159 16.1495 19.1717 16.3454 19.1674C16.5413 19.1631 16.7312 19.099 16.8895 18.9835C17.0478 18.8681 17.167 18.7069 17.231 18.5217C17.295 18.3366 17.3008 18.1362 17.2476 17.9476L15.4948 11.8143L19.8418 7.90239C19.981 7.77703 20.0804 7.6136 20.1277 7.43233C20.1751 7.25107 20.1682 7.0599 20.1081 6.88247C20.0479 6.70505 19.9371 6.54915 19.7892 6.43405C19.6414 6.31896 19.4631 6.24971 19.2763 6.23489L13.8129 5.7998L11.4487 0.566344C11.3734 0.397785 11.2509 0.254619 11.0961 0.154124C10.9412 0.0536295 10.7606 0.000101467 10.5759 1.44113e-07C10.3913 -0.000101179 10.2106 0.0532285 10.0557 0.153553C9.9007 0.253878 9.77807 0.396909 9.7026 0.565386L7.33839 5.7998L1.87493 6.23393C1.69137 6.24847 1.51588 6.31559 1.36946 6.42725C1.22304 6.53892 1.1119 6.6904 1.04932 6.86358C0.98674 7.03676 0.975378 7.2243 1.01659 7.40377C1.05781 7.58324 1.14985 7.74703 1.28172 7.87555L5.32014 11.8114L3.89126 17.9946ZM10.5756 3.28801L12.5326 7.62064L13.0961 7.66568L16.9035 7.96755L13.7688 10.7889L13.7678 10.7908L13.3241 11.1895L13.488 11.7616V11.7645L14.6888 15.9668L10.5756 13.225V3.28801Z" fill="#FBC900"/>
                                </svg>
                                <p>4.5</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.itemsCard} m-3 flex flex-col justify-between items-center`}>
                        <Link to={`/product-details/${products[2].id}`}>
                        <div className={`${styles.imageTop} flex justify-center items-between`}>
                            <img className={styles.productImg} src={products[2].imageUrl[0]} alt="Item" width={221} height={326} />
                        </div>
                        </Link>
                        <div className={`${styles.bottomText} ml-4 mr-4`}>
                            <Link to={`/product-details/${products[2].id}`}>
                            <h4 className={`text-slate-900 font-light`}>{products[2].itemName}</h4>
                            </Link>
                            <h3>₦{products[2].itemPrice}</h3>
                            <div className={`${styles.addToCart} flex justify-between items-center`}>
                                <button onClick={() => {
                                    addToCart(products[2].id);
                                }} className="mt-4 py-2 px-4 bg-gray-800 flex justify-center items-center text-white rounded-md mb-6 mr-2 w-[145px]">
                                    Add to cart
                                    <ShoppingBasketIcon className="ml-2 text-white" />
                                </button>
                                <div className="">
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.89126 17.9946C3.85843 18.1352 3.85784 18.2813 3.88954 18.4222C3.92123 18.563 3.98439 18.6948 4.07429 18.8077C4.16418 18.9207 4.27847 19.0118 4.40859 19.0743C4.53871 19.1368 4.68129 19.169 4.82564 19.1686C5.01494 19.1686 5.20001 19.1126 5.35751 19.0076L10.5756 15.5288L15.7938 19.0076C15.957 19.1159 16.1495 19.1717 16.3454 19.1674C16.5413 19.1631 16.7312 19.099 16.8895 18.9835C17.0478 18.8681 17.167 18.7069 17.231 18.5217C17.295 18.3366 17.3008 18.1362 17.2476 17.9476L15.4948 11.8143L19.8418 7.90239C19.981 7.77703 20.0804 7.6136 20.1277 7.43233C20.1751 7.25107 20.1682 7.0599 20.1081 6.88247C20.0479 6.70505 19.9371 6.54915 19.7892 6.43405C19.6414 6.31896 19.4631 6.24971 19.2763 6.23489L13.8129 5.7998L11.4487 0.566344C11.3734 0.397785 11.2509 0.254619 11.0961 0.154124C10.9412 0.0536295 10.7606 0.000101467 10.5759 1.44113e-07C10.3913 -0.000101179 10.2106 0.0532285 10.0557 0.153553C9.9007 0.253878 9.77807 0.396909 9.7026 0.565386L7.33839 5.7998L1.87493 6.23393C1.69137 6.24847 1.51588 6.31559 1.36946 6.42725C1.22304 6.53892 1.1119 6.6904 1.04932 6.86358C0.98674 7.03676 0.975378 7.2243 1.01659 7.40377C1.05781 7.58324 1.14985 7.74703 1.28172 7.87555L5.32014 11.8114L3.89126 17.9946ZM10.5756 3.28801L12.5326 7.62064L13.0961 7.66568L16.9035 7.96755L13.7688 10.7889L13.7678 10.7908L13.3241 11.1895L13.488 11.7616V11.7645L14.6888 15.9668L10.5756 13.225V3.28801Z" fill="#FBC900"/>
                                </svg>
                                <p>4.5</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.itemsCard} m-3 flex flex-col justify-between items-center`}>
                        <Link to={`/product-details/${products[3].id}`}>
                        <div className={`${styles.imageTop} flex justify-center items-between`}>
                            <img className={styles.productImg} src={products[3].imageUrl[0]} alt="Item" width={221} height={326} />
                        </div>
                        </Link>
                        <div className={`${styles.bottomText} ml-4 mr-4`}>
                            <Link to={`/product-details/${products[3].id}`}>
                            <h4 className={`text-slate-900 font-light`}>{products[3].itemName}</h4>
                            </Link>
                            <h3>₦{products[3].itemPrice}</h3>
                            <div className={`${styles.addToCart} flex justify-between items-center`}>
                                <button onClick={() => {
                                    addToCart(products[3].id);
                                }} className="mt-4 py-2 px-4 bg-gray-800 flex justify-center items-center text-white rounded-md mb-6 mr-2 w-[145px]">
                                    Add to cart
                                    <ShoppingBasketIcon className="ml-2 text-white" />
                                </button>
                                <div className="">
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.89126 17.9946C3.85843 18.1352 3.85784 18.2813 3.88954 18.4222C3.92123 18.563 3.98439 18.6948 4.07429 18.8077C4.16418 18.9207 4.27847 19.0118 4.40859 19.0743C4.53871 19.1368 4.68129 19.169 4.82564 19.1686C5.01494 19.1686 5.20001 19.1126 5.35751 19.0076L10.5756 15.5288L15.7938 19.0076C15.957 19.1159 16.1495 19.1717 16.3454 19.1674C16.5413 19.1631 16.7312 19.099 16.8895 18.9835C17.0478 18.8681 17.167 18.7069 17.231 18.5217C17.295 18.3366 17.3008 18.1362 17.2476 17.9476L15.4948 11.8143L19.8418 7.90239C19.981 7.77703 20.0804 7.6136 20.1277 7.43233C20.1751 7.25107 20.1682 7.0599 20.1081 6.88247C20.0479 6.70505 19.9371 6.54915 19.7892 6.43405C19.6414 6.31896 19.4631 6.24971 19.2763 6.23489L13.8129 5.7998L11.4487 0.566344C11.3734 0.397785 11.2509 0.254619 11.0961 0.154124C10.9412 0.0536295 10.7606 0.000101467 10.5759 1.44113e-07C10.3913 -0.000101179 10.2106 0.0532285 10.0557 0.153553C9.9007 0.253878 9.77807 0.396909 9.7026 0.565386L7.33839 5.7998L1.87493 6.23393C1.69137 6.24847 1.51588 6.31559 1.36946 6.42725C1.22304 6.53892 1.1119 6.6904 1.04932 6.86358C0.98674 7.03676 0.975378 7.2243 1.01659 7.40377C1.05781 7.58324 1.14985 7.74703 1.28172 7.87555L5.32014 11.8114L3.89126 17.9946ZM10.5756 3.28801L12.5326 7.62064L13.0961 7.66568L16.9035 7.96755L13.7688 10.7889L13.7678 10.7908L13.3241 11.1895L13.488 11.7616V11.7645L14.6888 15.9668L10.5756 13.225V3.28801Z" fill="#FBC900"/>
                                </svg>
                                <p>4.5</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.itemsCard} m-3 flex flex-col justify-between items-center`}>
                        <Link to={`/product-details/${products[0].id}`}>
                        <div className={`${styles.imageTop} flex justify-center items-between`}>
                            <img className={styles.productImg} src={products[0].imageUrl[0]} alt="Item" width={221} height={326} />
                        </div>
                        </Link>
                        <div className={`${styles.bottomText} ml-4 mr-4`}>
                            <Link to={`/product-details/${products[0].id}`}>
                            <h4 className={`text-slate-900 font-light`}>{products[0].itemName}</h4>
                            </Link>
                            <h3>₦{products[0].itemPrice}</h3>
                            <div className={`${styles.addToCart} flex justify-between items-center`}>
                                <button onClick={() => {
                                    addToCart(products[0].id);
                                }} className="mt-4 py-2 px-4 bg-gray-800 flex justify-center items-center text-white rounded-md mb-6 mr-2 w-[145px]">
                                    Add to cart
                                    <ShoppingBasketIcon className="ml-2 text-white" />
                                </button>
                                <div className="">
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.89126 17.9946C3.85843 18.1352 3.85784 18.2813 3.88954 18.4222C3.92123 18.563 3.98439 18.6948 4.07429 18.8077C4.16418 18.9207 4.27847 19.0118 4.40859 19.0743C4.53871 19.1368 4.68129 19.169 4.82564 19.1686C5.01494 19.1686 5.20001 19.1126 5.35751 19.0076L10.5756 15.5288L15.7938 19.0076C15.957 19.1159 16.1495 19.1717 16.3454 19.1674C16.5413 19.1631 16.7312 19.099 16.8895 18.9835C17.0478 18.8681 17.167 18.7069 17.231 18.5217C17.295 18.3366 17.3008 18.1362 17.2476 17.9476L15.4948 11.8143L19.8418 7.90239C19.981 7.77703 20.0804 7.6136 20.1277 7.43233C20.1751 7.25107 20.1682 7.0599 20.1081 6.88247C20.0479 6.70505 19.9371 6.54915 19.7892 6.43405C19.6414 6.31896 19.4631 6.24971 19.2763 6.23489L13.8129 5.7998L11.4487 0.566344C11.3734 0.397785 11.2509 0.254619 11.0961 0.154124C10.9412 0.0536295 10.7606 0.000101467 10.5759 1.44113e-07C10.3913 -0.000101179 10.2106 0.0532285 10.0557 0.153553C9.9007 0.253878 9.77807 0.396909 9.7026 0.565386L7.33839 5.7998L1.87493 6.23393C1.69137 6.24847 1.51588 6.31559 1.36946 6.42725C1.22304 6.53892 1.1119 6.6904 1.04932 6.86358C0.98674 7.03676 0.975378 7.2243 1.01659 7.40377C1.05781 7.58324 1.14985 7.74703 1.28172 7.87555L5.32014 11.8114L3.89126 17.9946ZM10.5756 3.28801L12.5326 7.62064L13.0961 7.66568L16.9035 7.96755L13.7688 10.7889L13.7678 10.7908L13.3241 11.1895L13.488 11.7616V11.7645L14.6888 15.9668L10.5756 13.225V3.28801Z" fill="#FBC900"/>
                                </svg>
                                <p>4.5</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : ( <div></div> )}
            </div>
            </div>

            <div>
                {imageUrl && (
                    <div>
                            {displayModal && (
                            <div className={`${styles.modalOverlay}`}>
                            <div className={`${styles.modalContent}`}>
                            <div className={`w-full flex justify-between mt-8`}>
                                <button className="hover:cursor-pointer" onClick={() => setDisplayModal(false)} type="button">
                                <span className={`${styles.cancel}`}><CancelIcon style={{ color: 'white' }} /></span>
                                </button>
                            </div>
                                {/* Product detail images  */}
                            <div className={`${styles.productDetailRight} w-full h-full flex flex-col items-center justify-center`}>
                                <div className={`${styles.rightLeft}`}>
                                    <img className="hover:cursor-pointer" onClick={() => setDisplayModal(true)} src={productDetail.imageUrl[index]} alt={productDetail.itemName} />
                                </div>
                                <div className={`${styles.rightRight} mt-12 w-full`}>
                                    <ul className={`${""} h-full flex justify-around`}>
                                        <li onMouseOver={() => setIndex(0)} className={`${styles.imageOptions} cursor-pointer mb-4 w-20 h-20 overflow-hidden rounded-md border-2 border-gray-600`}><img src={productDetail.imageUrl[0]} alt="" /></li>
                                        <li onMouseOver={() => setIndex(1)} className={`${styles.imageOptions} cursor-pointer mb-4 w-20 h-20 overflow-hidden rounded-md border-2 border-gray-600`}><img src={productDetail.imageUrl[1]} alt="" /></li>
                                        <li onMouseOver={() => setIndex(2)} className={`${styles.imageOptions} cursor-pointer mb-4 w-20 h-20 overflow-hidden rounded-md border-2 border-gray-600`}><img src={productDetail.imageUrl[2]} alt="" /></li>
                                        <li onMouseOver={() => setIndex(3)} className={`${styles.imageOptions} cursor-pointer mb-4 w-20 h-20 overflow-hidden rounded-md border-2 border-gray-600`}><img src={productDetail.imageUrl[3]} alt="" /></li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                        </div>
                        )}
                    </div>
                )}
            </div>

     <Footer />
           
    </div>
  )
}

export default ProductDetail;