import "./App.css";
import React from "react";
import { Container} from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import {Switch} from 'react-router'
import Home from "./components/Home/Home";
// import {StrictMode} from 'react';

function App() {
   
    return (
        <BrowserRouter>
        <Container maxWidth="lg">
            <Navbar/>
            <Routes>
                <Route path="/" exact component={Home}/>
            </Routes>
            <Home/>
        </Container>
        </BrowserRouter>
        
    );
}

export default App;
