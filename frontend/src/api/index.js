import axios from 'axios';

const url = 'http://localhost:5002/athlete';
export const fetchAthlete = () => axios.get(url);
export const fetchOneAthlete = (id) => axios.get(`${url}/${id}`);
export const createAthlete = (newAthlete) => axios.post(url, newAthlete);
export const updateAthlete = (id, updatedAthlete) => axios.patch(`${url}/${id}`, updatedAthlete)
export const deleteAthlete = (id) => axios.delete(`${url}/${id}`)
export const fetchAthleteBySearch = (searchQuery) => axios.get(`${url}/search?searchQuery=${searchQuery.search || 'none'}`)