import React from "react";
import Athlete from "./Athlete/Athlete";
import useStyles from './styles'

const Athletes = () => {
    const classes = useStyles();
    return(
        <>
            <h1>Athletes</h1>
            <Athlete/>
            <Athlete/>
        </>
    );
};

export default Athletes;
