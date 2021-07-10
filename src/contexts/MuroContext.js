import { createContext, useContext, useReducer } from 'react'
import {storeReducer,initialState } from './StoreMuroReducer';

const StoreMuroContext = createContext();

const StoreMuroProvider = ({ children }) =>{
    const [store,dispatch]=useReducer(storeReducer, initialState);

    return (
        <StoreMuroContext.Provider value={[store,dispatch]}>
            {children}
        </StoreMuroContext.Provider>
    )
}
  

const useStore = () => useContext(StoreMuroContext)[0]//storeReducer
const useDispatch = () => useContext(StoreMuroContext)[1]//disparch

export { StoreMuroContext, useStore, useDispatch,StoreMuroProvider }
