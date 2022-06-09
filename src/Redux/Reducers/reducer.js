let INITIAL_STATE = {
  products: [],
  cart: {
    line_items: []
  },
  // order: {},
  // errorMessage,
  onIntFocus: false,
  queryString: "",
  overallPrice: 0,
  overallCount: 0,
  checkoutDetails: {},
  productDetail: {}
}

if (localStorage.getItem("cart")) {
  INITIAL_STATE.cart.line_items = JSON.parse(localStorage.getItem("cart"));
} else {
  INITIAL_STATE.cart.line_items = [];
}

const catlogState = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CART": {
      return {
        ...state,
        cart: {
          line_items: [
            ...state.cart.line_items,
            action.payload
          ]
        }
      }
    }
    case "SET_SEARCH_QUERY": {
      return {
        ...state,
        queryString: action.payload
      }
    }
    case "SET_INT_FOCUS": {
      return {
        ...state,
        onIntFocus: action.payload
      }
    }
    case "LOAD_PRODUCTS": {
      return {
        ...state,
        products: [
          ...state.products,
          action.payload
        ]
      }
    }
    
    case "ADD_PRICE": {

      const index =  state.cart.line_items.findIndex(cartItem => cartItem.id === action.payload);
      const newArray = [...state.cart.line_items];
      newArray[index].count += 1;
      newArray[index].itemPrice += newArray[index].originalPrice;

      return {
        ...state,
        cart: {
          line_items: newArray
      }
    }
  }
  case "SUB_PRICE": {
      const index =  state.cart.line_items.findIndex(cartItem => cartItem.id === action.payload);
      const newArray = [...state.cart.line_items];
      newArray[index].count -= 1;
      newArray[index].itemPrice -= newArray[index].originalPrice;
      // render me would check to see if the quantity is less than 1 so that the cartITem can be deleted
      let renderMe;
      if (state.cart.line_items[index].count < 1) {
          // render deleted array
          const deletedArray = state.cart.line_items.filter((item) => item.id !== action.payload);
          renderMe = deletedArray;
      } else {
        renderMe = newArray;
      }

      localStorage.setItem("cart", JSON.stringify(renderMe))

      return {
        ...state,
        cart: {
          line_items: renderMe
        }
      }
  }
    case "SET_TOTAL_PRICE": {
      return {
        ...state,
        overallPrice: action.payload
      }
    }
    case "UPDATE_TOTAL_PRICE": {
      const index =  state.cart.line_items.findIndex(cartItem => cartItem.id === action.payload);
      const newPrice = state.cart.line_items[index].originalPrice + state.cart.line_items[index].itemPrice;
      return {
        ...state,
        overallPrice: newPrice
      }
    }
    case "SET_TOTAL_COUNT": {
      return {
        ...state,
        overallCount: action.payload
      }
    }
    case "SET_CHECKOUT_DETAILS": {
      return {
        ...state,
        checkoutDetails: {
          ...action.payload
        }
      }
    }
    case "SET_PRODUCT_DETAILS": {
      return {
        ...state,
        productDetail: {
          ...action.payload
        }
      }
    }
    default:
      return state;
  }
}

export default catlogState;