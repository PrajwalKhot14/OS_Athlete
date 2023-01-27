import React, { useEffect } from "react";
import {
    Paper,
    Typography,
    CircularProgress,
    Divider,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import useStyles from "./styles";
// import { getAthletes } from "../../actions/athletes";
import { getAthlete } from "../../actions/athletes";

const AthleteDetails = () => {
    const { athlete, athletes, isLoading } = useSelector(
        (state) => state.athletes
    );
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    const { id } = useParams();
    useEffect(() => {
        dispatch(getAthlete(id));
    }, [id]);

    if (!athlete) return null;

    if (isLoading) {
        return (
            <Paper elevation={6} className={classes.loadingPaper}>
                <CircularProgress size="7em"></CircularProgress>
            </Paper>
        );
    }
    return (
        <Paper style={{ padding: "20px", borderRadius: "15px" }} elevation={6}>
            <div className={classes.card}>
                <div className={classes.section}>
                    <Typography variant="h3" component="h2">
                        {athlete.name}Name
                    </Typography>
                    {/* <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{athlete.tags.map((tag) => (
          <Link to={`/tags/${tag}`} style={{ textDecoration: 'none', color: '#3f51b5' }}>
            {` #${tag} `}
          </Link>
        ))}
        </Typography> */}
                    <Typography gutterBottom variant="body1" component="p">
                        {athlete.message}
                    </Typography>
                    
                    <Divider style={{ margin: "20px 0" }} />
                </div>
                <div className={classes.imageSection}>
                    <img
                        className={classes.media}
                        src={
                            athlete.selectedFile ||
                            "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
                        }
                        alt={athlete.title}
                    />
                </div>
            </div>
        </Paper>
    );
};

export default AthleteDetails;
