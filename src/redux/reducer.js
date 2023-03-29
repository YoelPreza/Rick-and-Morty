export const ADD_CHARACTER = "ADD_CHARACTER";
export const DELETE_CHARACTER = "DELETE_CHARACTER";
export const FILTER = "FILTER";
export const ORDER = "ORDER";


const initialState = {
    myFavorites: [],
    allCharacters: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHARACTER:
            return {
                allCharacters: [...state.allCharacters, action.payload],
                myFavorites: [...state.allCharacters, action.payload]
            }
        case DELETE_CHARACTER:
            return {
                ...state,
                myFavorites: state.myFavorites.filter((del) => del.id !== action.payload)
            }
        case FILTER:
            if (action.payload === 'All') return {...state, myFavorites: state.allCharacters}
            return {
                ...state,
                myFavorites: state.allCharacters?.filter(fav => fav.gender === action.payload)
            }
        case ORDER:
            const sortedCharacters = state.allCharacters
            if (action.payload === "Asc") 
            sortedCharacters.sort((a, b) => a.id - b.id)
            else sortedCharacters.sort((a, b) => b.id - a.id)
            return {
                ...state,
                myFavorites: sortedCharacters
            }
        default:
            return state;
    }

};

export default rootReducer;