import AthleteProfile from "../models/athleteProfile.js";

export const getAthlete = async (req, res) => {
    try {
        const athleteProfile = await AthleteProfile.find();
        console.log(athleteProfile);
        res.status(200).json(athleteProfile);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createAthlete = async (req, res) => {
    const athlete = req.body;

    const newAthlete = new AthleteProfile(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
