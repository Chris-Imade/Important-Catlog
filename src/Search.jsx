import React from 'react';
import { useSelector } from 'react-redux';
import { ProductItem } from './components';
import Filter from './Filter';
// import commerce from './lib/commerce';


const Search = ({ catMen, catWomen, catKids, onAddToCart, setOption, highToLow }) => {

    const queryString = useSelector(state => state.reducer.queryString);
    const onIntFocus = useSelector(state => state.reducer.onIntFocus);
    const products = useSelector(state => state.reducer.products);

    const filteredList = products.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(queryString.toLowerCase());
    })

    const SearchInptAnalyser = () => {
        
        return filteredList.map((product) => (
            <React.Fragment key={product.id}>
                <ProductItem product={product} onAddToCart={onAddToCart} />
            </React.Fragment>
        ));
    }
    const CheckWhichToRender = ({ onIntFocus }) => {
        if(onIntFocus) {
            return <SearchInptAnalyser />
        }else {
        return  <Filter catMen={catMen} catWomen={catWomen} catKids={catKids} onAddToCart={onAddToCart} setOption={setOption} highToLow={highToLow} />
        }
    }

    return (
        <CheckWhichToRender onIntFocus={onIntFocus} />
    )
}
export default Search;