import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './CountryDetails.css'
const CountryDetails = () => {
    const {country_id} = useParams();
    const [country, setCountry] = useState({});
    useEffect(() =>{
        fetch(`https://restcountries.eu/rest/v2/alpha/${country_id}`)
        .then(res => res.json())
        .then(data => setCountry(data))
    },[]);
    const {name, capital, region, population, timezones, area, borders, flag,  } = country;
    return (
        <div className="country-box">
            <img src={flag} alt="" />
            <h5>country:  {country.name} </h5>
            <p>capital: {capital} </p>
            <p>Region: {region}</p>
            <p>Population: {population}</p>
            <p>Time-Zone: {timezones} </p>
            <p>Border: {borders} </p>

        </div>
    );
};

export default CountryDetails;