import axios from 'axios';

const url = 'http://localhost:5002/athlete';
export const fetchAthletes = (page) => axios.get(`${url}?page=${page}`);
export const createAthlete = (newAthlete) => axios.post(url, newAthlete);
export const updateAthlete = (id, updatedAthlete) => axios.patch(`${url}/${id}`, updatedAthlete)
export const deleteAthlete = (id) => axios.delete(`${url}/${id}`)
<<<<<<< Updated upstream
=======
export const fetchAthleteBySearch = (searchQuery) => axios.get(`${url}/search?searchQuery=${searchQuery.search || 'none'}`)
export const fetchAthlete = (id) => axios.get(`${url}/${id}`)
>>>>>>> Stashed changes
