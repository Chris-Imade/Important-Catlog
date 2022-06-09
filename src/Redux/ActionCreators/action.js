import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

const addToCart = (productId) => {
    return (dispatch) => {
        const cart = localStorage.getItem('cart')
		? JSON.parse(localStorage.getItem('cart'))
		: [];
	
        try {
            onSnapshot(doc(db, "products", productId), (doc) => {
                // check if duplicates
                const duplicates = cart.filter((item) => item.id === productId);
                if (duplicates.length === 0) {
                    // prep product data
                    const productToAdd = {
                        ...doc.data(),
                        count: 1,
                        originalPrice: doc.data().itemPrice
                    };
                        // add product data to cart
                        cart.push(productToAdd);
                        // add cart to local storage
                        localStorage.setItem('cart', JSON.stringify(cart));
                        // const localStorageCart = localStorage.getItem("cart");
                        // if (localStorageCart) {
                        //     // add cart to redux
                        dispatch({
                            type: "SET_CART",
                            payload: cart,
                        });
                    
                }
                console.log("Local Storage: " + localStorage)
            });
                // addToCart(cartProductRelated);
                // console.log("productItem: " + JSON.stringify(productItem));
          } catch (error) {
            console.log(error);
          }
        // console.log("Product from action: " + JSON.stringify(productId));
    }
}
const addPrice = (payloadData) => {
    return (dispatch) => {
        
        // getting data from locaStoreage
        const cart = JSON.parse(localStorage.getItem("cart")); 
        // get the particular item form localStorage 
        const cartItem = cart.filter((item) => item.id === payloadData);
        console.log(JSON.stringify(cartItem));
        // upadate item count
        cartItem[0].count = cartItem[0].count + 1;
        // update item price
        cartItem[0].itemPrice = cartItem[0].itemPrice * cartItem[0].count;
        // other cart items except the edited one
        const cartWithoutEdit = cart.filter((item) => item.id !== payloadData);
        // Trying to get the object out of the array
        // const productObj = cartItem.forEach((object) => object);
        // console.log(productObj);
        // joining the other items with cartitem hopefully the data has changed now
        const newCart = [...cartWithoutEdit, cartItem[0]];
        // override everything in localstoreage with the new updates
        localStorage.setItem("cart", JSON.stringify(newCart));

        // Just finish working with localStorage in making sure that the items are updated in the localStorage

        // Moving on the updating cart from redux respectively


        dispatch({
            type: "ADD_PRICE",
            payload: payloadData
        })
    }
}   
const subPrice = (payloadData) => {

    // getting data from locaStoreage
        const cart = JSON.parse(localStorage.getItem("cart")); 
        // get the particular item form localStorage 
        const cartItem = cart.filter((item) => item.id === payloadData);
        console.log(JSON.stringify(cartItem));
        // upadate item count
        cartItem[0].count = cartItem[0].count - 1;
        // update item price
        cartItem[0].itemPrice = cartItem[0].itemPrice * cartItem[0].count;
        // other cart items except the edited one
        const cartWithoutEdit = cart.filter((item) => item.id !== payloadData);
        // Trying to get the object out of the array
        // const productObj = cartItem.forEach((object) => object);
        // console.log(productObj);
        // joining the other items with cartitem hopefully the data has changed now
        const newCart = [...cartWithoutEdit, cartItem[0]];
        // override everything in localstoreage with the new updates
        localStorage.setItem("cart", JSON.stringify(newCart));

    return (dispatch) => {
        dispatch({
            type: "SUB_PRICE",
            payload: payloadData
        })
    }
}   
const updateIntFocus = (payloadData) => {
    return (dispatch) => {
            dispatch({
                type: "SET_INT_FOCUS",
                payload: payloadData
            })
        
    }
}
const updateQueryString = (stringQuery) => {
    return (dispatch) => {
        dispatch({
            type: "SET_SEARCH_QUERY",
            payload: stringQuery
        })
    }
}
const loadProducts = (productPayload) => {
    return (dispatch) => {
        dispatch({
            type: "LOAD_PRODUCTS",
            payload: productPayload
        })
    }
}
const setTotalPrice = (payloadData) => {
    return (dispatch) => {
        dispatch({
            type: "SET_TOTAL_PRICE",
            payload: payloadData
        })
    }
}
const updateTotalPrice = (payloadData) => {
    return (dispatch) => {
        dispatch({
            type: "UPDATE_TOTAL_PRICE",
            payload: payloadData
        })
    }
}
// Total count of items in the cart
const setTotalCount = (payloadData) => {
    return (dispatch) => {
        dispatch({
            type: "SET_TOTAL_COUNT",
            payload: payloadData
        })
    }
}
// Temporary storage for checkoutDetials
const setCheckoutDetails = (payloadData) => {
    return (dispatch) => {
        dispatch({
            type: "SET_CHECKOUT_DETAILS",
            payload: payloadData
        })
    }
}
const setProductDetail = (payloadData) => {
    return (dispatch) => {
        dispatch({
            type: "SET_PRODUCT_DETAILS",
            payload: payloadData
        })
    }
}
export const allActions = {
    addToCart,
    updateIntFocus,
    updateQueryString,
    loadProducts,
    addPrice,
    subPrice,
    setTotalPrice,
    updateTotalPrice,
    setTotalCount,
    setCheckoutDetails,
    setProductDetail
}