import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
// Material ui compnents
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import styles from './header.module.css';
import './header.css';
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { allActions } from '../Redux/ActionCreators/action';
import Stack from '@mui/material/Stack';


const SearchBarManipulator = () => {

    // const [focus, setFocus] = useState(false);
    const location = useLocation();
    const history = useHistory();

    const dispatch = useDispatch();
    const { updateQueryString, updateIntFocus } = bindActionCreators(allActions, dispatch);
    
    // const products = useSelector(state => state.reducer.products);
    const labels = useSelector(state => state.reducer.labels);

    const list = labels.map((item) => {
        return { label: `${item}` }
    })


    const handleSubmit = (e) => {
        e.preventDefault();
        history.push("/products");
    }


    return (
        <>
            {(() => {if(location.pathname === "/" || location.pathname === "/products") {
                    return (
                        <form onSubmit={(e) => handleSubmit(e)} className='flex items-center relative w-[15rem] md:w-full'>
                            <span className="absolute left-[-2rem] top-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className={`${styles.searchIcon} ml-2 h-6 w-6 text-gray-400 absolute`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </span>
                            <Stack spacing={2} sx={{ width: 400, marginTop: 1, marginBottom: 1, borderRadius: '5px' }}>
                                <Autocomplete
                                    onChange={(event, value) => updateQueryString(value.label)}
                                    onFocus={() => updateIntFocus(true)}
                                    // onBlur={() => updateQueryString("")}
                                    id="catlog-product"
                                    disablePortal
                                    options={list}
                                    // sx={{ width: 300 }}
                                    renderInput={(params) => (
                                        <TextField 
                                            {...params} 
                                            label="Search Products"
                                            onChange={(e) => updateQueryString(e.target.value)}
                                        />
                                    )}
                                />
                            </Stack>
                            
                        </form>
                    )
                } else {
                    return (<div></div>);
                }})()}
        </>
    )

}

export default SearchBarManipulator;