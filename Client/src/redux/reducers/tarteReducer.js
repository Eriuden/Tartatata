import { UPDATE_TARTE, DELETE_TARTE, GET_TARTE } from "../actions/tarte.action";

const initialState = {}

export default function tarteReducer(state = initialState, action) {
    switch (action.type) {
        case GET_TARTE:
            return action.payload

        case UPDATE_TARTE:
            return state.map((tarte) => {
                if (tarte._id === action.payload.tarteId) {
                    return {
                        ...tarte,
                        name: action.payload.name,
                        typeDeTarte: action.payload.typeDeTarte,
                        ingrédients: action.payload.ingrédients,
                        résumé: action.payload.résumé,
                        price: action.payload.price,
                    }
                } else return tarte
            })
        
        case DELETE_TARTE:
            return state.filter((tarte) => tarte._id !== action.payload.tarteId)
        
        default:
            return state
    }
}