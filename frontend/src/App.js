import "./App.css";
import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import Athletes from "./components/Athletes/Athletes";
import Form from "./components/Form/Form";
// import {StrictMode} from 'react';

import athlete from "./images/athlete.png";
function App() {
    return (
        <Container maxWidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">
                    Athlete Profile Input Form
                </Typography>
                <img src={athlete} alt="memories" height={600} />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid
                        container
                        justify="space-between"
                        alignItems="stretch"
                        spacing={3}
                    >
                        <Grid item xs={12} sm={7}>
                            <Athletes />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;
