import React, { useEffect, useState } from 'react';
import styles from './checkout.module.css';
import { Link }  from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from "redux";
import { allActions } from '../../../Redux/ActionCreators/action';
import DoneIcon from '@material-ui/icons/Done';
import CancelIcon from '@material-ui/icons/Cancel';
import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../../../firebase';

const Checkout = () => {
    const [checkoutDetailsState, setCheckoutDetailsState] = useState({
    customerFirstname: "",
    customerLastname: "",
    customerCountry: "",
    customerState: "",
    customerStreet: "",
    customerPhone: "",
    customerZip: ""
  })
  const [newAddress, setNewAddress] = useState(false);
  const [count, setCount] = useState(0);
  const [content, setContent] = useState();
  const [displayModal, setDisplayModal] = useState(false);
  const [proceed, setProceed] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const cart = useSelector((state) => state.reducer.cart);
  const overallPrice = useSelector((state) => state.reducer.overallPrice);
  const overallCount = useSelector((state) => state.reducer.overallCount);
  const checkoutDetailsRedux = useSelector((state) => state.reducer.checkoutDetails);
  const dispatch = useDispatch();
  const { setTotalPrice, setTotalCount, setCheckoutDetails } = bindActionCreators(allActions, dispatch);

  useEffect(() => {
    // This is for calculating the total price of items
    const varaiable = (() => {
      if(cart) {
        let sum = 0;
        for (let i = 0; i < cart.line_items.length; i++) {
            sum += cart.line_items[i].itemPrice;
        }
        setTotalPrice(Number(sum));
        let value = " ₦ " + overallPrice;
        return value;
      } else {
        return "No items yet";
      }
    })
    setContent(varaiable);
    

    // This is for calculating the total count of all items
    const getTotalCount = (() => {
      if(cart) {
        let sum = 0;
        for(let i = 0; i < cart.line_items.length; i++) {
          sum += cart.line_items[i].count;
        }
        setTotalCount(Number(sum));
        let value = overallCount + " total items";
        return value;
      } else {
        return "0 items in cart";
      }
    })
    setCount(getTotalCount);
  }, [cart, overallPrice, setTotalPrice, setTotalCount, overallCount])

  const prepareOrder = (e) => {
    e.preventDefault();
    setCheckoutDetails(checkoutDetailsState);
    
    setCheckoutDetailsState({
      customerFirstname: "",
      customerLastname: "",
      customerCountry: "",
      customerState: "",
      customerStreet: "",
      customerPhone: "",
      customerZip: ""
    });
    if (checkoutDetailsRedux) {
      setDisplayModal(true);
    }
   
  }

  const handleSubmitOrder = async() => {
    const ordersRef = collection(db, 'orders');
    try {
        await setDoc(doc(ordersRef, checkoutDetailsRedux.customerFirstname), checkoutDetailsRedux);
        console.log("Product successfully addded to the database");
        // console.log(url);
        setOrderSuccess(true);
    } catch (error) {
        console.log(error);
    }
  } 

  if(orderSuccess) {
    setTimeout(() => {
      setOrderSuccess(false);
    }, 400)
  }

  return (
    <>
      {!proceed ? (
        <div className={`${styles.omega} mx-8`}>
        <div className={`${styles.navOveral} flex justify-between pt-10 mb-14`}>
          <div className="previous__arr">
            <h4><Link to="/cart">&larr; Back to Cart</Link></h4>
          </div>
          <div className="page__title">
            <h2 className="text-2xl font-bold">Checkout</h2>
          </div>
            <div className={`${styles.spacing} w-6`}></div>
        </div>
        <div className={`${styles.mainBodyContainter} flex flex-col md:flex-row md:justify-center`}>
          <div className={`${styles.mainBodyLeft} md:mr-8`}>
            <span className='font-light text-gray-600'>Shipping Address</span>
            <form onSubmit={(e) => prepareOrder(e)} className={`${styles.formBorders} md:mr-8 md:border-2 md:border-gray-400 md:rounded-lg md:p-12 mb-6 mt-6`}>
              <input required style={{ marginRight: "10px" }} id='newAddress' type="radio" />
              <label htmlFor="newAddress">New Address</label>
              <div className="mt-6 flex flex-col md:flex-row">
              <div className='flex flex-col w-full mr-4'>
                  <label htmlFor="lastname">Firstname</label>
                  <input required value={checkoutDetailsState.customerFirstname} onChange={(e) => setCheckoutDetailsState({ ...checkoutDetailsState, customerFirstname: e.target.value })} type="text" id='firstname' className={`${styles.lastname} border-2 border-gray-400 my-2 outline-none outline-0 rounded-md pl-6 py-2`} />
                </div>
                <div className='flex flex-col w-full'>
                  <label htmlFor="lastname">Lastname</label>
                  <input required value={checkoutDetailsState.customerLastname} onChange={(e) => setCheckoutDetailsState({ ...checkoutDetailsState, customerLastname: e.target.value })} type="text" id='lastname' className={`${styles.lastname} border-2 border-gray-400 my-2 outline-none outline-0 rounded-md pl-6 py-2`} />
                </div>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className='flex flex-col w-full mr-4'>
                  <label htmlFor="country">Country</label>
                  <input required value={checkoutDetailsState.customerCountry} onChange={(e) => setCheckoutDetailsState({ ...checkoutDetailsState, customerCountry: e.target.value })} type="text" id='country' className={`${styles.country} border-2 border-gray-400 my-2 outline-none outline-0 rounded-md pl-6 py-2`} />
                </div>
                <div className='flex flex-col w-full'>
                  <label htmlFor="state">State</label>
                  <input required value={checkoutDetailsState.customerState} onChange={(e) => setCheckoutDetailsState({ ...checkoutDetailsState, customerState: e.target.value })} type="text" id='state' className={`${styles.state} border-2 border-gray-400 my-2 outline-none outline-0 rounded-md pl-6 py-2`} />
                </div>
              </div>
              <div className='flex flex-col mt-4'>
                <label htmlFor="street-address ">Street Address</label>
                <input required value={checkoutDetailsState.customerStreet} onChange={(e) => setCheckoutDetailsState({ ...checkoutDetailsState, customerStreet: e.target.value })} type="text" id='street-address' className={`${styles.streetAddress} border-2 border-gray-400 my-2 outline-none outline-0 rounded-md pl-6 py-2`} />
              </div>
              <div className="flex flex-col md:flex-row">
                <div className='flex flex-col w-full mr-4'>
                  <label htmlFor="phone">Phone</label>
                  <input required value={checkoutDetailsState.customerPhone} onChange={(e) => setCheckoutDetailsState({ ...checkoutDetailsState, customerPhone: e.target.value })} type="text" id='phone' className={`${styles.phone} border-2 border-gray-400 my-2 outline-none outline-0 rounded-md pl-6 py-2`} />
                </div>
                <div className='flex flex-col w-full'>
                  <label htmlFor="zipcode">Zipcode</label>
                  <input required value={checkoutDetailsState.customerZip} onChange={(e) => setCheckoutDetailsState({ ...checkoutDetailsState, customerZip: e.target.value })} type="text" id='zipcode' className={`${styles.zipcode} border-2 border-gray-400 my-2 outline-none outline-0 rounded-md pl-6 py-2`} />
                </div>
              </div>
              <div className="btnSumitDetails flex justify-around mt-8">
                <Link to="/cart">
                  <button type="button" className={`${styles.btnCancel} mr-8 sm:mr-0 text-gray-600 shadow-md py-2 rounded-md px-8`}>Cancel</button>
                </Link>
                <button type='submit' className={`${styles.btnSubmit} text-white py-2 rounded-md px-8`}>Submit</button>
                <div className="w-80"></div>
              </div>
            </form>
          </div>
          <div className={`${styles.mainBodyRight} mt-16 md:w-96`}>
           <div className={`${styles.rightInnerContainer}`} style={{  backgroundColor: "#FCFCFC", padding: "3rem" }}>
            <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <span className="text-sm" style={{ fontSize: "25px", fontWeight: "normal", marginBottom: "25px"}}>Order Summary</span>
            </div>
              <div className={styles.gridContainer}>
                <div className={styles.property1}>Item({cart.line_items.length})</div>
                  <div className={styles.spacing1}></div>
                <div className={styles.value1}>{content}</div>
                <div className={styles.property2}>Total Items:</div>
                  <div className={styles.spacing2}></div>
                <div className={styles.value2}>{count}</div>
                <div className={styles.property3}>Order Total:(2)</div>
                  <div className={styles.spacing3}></div>
                <div className={styles.value3}>{content}</div>
              </div>
              <hr className='my-4' />
              <div className={`${styles.belowTable} flex justify-center items-center flex-col`}>
                <span className="text-center" styles={{ maxWidth: "100%" }}><p className='text-sm font-extralight'>By placing your order, you agree to our company Privacy Policy & Conditions of Use. </p></span>
                <div className={`${styles.hr} my-4`}></div>
                <button disabled className={`${styles.placeOrderbtn} mb-8`}>Place Order</button>
              </div>
           </div>
          </div>
        </div>
      </div>
      ) : (
        <div className={`mx-8`}>
        <div className={`${styles.navOveral} flex justify-between pt-10 mb-14`}>
          <div className="previous__arr">
            <h4><Link to="/cart">&larr; Back to Cart</Link></h4>
          </div>
          <div className="page__title">
            <h2 className="text-2xl font-bold">Checkout</h2>
          </div>
            <div className={`${styles.spacing} ${proceed ? "w-28" : "w-6"}`}></div>
        </div>
        <div className={`flex justify-center items-center`}>
          <div className={`${styles.mainBodyRight} mt-16 md:w-96`}>
           <div className={`${styles.rightInnerContainer}`} style={{  backgroundColor: "#FCFCFC", padding: "3rem" }}>
            <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <span className="text-sm" style={{ fontSize: "25px", fontWeight: "normal", marginBottom: "25px"}}>Order Summary</span>
            </div>
              <div className={styles.gridContainer}>
                <div className={styles.property1}>Item({cart.line_items.length})</div>
                  <div className={styles.spacing1}></div>
                <div className={styles.value1}>{content}</div>
                <div className={styles.property2}>Total Items:</div>
                  <div className={styles.spacing2}></div>
                <div className={styles.value2}>{count}</div>
                <div className={styles.property3}>Order Total:(2)</div>
                  <div className={styles.spacing3}></div>
                <div className={styles.value3}>{content}</div>
              </div>
              <hr className='my-4' />
              <div className={`${styles.belowTable} flex justify-center items-center flex-col`}>
                <span className="text-center" styles={{ maxWidth: "100%" }}><p className='text-sm font-extralight'>By placing your order, you agree to our company Privacy Policy & Conditions of Use. </p></span>
                <div className={`${styles.hr} my-4`}></div>
                <button onClick={() => handleSubmitOrder()} className={`${styles.placeOrderbtn} mb-8 hover:shadow-md`}>Place Order</button>
              </div>
           </div>
          </div>
        </div>
      </div>
      )}
     {displayModal ? (
        // Modal --> Order confirmation modal
          <div className={`${styles.modalOverlay}`}>
          <div className={`${styles.modalContent}`}>
            <div className={`${styles.bigGreenTick}`}><DoneIcon style={{ color: 'white' }} /></div>
            <h1 className="text-2xl mb-6">Purchase confirmation</h1>
            <div style={{ float: "left" }}>Purchase Information</div>
            <table>
              <tr>
                <th>Item</th>
                <th>Description</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Amount</th>
              </tr>
              {cart.line_items.map((item) => (
                <tr>
                <td>{item.itemName}</td>
                <td>{item.itemDesc}</td>
                <td>{item.itemOriginalPrice}</td>
                <td>{item.count}</td>
                <td>{"₦ " + item.itemPrice}</td>
              </tr>
              ))}
            </table>
            <div style={{ float: "left", marginTop: "20px" }}>Client's Information</div>
            <table>
              <tr>
                <th>Fullname</th>
                <th>Phone Number</th>
                <th>Zipcode</th>
                <th>Country</th>
                <th>Address</th>
              </tr>
              <tr>
                <td>{checkoutDetailsRedux.customerFirstname + " " + checkoutDetailsRedux.customerLastname}</td>
                <td>{checkoutDetailsRedux.customerPhone}</td>
                <td>{checkoutDetailsRedux.customerZip}</td>
                <td>{checkoutDetailsRedux.customerCountry}</td>
                <td>{checkoutDetailsRedux.customerStreet + " " + checkoutDetailsRedux.customerState}</td>
              </tr>
            </table>
            <div className={`w-full flex justify-between mt-8`}>
              <button onClick={() => setDisplayModal(false)} type="button">
                <span className={`${styles.cancel}`}><CancelIcon style={{ color: 'white' }} /></span>
              </button>
              <button onClick={() => {
                setProceed(true)
                setDisplayModal(false);
              }} type="button">
                <span className={`${styles.confirm}`}><DoneIcon style={{ color: 'white' }} /></span>
              </button>
            </div>
          </div>
        </div>
     ) : null}
     {orderSuccess && (
        <div className={`${styles.signupSuccess} absolute right-4 rounded-lg shadow-md bg-white p-9 top-2`}>
            <p className={`text-green-600 font-semibold text-2xl`}>Order Placed Successfully.</p>
        </div>
     )}
    </>
  )
}
export default Checkout;