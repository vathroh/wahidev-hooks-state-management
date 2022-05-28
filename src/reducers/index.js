import kontakReducer from "./kontak"

const initialState = {
    getKontakResult : false,
    getKontakLoading: false,
    getKontakError: false,

    addKontakLoading: false,
    addKontakResult : false,
    addKontakError: false,

    deleteKontakLoading: false,
    deleteKontakResult : false,
    deleteKontakError: false,

    updateKontakLoading: false,
    updateKontakResult : false,
    updateKontakError: false,
    
    detailKontakResult : false
}

const combineReducers = reducers => {
    return (state, action) => {
        return Object.keys(reducers).reduce(
            (acc,prop) => {
                return ({
                    ...acc,
                    ...reducers[prop]({ [prop]: acc[prop] }, action)
                })
            },
            state
        )
    }
}

const appReducers = combineReducers({
kontakReducer,
})

export { initialState, combineReducers, appReducers}