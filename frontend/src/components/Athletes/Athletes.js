import React from "react";
import Athlete from "./Athlete/Athlete";
import useStyles from './styles'
import { useSelector } from "react-redux";


const Athletes = () => {
    const classes = useStyles();
    const athletes = useSelector((state) => state.athletes)
    console.log(athletes)
    return(
        <>
            <h1>Athletes</h1>
            <Athlete/>
            <Athlete/>
        </>
    );
};

export default Athletes;
