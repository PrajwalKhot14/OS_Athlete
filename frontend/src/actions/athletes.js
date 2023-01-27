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

export const updateAthlete = (id, athlete) => async (dispatch)=> {
    try {
        const {data} = await api.updateAthlete(id, athlete);
        dispatch({type: 'UPDATE', payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const deleteAthlete = (id) => async (dispatch)=> {
    try {
        await api.deleteAthlete(id);
        dispatch({type: 'DELETE', payload: id});
    } catch (error) {
        console.log(error);
    }
}