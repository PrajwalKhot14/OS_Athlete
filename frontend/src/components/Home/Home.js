import React, { useState, useEffect } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import Athletes from "../Athletes/Athletes";
import Form from "../Form/Form";
import { useDispatch } from "react-redux";
import { getAthletes } from "../../actions/athletes";

const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    // const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAthletes());
    }, [currentId, dispatch]);
    return (
        <Grow in>
            <Container>
                <Grid
                    container
                    justifyContent="space-between"
                    alignItems="stretch"
                    spacing={1}
                >
                    <Grid item xs={12} sm={6} md={8}>
                        <Athletes setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form
                            currentId={currentId}
                            setCurrentId={setCurrentId}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
};

export default Home;
