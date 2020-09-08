import React,{useState,useEffect} from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css';
 
import cx from 'classnames';

import {fetchCountries} from '../../api';

const CountryPicker = ({handleCountryChange}) => {
    
    const [fetchedCountries,setFetchedCountries]= useState([]);

    useEffect(()=>{
        const fetchApi = async () => {
            setFetchedCountries(await fetchCountries());
        }
        fetchApi();
    }, [setFetchedCountries]);
    
    
    
    return(
        <FormControl className={styles.FormControl}>
            <NativeSelect defaultValue="" onChange={(e) =>handleCountryChange(e.target.handleCountryChange) }>
            <option value="global">global</option>
              {fetchedCountries.map((country,i)=> <option key={i} value={country} >
              {country}
              </option>)}

            </NativeSelect>
        </FormControl>
 
    )
}
export default CountryPicker;