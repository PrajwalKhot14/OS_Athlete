import * as api from '../api';

// Action creators
export const getAthletes = () => async (dispatch) => {
    try {
        const {data } = await api.fetchAthlete();
        dispatch({type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const createAthlete = (athlete) => async (dispatch)=> {
    try {
        const {data} = await api.createAthlete(athlete);
        dispatch({type: 'CREATE', payload: data});
    } catch (error) {
        console.log(error);
    }
}