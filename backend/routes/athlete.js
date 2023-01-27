import express from "express";
import {getAthleteBySearch,
    getAthlete,
    createAthlete,
    updateAthlete,
    deleteAthlete,
} from "../controllers/athlete.js";

const router = express.Router();
router.get("/search", getAthleteBySearch);
router.get("/", getAthlete);
router.post("/", createAthlete);
router.patch("/:id", updateAthlete);
router.delete("/:id", deleteAthlete);

export default router;
