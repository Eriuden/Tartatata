import axios from "axios"

export const GET_TARTE = "GET_TARTE"
export const GET_ALLTARTE = "GET_ALLTARTE"
export const GET_TARTE_ERROR = "GET_TARTE_ERROR"
export const ADD_TARTE = "ADD_TARTE"
export const UPDATE_TARTE = "UPDATE_TARTE"
export const DELETE_TARTE = "DELETE_TARTE"

export const getAllTarte = () => {
    return (dispatch) => {
        return axios
            .get(`${process.env.REACT_APP_API_URL}api/tarte`)
            .then((res)=> {
                dispatch({type: GET_ALLTARTE, payload: res.data})
            })
            .catch((err) => window.alert(err))
    }
}

export const getTarte = () => {
    return (dispatch) => {
        return axios
            .get(`${process.env.REACT_APP_API_URL}api/tarte/:id`)
            .then((res)=> {
                dispatch({ type: GET_TARTE, payload:res.data})
            })
            .catch((err)=> window.alert(err))
    }
}

export const addTarte = (data) => {
    return (dispatch) => {
        return axios
            .post(`${process.env.REACT_APP_API_URL}api/tarte`, data)
            .then((res)=> {
                if (res.data.errors) {
                    dispatch({ type: GET_TARTE_ERROR, payload: res.data.errors})
                } else {
                    dispatch({ type:GET_TARTE_ERROR, payload:""})
                }
            })
    }
}

export const updateTarte = (
    tarteId,
    picture,
    name,
    typeDeTarte,
    ingrédients,
    résumé,
    price
) => {
    return (dispatch) => {
        return axios({
            method:"put",
            url: `${process.env.REACT_APP_API_URL}api/tarte/${tarteId}`,
            data: {picture, name, typeDeTarte, ingrédients, résumé, price},
        })
        .then(()=> {
            dispatch({
                type: UPDATE_TARTE,
                payload: {tarteId, picture, name, typeDeTarte, ingrédients,
                résumé, price},
            })
        })
        .catch((err)=> window.alert(err))
    }
}

export const deleteTarte = (
    tarteId,
    picture,
    name,
    typeDeTarte,
    ingrédients,
    résumé,
    price
) => {
    return (dispatch) => {
        return axios ({
            method:"delete",
            url:`${process.env.REACT_APP_API_URL}api/tarte/${tarteId}`,
            data: {picture, name, typeDeTarte, ingrédients, résumé, price}
        })
        .then(()=> {
            dispatch({ type: DELETE_TARTE, payload: {tarteId}})
        })
        .catch(()=> window.alert(err))
    }
}