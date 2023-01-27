import "./App.css";
import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid, Paper } from "@material-ui/core";
import { useDispatch } from "react-redux";

import Athletes from "./components/Athletes/Athletes";
import Form from "./components/Form/Form";
import useStyles from "./styles";
import { getAthletes } from "./actions/athletes";
// import {StrictMode} from 'react';
import Paginate from "./components/Pagination";

import athlete from "./images/athlete.png";
function App() {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAthletes());
    }, [currentId, dispatch]);
    return (
        <Container maxWidth="lg">
            <AppBar
                className={classes.appBar}
                position="static"
                color="inherit"
            >
                <Typography
                    className={classes.heading}
                    variant="h2"
                    align="center"
                >
                    Athlete Profile Input Form
                </Typography>
                <img
                    className={classes.image}
                    src={athlete}
                    alt="memories"
                    height={60}
                />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid
                        container
                        justifyContent="space-between"
                        alignItems="stretch"
                        spacing={1}
                    >
                        <Grid item xs={12} sm={6}>
                            <Athletes setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form
                                currentId={currentId}
                                setCurrentId={setCurrentId}
                            />
                            <Paper elevation={6}>
                                <Paginate></Paginate>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;
