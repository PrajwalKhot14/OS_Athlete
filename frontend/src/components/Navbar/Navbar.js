import React from "react";
import { AppBar, Typography, Toolbar } from "@material-ui/core";
import useStyles from "./styles";
import {Link, useHistory, useLocation} from 'react-router-dom'

import athlete from "../../images/athlete.png";
const Navbar = () => {
    const classes = useStyles();
    const location = useLocation();
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography
                component={Link} to = "/"
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
            </div>
            <Toolbar className={classes.toolbar}></Toolbar>
        </AppBar>
    );
};

export default Navbar;
