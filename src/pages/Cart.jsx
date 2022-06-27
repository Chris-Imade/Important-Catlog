import React, { useEffect, useState } from 'react';
import styles from '../styles/cart.module.css';
import { Header, CartItem, Footer } from '../components/index';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
 import { store } from "../Redux/store";
import { allActions } from '../Redux/ActionCreators/action';
import { bindActionCreators } from "redux";

//  onUpdateCartQty, onRemoveFromCart
const Cart = ({ onUpdateCartQty, onRemoveFromCart }) => {
    // const cart = useSelector(state => state.reducer.cart);
    const cart = store.getState().reducer.cart;
    const [content, setContent] = useState();
    
    const overallPrice = store.getState().reducer.overallPrice;
    const dispatch = useDispatch();
    const { setTotalPrice } = bindActionCreators(allActions, dispatch);
 
    useEffect(() => {
      const varaiable = (() => {
        if(cart) {
          let sum = 0;
          for (let i = 0; i < cart.line_items.length; i++) {
              sum += cart.line_items[i].itemPrice;
              console.log(Number(sum));
          }
          setTotalPrice(Number(sum));
          let value = " ₦ " + overallPrice;
          return value;
        } else {
          return "No items yet";
        }
      })
      setContent(varaiable);
      
    }, [cart, overallPrice, setTotalPrice])
   
  const amount = cart.line_items.length;
  // console.log("New Cart: " + cart);

  // const CheckWhichToRender = () => {
  //   return 
  // }
  
  const clearLocalStoarage = () => {
    window.localStorage.clear();
    window.location.reload();
  }


      return (
        <div className="mt-56">
            <Header />
           <div className={`${styles.cartContainer} mx-40`}>
            <h3 className={`lg:text-[3rem] lg:font-[600] w-[7rem] lg:w-[23rem] text-center ml-[-2rem] lg:ml-0`}>{`Cart[${cart === undefined ? "No" : amount } item(s)]`}</h3>
             <>
             { !cart.line_items ? (
                <div className='flex flex-col justify-start items-center mt-6 text-4xl'>
                  <div className={`${styles.cartLoading} mb-6 flex rounded-md`}>
                    <div className={`w-40 h-36 m-2 rounded-md bg-gray-50`}></div>
                    <div>
                      <div className={`${styles.cartLoadingTxt} bg-gray-50 rounded-md`}></div>
                      <div className={`${styles.cartLoadingTxt2} bg-gray-50 rounded-md`}></div>
                    </div>
                  </div>
                  <div className={`${styles.cartLoading} mb-6 flex rounded-md`}>
                    <div className={`w-40 h-36 m-2 rounded-md bg-gray-50`}></div>
                    <div>
                      <div className={`${styles.cartLoadingTxt} bg-gray-50 rounded-md`}></div>
                      <div className={`${styles.cartLoadingTxt2} bg-gray-50 rounded-md`}></div>
                    </div>
                  </div>
                  <div className={`${styles.cartLoading} mb-6 flex rounded-md`}>
                    <div className={`w-40 h-36 m-2 rounded-md bg-gray-50`}></div>
                    <div>
                      <div className={`${styles.cartLoadingTxt} bg-gray-50 rounded-md`}></div>
                      <div className={`${styles.cartLoadingTxt2} bg-gray-50 rounded-md`}></div>
                    </div>
                  </div>
                 <Link to="/products"><h4 className='text-gray-500'>Your cart is empty <span className='text-orange-600 border-b-2 border-orange-600'>keep shopping</span> </h4></Link>
                </div>
              ) : (
                <div className={`${styles.cartContent} flex md:flex-col justify-center items-start flex-wrap`}>
                {cart.line_items.map((item) => (
                  <div key={item.id}>
                    <CartItem id={item.id} item={item} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart}  />
                  </div>
                ))}
                </div>
              )}
             </>
            </div>
            <div>
              <div className='flex flex-col justify-center items-center mt-20 mb-40'>
                <div className='flex flex-col items-center justify-center text-xl text-gray-600'>
                  <h4 className='text-3xl text-gray-900 font-semibold'>Total price: <span className='text-orange-600'>{content}</span></h4>
                  <p>Delivery fee not included</p>
                </div>
                <div className='flex flex-col justify-center items-center mt-20'>
                  <div className='flex'>
                    <Link to="/products"><button type='button' className='mx-3 lg:mx-0 lg:mr-4 text-gray-900 font-semibold shadow-xl py-2 lg:py-4 px-4 lg:px-6 rounded-md'>Continue Shopping</button></Link>
                    <Link to="/checkout"><button type='button' style={{ backgroundColor: "#52BA00"}} className='mx-3 lg:mx-0 lg:ml-4 text-white font-semibold shadow-xl py-2 lg:py-4 px-4 lg:px-6 rounded-md'>Proceed to check out</button></Link>
                  </div>
                  <button onClick={() => clearLocalStoarage()} type="button" className='bg-orange-600 py-4 shadow-xl font-semibold rounded-md text-white mt-6 w-[90%] lg:w-[100%]'>Clear All</button>
                </div>
              </div>
            </div>
            <Footer />
        </div>
    )
}
export default Cart;