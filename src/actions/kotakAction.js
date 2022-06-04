import axios from "axios";

export const GET_KONTAK_LIST = "GET_KONTAK_LIST";
export const ADD_KONTAK = "ADD_KONTAK";
export const DELETE_KONTAK = "DELETE_KONTAK";
export const DETAIL_KONTAK = "DETAIL_KONTAK";
export const UPDATE_KONTAK = "UPDATE_KONTAK";

export const getKontakList = (dispatch) => {

    //loading
    dispatch({
        type: GET_KONTAK_LIST,
        payload: {
            loading: true,
            data: false,
            errorMessage: false
        }
    })

    axios({
        method: 'GET',
        url: 'https://629a33ea7b866a90ec4b8e9b.mockapi.io/api/v1/kontak',
        timeout: 120000
    })
        .then((response) => {
            dispatch({
                type: GET_KONTAK_LIST,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false
                }
            })
        })
        .catch((error) => {
            dispatch({
                type: GET_KONTAK_LIST,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message
                }
            })
        })
}


export const addKontak = (dispatch, data) => {

    //loading
    dispatch({
        type: ADD_KONTAK,
        payload: {
            loading: true,
            data: false,
            errorMessage: false
        }
    })

    axios({
        method: 'POST',
        url: 'https://629a33ea7b866a90ec4b8e9b.mockapi.io/api/v1/kontak',
        timeout: 120000,
        data: data
    })
        .then((response) => {
            dispatch({
                type: ADD_KONTAK,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false
                }
            })
        })
        .catch((error) => {
            dispatch({
                type: ADD_KONTAK,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message
                }
            })
        })
}


export const deleteKontak = (dispatch, id) => {

    //loading
    dispatch({
        type: DELETE_KONTAK,
        payload: {
            loading: true,
            data: false,
            errorMessage: false
        }
    })

    axios({
        method: 'DELETE',
        url: 'https://629a33ea7b866a90ec4b8e9b.mockapi.io/api/v1/kontak/' + id, 
        timeout: 120000
    })
        .then((response) => {
            dispatch({
                type: DELETE_KONTAK,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false
                }
            })
        })
        .catch((error) => {
            dispatch({
                type: DELETE_KONTAK,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message
                }
            })
        })
}

export const detailKontak = (dispatch, data) => {
    dispatch({
        type: DETAIL_KONTAK,
        payload: {
            data: data
        }
    })
}


export const updateKontak = (dispatch, data) => {

    //loading
    dispatch({
        type: UPDATE_KONTAK,
        payload: {
            loading: true,
            data: false,
            errorMessage: false
        }
    })

    axios({
        method: 'PUT',
        url: 'https://629a33ea7b866a90ec4b8e9b.mockapi.io/api/v1/kontak/' + data.id, 
        timeout: 120000,
        data: data
    })
        .then((response) => {
            dispatch({
                type: UPDATE_KONTAK,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false
                }
            })
        })
        .catch((error) => {
            dispatch({
                type: UPDATE_KONTAK,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message
                }
            })
        })
}