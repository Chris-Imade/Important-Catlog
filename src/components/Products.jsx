import React, { useState } from 'react';
import styles from './products.module.css'
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Footer } from '.';
import { useLocation } from 'react-router-dom';
// import Filter from '../Filter';
import Search from '../Search';
import { allActions } from '../Redux/ActionCreators/action';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from "redux";


const Products = () => {

    const dispatch = useDispatch();
    const { updateIntFocus } = bindActionCreators(allActions, dispatch);
    const location = useLocation();

    const [option, setOption] = useState({
        select: "",
        catMen: false,
        catWomen: false,
        catKids: false
    });
    console.log(option.select);
    const [optionSelect, setOptionSelect] = useState({
        selectSort: "",
        newest: false,
        highToLow: false,
        lowToHigh: false, 
        rating: false,
        popularity: false
    });


    const handleOption = () => {
        if (option.select === "All") {
            updateIntFocus(false);
            return setOption({
                catMen: false,
                catWomen: false,
                catKids: false,
            });
        }
        if (option.select === "Men") {
            updateIntFocus(false);
            return setOption({
                catMen: true,
                catWomen: false,
                catKids: false,
            });
        }
        if (option.select === "Women") {
            updateIntFocus(false);
            return setOption({
                catMen: false,
                catWomen: true,
                catKids: false
            });
        }
        if (option.select === "Kids") {
            updateIntFocus(false);
            return setOption({
                catMen: false,
                catWomen: false,
                catKids: true
            });
        }
    }
    handleOption();

    const handleOptionSort = () => {
        if (optionSelect.selectSort === "NewestArrivals") setOptionSelect({
            newest: true,
            highToLow: false,
            lowToHigh: false, 
            rating: false,
            popularity: false
        })
        if (optionSelect.selectSort === "Price:Hightolow") setOptionSelect({
            newest: false,
            highToLow: true,
            lowToHigh: false, 
            rating: false,
            popularity: false
        })
        if (optionSelect.selectSort === "Price:Lowtohigh") setOptionSelect({
            newest: false,
            highToLow: false,
            lowToHigh: true,
            rating: false,
            popularity: false
        })
    }
    handleOptionSort();


    return (
        <>
            { location.pathname === "/products" ? (
                <div className={`${styles.products__container} mt-28 lg:mt-[15rem] mx-4 sm:mx-10 pb-6 px-4 sm:px-10 mb-20`}>
                    <div className="py-8">
                        <p className={`font-extrabold text-2xl`}>Product Highlight</p>
                    </div>
                    <div className={`${styles.filter} flex flex-col sm:flex-row justify-center items-center sm:justify-start bg-white py-4 pl-4 mb-8`}>
                        <div className={`${styles.all}`}>
                            <div  className={`font-light sm:font-bold flex justify-center items-center`}>
                                Category:
                                <div className={`py-4 px-4`}>
                                        <select onChange={(e) => setOption({ select: e.target.value })}>
                                            <option className='py-2 px-1 border-b-2 border-gray-300 text-gray-900'>All</option>
                                            <option className='py-2 px-1 border-b-2 border-gray-300 hover:text-gray-800'>Men</option>
                                            <option className='py-2 px-1 border-b-2 border-gray-300 hover:text-gray-800'>Kids</option>
                                            <option className='py-2 px-1 border-b-2 border-gray-300 hover:text-gray-800'>Women</option>
                                        </select>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.filterDropdown}`}>
                            <div className={`${styles.all}`}>
                                <div  className={`font-light sm:font-bold flex justify-center items-center`}>
                                    Sort by:
                                    <div className={`py-4 px-4`}>
                                            <select onChange={(e) => setOptionSelect({ selectSort: e.target.value })}>
                                                <option className='py-2 px-1 border-b-2 border-gray-300 text-gray-900'>Newest Arrivals</option>
                                                <option className='py-2 px-1 border-b-2 border-gray-300 hover:text-gray-800'>Price: High to low</option>
                                                <option className='py-2 px-1 border-b-2 border-gray-300 hover:text-gray-800'>Price: Low to high</option>
                                            </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className={`${styles.items} flex flex-col md:flex-row flex-wrap justify-center items-center`}>
                    <Search catMen={option.catMen} catWomen={option.catWomen} catKids={option.catKids} setOption={setOption} highToLow={optionSelect.highToLow} />        
                </div>
                </div>
            ) : (
                <div className={`${styles.products__container}  mx-4 sm:mx-10 pb-6 px-4 sm:px-10 mb-20`}>
                    <div className="py-8">
                        <p className={`font-extrabold text-2xl`}>Product Highlight</p>
                    </div>
                    <div className={`${styles.filter} flex flex-col sm:flex-row justify-start bg-white py-4 pl-4 mb-8`}>
                        <div className={`${styles.all}`}>
                            <div  className={`font-light sm:font-bold flex justify-center items-center`}>
                                Category:
                                <div className={`py-4 px-4`}>
                                        <select onChange={(e) => setOption({ select: e.target.value })}>
                                            <option className='py-2 px-1 border-b-2 border-gray-300 text-gray-900'>All</option>
                                            <option className='py-2 px-1 border-b-2 border-gray-300 hover:text-gray-800'>Men</option>
                                            <option className='py-2 px-1 border-b-2 border-gray-300 hover:text-gray-800'>Kids</option>
                                            <option className='py-2 px-1 border-b-2 border-gray-300 hover:text-gray-800'>Women</option>
                                        </select>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.filterDropdown}`}>
                            <div className={`${styles.all}`}>
                                <div  className={`font-bold flex justify-center items-center`}>
                                    Sort by:
                                    <div className={`py-4 px-4`}>
                                            <select onChange={(e) => setOptionSelect({ selectSort: e.target.value })}>
                                                <option className='py-2 px-1 border-b-2 border-gray-300 text-gray-900'>Newest Arrivals</option>
                                                <option className='py-2 px-1 border-b-2 border-gray-300 hover:text-gray-800'>Price: High to low</option>
                                                <option className='py-2 px-1 border-b-2 border-gray-300 hover:text-gray-800'>Price: Low to high</option>
                                            </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className={`${styles.items} flex flex-col md:flex-row flex-wrap justify-center items-center`}>
                    <Search catMen={option.catMen} catWomen={option.catWomen} catKids={option.catKids} setOption={setOption} highToLow={optionSelect.highToLow} />        
                </div>
                </div>
            )}
            { location.pathname === "/products" && (
                <Footer />
            )}
        </>
    )
}
export default Products;