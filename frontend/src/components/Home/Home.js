import React, { useState, useEffect } from "react";
import { Container, Grow, Grid, Paper } from "@material-ui/core";
import Athletes from "../Athletes/Athletes";
import Form from "../Form/Form";
import { useDispatch } from "react-redux";
import { getAthletes } from "../../actions/athletes";
import Pagination from '../Pagination';
const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    // const classes = useStyles();
    const dispatch = useDispatch();
<<<<<<< HEAD
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


=======

    useEffect(() => {
        dispatch(getAthletes());
    }, [currentId, dispatch]);
>>>>>>> parent of 43271fc (Add search func)
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
                        <Paper elevation={6}>
<<<<<<< HEAD
                            <Pagination page={page}/>
=======
                            <Pagination/>
>>>>>>> parent of 43271fc (Add search func)
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
};

export default Home;
