import React from 'react';
import Header from '../Header/Header';
import Home from '../Home/Home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import NotFound from '../NotFound/NotFound';
import CountryDetails from '../CountryDetails/CountryDetails';

const Main = () => {
    return (
        <div>
           
            <Router>
            <Header></Header>
                <Switch>
                        <Route path="/home"> <Home> </Home> </Route>
                        <Route path="/country/:country_id"> <CountryDetails></CountryDetails> </Route>
                        <Route exact path="/"><Home> </Home> </Route>
                        <Route  path="*"><NotFound> </NotFound> </Route>

                </Switch>
            </Router>
        </div>
    );
};

export default Main;