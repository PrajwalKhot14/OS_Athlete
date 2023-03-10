import {
    FETCH_ONE,
    FETCH_BY_SEARCH,
    FETCH_ALL,
    CREATE,
    UPDATE,
    DELETE,
} from "../constants/actionTypes";

export default (athletes = [], action) => {
    switch (action.type) {
        case FETCH_BY_SEARCH:
            return action.payload;
        case FETCH_ALL:
            return action.payload;
        case FETCH_ONE:
            return {...athletes, oneAthlete: action.payload};
        case CREATE:
            return [...athletes, action.payload];
        case UPDATE:
            return athletes.map((athlete) =>
                athlete._id === action.payload._id ? action.payload : false
            );
        case DELETE:
            return athletes.filter(
                (athlete) => athlete._id !== action.payload._id
            ); // ? action.payload : false);
        default:
            return athletes;
    }
};
