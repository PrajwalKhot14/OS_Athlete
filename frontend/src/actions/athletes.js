import * as api from '../api';

// Action creators
export const getAthletes = () => async (dispatch) => {
    try {
        const {data } = await api.fetchAthlete();
        dispatch({type: 'FETCH_ALL', payload: []});
    } catch (error) {
        console.log(error)
        
    }
}