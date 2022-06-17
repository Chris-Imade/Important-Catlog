import React from 'react';
import { useSelector } from 'react-redux';
import { ProductItem } from './components';
import Filter from './Filter';
import { v4 as uuidv4 } from 'uuid';
// import commerce from './lib/commerce';


const Search = ({ catMen, catWomen, catKids, onAddToCart, setOption, highToLow }) => {

    const queryString = useSelector(state => state.reducer.queryString);
    // console.log(queryString);
    const onIntFocus = useSelector(state => state.reducer.onIntFocus);
    const products = useSelector(state => state.reducer.products);
    // console.log("products from Search.js: " + JSON.stringify(products.join(", ")));

    // console.log("onIntFocus: " + onIntFocus);

    
    const filteredList = products.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(queryString.toLowerCase());
    })

    // console.log("filteredList: " + JSON.stringify(filteredList));

    // MY MAJOR PROBLEM NOW LIES IN THE SEACH ANALYSER


    const SearchInptAnalyser = () => {
        
        return filteredList.map((product) => (
            <React.Fragment key={uuidv4()}>
                <ProductItem product={product} onAddToCart={onAddToCart} />
            </React.Fragment>
        ));

        
    }
    const CheckWhichToRender = ({ onIntFocus }) => {
        if(onIntFocus) {
            return <SearchInptAnalyser />
        } else {
            return  <Filter catMen={catMen} catWomen={catWomen} catKids={catKids} onAddToCart={onAddToCart} setOption={setOption} highToLow={highToLow} />
        }
    }

    return (
        <CheckWhichToRender onIntFocus={onIntFocus} />
    )
}
export default Search;