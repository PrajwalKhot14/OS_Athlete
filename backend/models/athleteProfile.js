import mongoose from "mongoose";

const athleteSchema = mongoose.Schema({
    name: String,
    dob: Date,
    location: String,
    team: String,
    gender: String,
    sports: [String],
    about: String,
    interests: [String],
    profile_image: String,
});

const AthleteProfile = mongoose.model("AthleteProfile", athleteSchema);
export default AthleteProfile;
