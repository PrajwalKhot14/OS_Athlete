import express from "express";
import {getAthlete, createAthlete} from '../controllers/athlete.js';

const router = express.Router();

router.get('/', getAthlete);
router.post('/', createAthlete);

export default router;
