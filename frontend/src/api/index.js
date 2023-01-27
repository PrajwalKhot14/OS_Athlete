import axios from 'axios';

const url = 'http://localhost:5002/athlete';
export const fetchAthlete = () => axios.get(url);

export const createAthlete = (newAthlete) => axios.post(url, newAthlete);