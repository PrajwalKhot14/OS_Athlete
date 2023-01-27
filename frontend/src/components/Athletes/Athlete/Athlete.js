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
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ClearIcon from "@mui/icons-material/Clear";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import moment from "moment";

const Athlete = ({ athlete }) => {
    const classes = useStyles();
    console.log(athlete);
    moment().diff(athlete.dob, "years");
    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={athlete.profile_image}
                name={athlete.name}
            />
            <div className={classes.overlay}>
                <Typography variant="h4">{athlete.name}</Typography>
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
                    onClick={() => {}}
                >
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <div className={classes.details}>
                {/* <Typography variant="body2" color="textSecondary">{athlete.sports.map((sport)=>`${sport} `)}</Typography> */}
                <Typography variant="body2" color="textSecondary">
                    {athlete.sports}
                </Typography>
            </div>
            <CardContent>
                <Typography className={classes.title} variant="h5" gutterBottom>
                    {athlete.about}
                </Typography>
            </CardContent>

            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => {}}>
                    <ClearIcon fontSize="small" />
                    Remove
                </Button>
            </CardActions>
        </Card>
    );
};

export default Athlete;
