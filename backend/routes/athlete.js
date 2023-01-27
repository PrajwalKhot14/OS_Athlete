import express from "express";
import {getAthlete, createAthlete, updateAthlete, deleteAthlete} from '../controllers/athlete.js';

const router = express.Router();

router.get('/', getAthlete);
router.post('/', createAthlete);
router.patch('/:id', updateAthlete)
router.delete('/:id', deleteAthlete)

export default router;
