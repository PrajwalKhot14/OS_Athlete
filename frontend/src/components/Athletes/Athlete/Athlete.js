import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import ClearIcon from "@mui/icons-material/Clear";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";

import { deleteAthlete } from "../../../actions/athletes";

const Athlete = ({ athlete, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        <Card className={classes.card} raised elevation={6}>
            <CardMedia
                className={classes.media}
                image={athlete.profile_image}
                name={athlete.name}
            />
            <div className={classes.overlay}>
                <Typography variant="h5">{athlete.name}</Typography>
                <Typography variant="h6">{athlete.location}</Typography>
                <Typography variant="body2">
                    {moment().diff(athlete.dob, "years")} years
                </Typography>
                {/* <Typography variant="body2">{athlete.dob}</Typography> */}
            </div>
            <div className={classes.overlay2}>
                <Button
                    style={{ color: "white" }}
                    size="small"
                    onClick={() => setCurrentId(athlete._id)}
                >
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <div className={classes.details}>
                {/* <Typography variant="body2" color="textSecondary">{athlete.sports.map((sport)=>`${sport} `)}</Typography> */}
                <Typography variant="body2" color="textSecondary" component="h2">
                    {athlete.team}
                </Typography>
            </div>
            <Typography className={classes.title}  variant="h5" gutterBottom  component="h2">
                {athlete.sports}
            </Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {athlete.about}
                </Typography>
            </CardContent>

            <CardActions className={classes.cardActions}>
                <Button
                    size="small"
                    color="primary"
                    onClick={() => dispatch(deleteAthlete(athlete._id))}
                >
                    <ClearIcon fontSize="small" />
                    Remove
                </Button>
            </CardActions>
        </Card>
    );
};

export default Athlete;
