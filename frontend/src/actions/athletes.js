import * as api from "../api";
import { FETCH_ONE, FETCH_BY_SEARCH, FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

// Action creators
export const getAthletes = () => async (dispatch) => {
    try {
        const { data } = await api.fetchAthlete();
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const getAthlete = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchOneAthlete(id);
        dispatch({ type: FETCH_ONE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const getAthleteBySearch = (searchQuery) => async (dispatch) => {
    try {
        const { data } = await api.fetchAthleteBySearch(searchQuery);
        // dispatch({type: FETCH_ALL, payload: data});
        // console.log(data);
        dispatch({ type: FETCH_BY_SEARCH, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const createAthlete = (athlete) => async (dispatch) => {
    try {
        const { data } = await api.createAthlete(athlete);
        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const updateAthlete = (id, athlete) => async (dispatch) => {
    try {
        const { data } = await api.updateAthlete(id, athlete);
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const deleteAthlete = (id) => async (dispatch) => {
    try {
        await api.deleteAthlete(id);
        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error);
    }
};
