export default (athletes = [], action) =>{
    switch(action.type){
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return athletes;
        default:
            return athletes;
    }
}