import { ADD_CHARACTER, DELETE_CHARACTER, FILTER, ORDER } from "./reducer"

export const addCharacter = (character) => {
    return {
        type: ADD_CHARACTER,
        payload: character
    }
}
export const deleteCharacter = (id) => {
    return {
        type: DELETE_CHARACTER,
        payload: id
    }
}

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}

export const orderCards = (id) => {
    return {
        type: ORDER,
        payload: id
    }
}

