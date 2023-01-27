import React from "react";
import Athlete from "./Athlete/Athlete";
import { Grid, CircularProgress } from "@material-ui/core";
import useStyles from './styles'
import { useSelector } from "react-redux";


const Athletes = () => {
    const classes = useStyles();
    const athletes =  useSelector((state) => state.athletes);
    console.log(typeof athletes)

    return(
        !athletes.length ? <CircularProgress/> : (
        <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
            {athletes.map((ath) => (
                <Grid key = {ath._id}><Athlete athlete={ath}/></Grid>
            ))}
        </Grid>
        )
    );

};

export default Athletes;
