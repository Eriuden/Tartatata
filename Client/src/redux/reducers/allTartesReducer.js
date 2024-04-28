import { GET_ALLTARTE } from "../actions/tarte.action";

const initialState = {}

export default function allTartesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALLTARTE:
            return action.payload
        default:
            return state
    }
}