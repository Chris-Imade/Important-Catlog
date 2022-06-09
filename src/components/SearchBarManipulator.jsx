import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
// Material ui compnents
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import styles from './header.module.css';
import './header.css';
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { allActions } from '../Redux/ActionCreators/action';

const SearchBarManipulator = () => {
    const location = useLocation();
    const history = useHistory();

    const dispatch = useDispatch();
    const { updateQueryString, updateIntFocus } = bindActionCreators(allActions, dispatch);
    const products = useSelector(state => state.reducer.products);
     
    const handleSubmit = (e) => {
        e.preventDefault();
        history.push("/products");
    }

    return (
        <>
            {location.pathname === "/" && (
                <form onSubmit={(e) => handleSubmit(e)} className='flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`${styles.searchIcon} ml-2 h-6 w-6 text-gray-400 absolute`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <Stack spacing={2} sx={{ width: 400, marginTop: 1, marginBottom: 1 }}>
                    <Autocomplete
                        sx={{ marginLeft: 5 }}
                            id="catlog-product"
                            onChange={(event, value) => updateQueryString(value)}
                            disableClearable
                            options={products.map((product) => product.itemName)}
                            renderInput={(params) => (
                            <TextField
                                onChange={(e) => updateQueryString(e.target.value)}
                                onFocus={() => updateIntFocus(true)}
                                {...params}
                                label="Search Product"
                                InputProps={{
                                ...params.InputProps,
                                type: 'search',
                                }}
                            />
                            )}
                        />
                    </Stack>
                </form>
    )}
    {location.pathname === "/products" && (
                <form onSubmit={(e) => handleSubmit(e)} className='flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`${styles.searchIcon} ml-2 h-6 w-6 text-gray-400 absolute`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <Stack spacing={2} sx={{ width: 400, marginTop: 1, marginBottom: 1 }}>
                    <Autocomplete
                        sx={{ marginLeft: 5 }}
                            id="catlog-product"
                            onChange={(event, value) => updateQueryString(value)}
                            disableClearable
                            options={products.map((product) => product.itemName)}
                            renderInput={(params) => (
                            <TextField
                                onChange={(e) => updateQueryString(e.target.value)}
                                onFocus={() => updateIntFocus(true)}
                                {...params}
                                label="Search Product"
                                InputProps={{
                                ...params.InputProps,
                                type: 'search',
                                }}
                            />
                            )}
                        />
                    </Stack>
                </form>
    )}
        </>
    )

}

export default SearchBarManipulator;