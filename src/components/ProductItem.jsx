import React from 'react';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import styles from './productItem.module.css';
import { Link } from 'react-router-dom';
// Redux
import { bindActionCreators } from "redux";
import { allActions } from "../Redux/ActionCreators/action";
import { useDispatch } from 'react-redux';

const ProductItem = ({ product }) => {
    // console.log(product)
    const dispatch = useDispatch();

    // Dispatches OR SETTERS
    const { addToCart } = bindActionCreators(allActions, dispatch);

    // const unsubscribe = store.subscribe(() => {
    //     const cartItems = JSON.parse(localStorage.getItem("cart"));
    //     addToCart(cartItems);
    //   })
    //   unsubscribe(); 
//   console.log("Main Item: " + cartProduct)
  return (
        <>
            {product && (
            <div className={`${styles.itemsCard} m-3 flex flex-col justify-between items-center`}>
            <Link to={`/product-details/${product.id}`}>
            <div className={`${styles.imageTop} flex justify-center items-start`}>
                <img className={styles.productImg} src={product.imageUrl[0]} alt="Item" width={221} height={326} />
            </div>
            </Link>
            <div className={`${styles.bottomText} ml-4 mr-4`}>
                <Link to={`/product-details/${product.id}`}>
                <h4 className={`text-slate-900 font-light`}>{product.itemName}</h4>
                </Link>
                <h3>₦{product.itemPrice}</h3>
                <div className={`${styles.addToCart} flex justify-between items-center`}>
                    <button onClick={() => {
                        addToCart(product.id);
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
            )}
        </>
  );
};
export default ProductItem;