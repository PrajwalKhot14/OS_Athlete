import mongoose from "mongoose";
import AthleteProfile from "../models/athleteProfile.js";

export const getAthlete = async (req, res) => {
    const { page } = req.query;
    try {
        const LIMIT = 100;
        const startIndex = (Number(page) - 1) * LIMIT;
        const total = await AthleteProfile.countDocuments({});
        const athleteProf = await AthleteProfile.find()
            .sort({ _id: -1 })
            .limit(LIMIT)
            .skip(startIndex);

        res.json({
            data: athleteProf,
            currentPage: Number(page),
            numberOfPages: Math.ceil(total / LIMIT),
        });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

<<<<<<< Updated upstream
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
export const getOneAthlete = async (req, res) => {
    const { id } = req.query;
    try {
        const athlete = await AthleteProfile.findById(id);
        res.json({
            athlete,
        });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

>>>>>>> Stashed changes
export const getAthleteBySearch = async (req, res) => {
    const { searchQuery } = req.query;

    try {
        const name = new RegExp(searchQuery, "i");
        // console.log(searchQuery);
        const athleteProf = await AthleteProfile.find({ $or: [{ name }] });
        res.json(athleteProf);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

=======
>>>>>>> parent of 43271fc (Add search func)
=======
>>>>>>> parent of 43271fc (Add search func)
=======
>>>>>>> parent of 43271fc (Add search func)
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
