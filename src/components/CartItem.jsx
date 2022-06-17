import React from 'react';
import styles from '../styles/cartItem.module.css';
import { bindActionCreators } from "redux";
import { allActions } from '../Redux/ActionCreators/action';
import { useDispatch, useSelector } from 'react-redux';

export const CartItem = ({ id, item, onUpdateCartQty, onRemoveFromCart }) => {
    const handleRemoveFromCart = () => onRemoveFromCart();
    const dispatch = useDispatch();
    const { addPrice, subPrice, updateTotalPrice } = bindActionCreators(allActions, dispatch);
    // const cart = useSelector(state => state.reducer.cart);
   
    return (
        <div className={`${styles.cartItemParent} border-2 border-gray-300 rounded-2xl m-6 p-4 flex flex-col md:flex-row`}>
            <div className={`${styles.left} flex flex-col lg:flex-row`}>
                <div><img className={styles.cartImage} src={`${item.imageUrl[0]}`} alt={item.itemName} /></div>
                <div className='flex flex-col lg:justify-around item-start lg:ml-8 '>
                    <h6 className='text-gray-500'>Genius Hub Product</h6>
                    <h4  className='text-4xl text-gray-900 font-bold'>{item.itemName}</h4>
                    <button onClick={() => handleRemoveFromCart(item.id)} type='button' className='text-red-600 cursor-pointer hover:bg-gray-200 rounded-md hover:shadow-md w-fit p-2'>Remove</button>
                </div>
            </div>
            <div className={`${styles.right} sm:flex justify-between`}>
            <div className='flex justify-center items-center my-4 md:my-0'>
               <button onClick={() => subPrice(id)} type='button' className='hover:shadow-md bg-gray-200 w-10 mr-4 text-3xl flex justify-center items-center'>-</button>
               <p className='font-bold text-3xl'>{item.count}</p>
               <button onClick={() => {
                   addPrice(id);
                   updateTotalPrice(id);
                }
                } type='button' className='hover:shadow-md bg-gray-200 w-10 ml-4 text-3xl flex justify-center items-center'>+</button>
            </div>
            <div className='flex justify-center items-center my-4 md:my-0'>
                <p className='text-4xl font-bold'>{"₦" + Number(item.itemPrice)}</p>
            </div>
            <div className='flex justify-center items-center pr-10'>
               <p className='text-4xl font-bold text-orange-400'> {""}</p>
            </div>
            </div>
        </div>
    )
}
export default CartItem;