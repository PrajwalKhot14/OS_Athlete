import React from "react";
import Athlete from "./Athlete/Athlete";
import { Grid, CircularProgress } from "@material-ui/core";
import useStyles from "./styles";
import { useSelector } from "react-redux";

const Athletes = ({ setCurrentId }) => {
    const classes = useStyles();
    const athletes = useSelector((state) => state.athletes);

    return !athletes.length ? (
        <CircularProgress />
    ) : (
        <Grid
            className={classes.mainContainer}
            container
            alignItems="stretch"
            spacing={3}
        >
            {athletes.map((ath) => (
                <Grid key={ath._id} item xs={12} sm={6} md={6} lg={3}>
                    <Athlete athlete={ath} setCurrentId={setCurrentId} />
                </Grid>
            ))}
        </Grid>
    );
};

export default Athletes;
