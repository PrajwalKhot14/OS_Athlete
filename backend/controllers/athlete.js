import mongoose from "mongoose";
import AthleteProfile from "../models/athleteProfile.js";

export const getAthlete = async (req, res) => {
    try {
        const athleteProfile = await AthleteProfile.find();

        res.status(200).json(athleteProfile);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createAthlete = async (req, res) => {
    const athlete = req.body;

    const newAthlete = new AthleteProfile(athlete);
    try {
        await newAthlete.save();
        res.status(201).json(newAthlete);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const updateAthlete = async (req, res) => {
    const { id: _id } = req.params;
    const athlete = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("No Athlete with that ID");
    }
    const updatedAthlete = await AthleteProfile.findByIdAndUpdate(
        _id,
        { ...athlete, _id },
        {
            new: true,
        }
    );
    res.json(updatedAthlete);
};

export const deleteAthlete = async (req, res) => {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("No Athlete with that ID");
    }

    await AthleteProfile.findByIdAndRemove(_id);


    res.json({ message: "Athlete Deleted" });
};
