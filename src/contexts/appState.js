import React, { createContext, useContext, useReducer } from 'react';
import { func, object } from 'prop-types';

const Context = createContext();

export function AppStateProvider({reducer, initialState = {}, children}){
    const value = useReducer(reducer, initialState)

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

AppStateProvider.propType = {
    reducer: func,
    initialState : object,
}

export function useAppState(){
    return useContext(Context);
}