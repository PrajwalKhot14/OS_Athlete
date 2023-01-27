import React, { useState, useEffect } from "react";
import {
    Container,
    Grow,
    Grid,
    Paper,
    AppBar,
    TextField,
    Button,
} from "@material-ui/core";
import Athletes from "../Athletes/Athletes";
import Form from "../Form/Form";
import { useDispatch } from "react-redux";
// import { getAthletes } from "../../actions/athletes";
import Pagination from "../Pagination";
import { useHistory, useLocation } from "react-router-dom";
import ChipInput from "material-ui-chip-input";
import useStyles from "./styles";
import { getAthletes, getAthleteBySearch } from "../../actions/athletes";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    const query = useQuery();
    const history = useHistory();
    const page = query.get("page") || 1;
    const searchQuery = query.get("searchQuery");
    const classes = useStyles();
    // useEffect(() => {
    //     dispatch(getAthletes());
    // }, [currentId, dispatch]);

    const searchAthlete = () =>{
        if(search.trim()){
            dispatch(getAthleteBySearch({search}))
            history.push(`/athlete/search?searchQuery=${search||'none'}`);
        }else{
            history.push('/')
        }
    }

    const handleKeyPress = (e) => { 
       if(e.keyCode === 13){
        searchAthlete()
       } 
    }


    return (
        <Grow in>
            <Container maxWidth="xl">
                <Grid
                    container
                    justifyContent="space-between"
                    alignItems="stretch"
                    spacing={3}
                    className={classes.gridContainer}
                >
                    <Grid item xs={12} sm={6} md={8}>
                        <Athletes setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <AppBar
                            className={classes.appBarSearch}
                            position="static"
                            color="inherit"
                        >
                            <TextField
                                onKeyDown={handleKeyPress}
                                name="search"
                                variant="outlined"
                                label="Search Athlete"
                                fullWidth
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />

                            <Button
                                onClick={searchAthlete}
                                className={classes.searchButton}
                                variant="contained"
                                color="primary"
                            >
                                Search
                            </Button> 
                        </AppBar>
                        <Form
                            currentId={currentId}
                            setCurrentId={setCurrentId}
                        />
                        <Paper elevation={6}>
                            <Pagination page={page}/>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
};

export default Home;
