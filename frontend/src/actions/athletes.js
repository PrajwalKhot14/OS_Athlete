<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< Updated upstream
import * as api from '../api';
import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';
=======
import * as api from "../api";
import { FETCH_ONE, FETCH_BY_SEARCH, FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";
>>>>>>> Stashed changes
=======
import * as api from '../api';
import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';
>>>>>>> parent of 43271fc (Add search func)
=======
import * as api from '../api';
import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';
>>>>>>> parent of 43271fc (Add search func)

// Action creators
export const getAthlete = (id) => async (dispatch) => {
    try {
<<<<<<< HEAD
<<<<<<< HEAD
        const { data } = await api.fetchAthlete(id);
        console.log(data)
        dispatch({ type: FETCH_ONE, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const getAthletes = (page) => async (dispatch) => {
    try {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        const { data } = await api.fetchAthletes(page);
        // console.log(data)
        dispatch({ type: FETCH_ALL, payload: data });
=======
        const {data } = await api.fetchAthlete();
        dispatch({type: FETCH_ALL, payload: data});
>>>>>>> parent of 43271fc (Add search func)
=======
        const {data } = await api.fetchAthlete();
        dispatch({type: FETCH_ALL, payload: data});
>>>>>>> parent of 43271fc (Add search func)
=======
        const {data } = await api.fetchAthlete();
        dispatch({type: FETCH_ALL, payload: data});
>>>>>>> parent of 43271fc (Add search func)
=======
        const {data } = await api.fetchAthlete();
        dispatch({type: FETCH_ALL, payload: data});
>>>>>>> parent of 43271fc (Add search func)
=======
        const {data } = await api.fetchAthlete();
        dispatch({type: FETCH_ALL, payload: data});
>>>>>>> parent of 43271fc (Add search func)
    } catch (error) {
        console.log(error);
    }
}

export const createAthlete = (athlete) => async (dispatch)=> {
    try {
        const {data} = await api.createAthlete(athlete);
        dispatch({type: CREATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const updateAthlete = (id, athlete) => async (dispatch)=> {
    try {
        const {data} = await api.updateAthlete(id, athlete);
        dispatch({type: UPDATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const deleteAthlete = (id) => async (dispatch)=> {
    try {
        await api.deleteAthlete(id);
        dispatch({type: DELETE, payload: id});
    } catch (error) {
        console.log(error);
    }
}