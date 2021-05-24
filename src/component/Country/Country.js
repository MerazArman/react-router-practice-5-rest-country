import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Country = (props) => {
    console.log(props.country);
    const {name, capital, alpha3Code, flag} = props.country
    const history = useHistory()
    const btnHandler = (countryKey) =>{
        history.push(`/country/${countryKey}`);
    }
    return (
        <div className="country-box">
            <img src={flag} alt="" />
            <h6> {name}</h6>
            <p>capital: {capital}</p>
            {/* <p><Link to={`/country/${alpha3Code}`}> see more </Link> </p> */}
            
            <button className="btn btn-warning" onClick={() => btnHandler(alpha3Code)}>  more </button>  
        </div>
    );
};

export default Country;