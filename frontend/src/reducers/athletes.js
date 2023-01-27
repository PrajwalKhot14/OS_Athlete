<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import {
    FETCH_BY_SEARCH,
    FETCH_ALL,
    CREATE,
    UPDATE,
    DELETE,
} from "../constants/actionTypes";
=======
import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";
>>>>>>> parent of 43271fc (Add search func)
=======
import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";
>>>>>>> parent of 43271fc (Add search func)
=======
import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";
>>>>>>> parent of 43271fc (Add search func)

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return {
                ...state,
                athletes: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages,
            };
        case FETCH_BY_SEARCH:
            return {...state, athletes: action.payload};
        case CREATE:
            return [...state, action.payload];
        case UPDATE:
            return state.map((athlete) =>
                athlete._id === action.payload._id ? action.payload : false
            );
        case DELETE:
            return state.filter(
                (athlete) => athlete._id !== action.payload._id
            ); // ? action.payload : false);
        default:
            return state;
    }
};
