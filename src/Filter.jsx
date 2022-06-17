import React, { useState, useEffect } from 'react';
// import commerce from './lib/commerce';
import { ProductItem, SkeletonLoader } from './components/index';
// import { CodeSharp } from '@material-ui/icons';
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";
import { v4 as uuidv4 } from 'uuid';


const Filter = ({ catMen, catWomen, catKids, onAddToCart, highToLow }) => {
    // Defining filters constants
    // Products 
    const [products, setProducts] = useState([]);

        // make men request
        useEffect(() => {
            // fetchProducts();
            if(catMen) {
                    const getMenCat = async () => {
                        const q = query(collection(db, "products"), where("category", "array-contains", "men"));

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
                } 
                getMenCat();
            }
            if (catWomen) {
                const getWomenCat = async () => {
                    const q = query(collection(db, "products"), where("category", "array-contains", "women"));

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
                }
                getWomenCat();
            }
            if (catKids) {
                const getKids = async () => {
                    const q = query(collection(db, "products"), where("category", "array-contains", "kids"));

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
                }
                getKids();
            } 
            if (!catMen && !catWomen && !catKids) {
                const getProducts = async () => {
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
                }
                getProducts();
            }
        }, []);

        // Screen Loader
        const RenderLoadingScreen = () => {
            return <SkeletonLoader />
        }
        // Products function
        const RenderProductsSrceen = ({ products }) => {
            return products.map((product) => (
                    <React.Fragment key={uuidv4()}>
                        <ProductItem product={product} onAddToCart={onAddToCart} />
                    </React.Fragment>
                ));
        }

        // Running conditions
        if (!products.length || products === undefined || products.length === undefined) {
            return <RenderLoadingScreen />
        } else {
            return <RenderProductsSrceen products={products} />
        }
}

export default Filter;