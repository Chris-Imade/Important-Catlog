import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from "redux";
import { allActions } from "./Redux/ActionCreators/action";
import './App.css';
import {
  Home,
  Cart,
  Login,
  Signup,
  ProductDetail
} from './pages/index';
import Checkout from './pages/CheckoutForm/Checkout/Checkout';

import { Products, Header } from './components';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from './firebase';



function App() {
  
  const dispatch = useDispatch();
  // state SETTERS
  const { loadProducts, setLabel } = bindActionCreators(allActions, dispatch);
  // States OR GETTER
  const products = useSelector(state => state.reducer.products);


  const fetchProducts = () => {
    const q = query(collection(db, "products"));
    try {
      onSnapshot(q, (querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
       items.join(", ");
       loadProducts(items);
        });
    } catch (error) {
        console.log(error);
    }
  };

  const fetchLabels = () => {
    const q = query(collection(db, "products"));
    try {
      onSnapshot(q, (querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data().itemName);
        });
       items.join(", ");
       setLabel(items);
        });
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(() => {
    fetchProducts();
    fetchLabels();
  }, []);


  return (

    // BEM
    <div className="app">
            return (
                <Router>
                      <Header />
                      <Switch>
                        <Route exact path="/">
                          <Home />
                        </Route>
                        <Route exact path="/checkout">
                          <Checkout />
                        </Route>
                        
                        <Route exact path="/cart">
                          <Cart products={products} />
                        </Route>
                        <Route exact path="/login">
                          <Login />
                        </Route>
                        <Route exact path="/products">
                        <Products  products={products} />
                        </Route>
                        <Route exact path="/signup">
                          <Signup />
                        </Route>
                        <Route exact path="/product-details/:productId">
                          <ProductDetail />
                        </Route>
                      </Switch>
                    </ Router>
            )
    </div>
  );
}

export default App;
