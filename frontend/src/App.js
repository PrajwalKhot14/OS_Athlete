import "./App.css";
import React from "react";
import { Container} from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Switch, Route, Navigate, Redirect} from 'react-router-dom'
// import {Switch} from 'react-router'
import Home from "./components/Home/Home";
import AthleteDetails from "./components/AthleteDetails/AthleteDetails";
// import {StrictMode} from 'react';

function App() {
   
    return (
        <BrowserRouter>
        <Container maxWidth="xl">
            <Navbar/>
            <Switch>
                <Route path="/" exact component={()=><Redirect to="/athlete" />}/>
                <Route path="/athlete"exact component={Home}/>
                <Route path="/athlete/search"exact component={Home}/>
                <Route path="/athlete/:id" component={AthleteDetails}/>
            </Switch>
            {/* <Home/> */}
        </Container>
        </BrowserRouter>
        
    );
}

export default App;
