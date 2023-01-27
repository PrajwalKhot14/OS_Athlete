import React, { useEffect, useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import useStyles from "./styles";
// import athletes from "../../reducers/athletes";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createAthlete, updateAthlete } from "../../actions/athletes";



const Form = ({currentId, setCurrentId}) => {
    const [athleteData, setAthleteData] = useState({
        name: "",
        // dob: "",
        location: "",
        team: "",
        gender: "",
        sports: "",
        about: "",
        interests: "",
        profile_image: "",
    });
    
    const athlete = useSelector((state) => currentId ? state.athletes.find((p) => p._id === currentId): null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() =>{
        if(athlete) setAthleteData(athlete);
    }, [athlete])

    const clear = () => {
        setCurrentId(null);
        setAthleteData({name: "",
        // dob: "",
        location: "",
        team: "",
        gender: "",
        sports: "",
        about: "",
        interests: "",
        profile_image: "",})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentId) {
            dispatch(updateAthlete(currentId, athleteData));
        } else {
            dispatch(createAthlete(athleteData));
        }
        clear()
    };

    return (
        <Paper className={classes.paper}>
            <form
                autoComplete="off"
                noValidate
                className={`${classes.root} ${classes.form}`}
                onSubmit={handleSubmit}
            >
                <Typography variant="h6">{currentId ? 'Editing ': null}Athlete Details</Typography>
                <TextField
                    name="name"
                    variant="outlined"
                    label="Name"
                    fullWidth
                    value={athleteData.name}
                    onChange={(e) =>
                        setAthleteData({ ...athleteData, name: e.target.value })
                    }
                />
                <TextField
                    name="location"
                    variant="outlined"
                    label="Location"
                    fullWidth
                    value={athleteData.location}
                    onChange={(e) =>
                        setAthleteData({
                            ...athleteData,
                            location: e.target.value,
                        })
                    }
                />
                <TextField
                    name="team"
                    variant="outlined"
                    label="Team"
                    fullWidth
                    value={athleteData.team}
                    onChange={(e) =>
                        setAthleteData({ ...athleteData, team: e.target.value })
                    }
                />
                <TextField
                    name="gender"
                    variant="outlined"
                    label="Gender"
                    fullWidth
                    value={athleteData.gender}
                    onChange={(e) =>
                        setAthleteData({
                            ...athleteData,
                            gender: e.target.value,
                        })
                    }
                />
                <TextField
                    name="sports"
                    variant="outlined"
                    label="Sports"
                    fullWidth
                    value={athleteData.sports}
                    onChange={(e) =>
                        setAthleteData({
                            ...athleteData,
                            sports: e.target.value,
                        })
                    }
                />
                <TextField
                    name="about"
                    variant="outlined"
                    label="About"
                    fullWidth
                    value={athleteData.about}
                    onChange={(e) =>
                        setAthleteData({
                            ...athleteData,
                            about: e.target.value,
                        })
                    }
                />
                <TextField
                    name="interests"
                    variant="outlined"
                    label="Interests"
                    fullWidth
                    value={athleteData.interests}
                    onChange={(e) =>
                        setAthleteData({
                            ...athleteData,
                            interests: e.target.value,
                        })
                    }
                />
                {/* <TextField name="profile_image" variant="outlined" label="profile_image" fullWidth value={athleteData.profile_image} onChange={(e) => setAthleteData({ ...athleteData, profile_image: e.target.value })}/> */}
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) =>
                            setAthleteData({
                                ...athleteData,
                                profile_image: base64,
                            })
                        }
                    />
                </div>
                <Button
                    className={classes.buttonSubmit}
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    fullWidth
                >
                    Submit
                </Button>
                <Button
                    className={classes.buttonSubmit}
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={clear}
                    fullWidth
                >
                    Clear
                </Button>
            </form>
        </Paper>
    );
};

export default Form;
