import { createContext, useContext, useReducer } from 'react'
import {storeReducer,initialState } from './StoreLoginReducer';

const StoreLoginContext = createContext();

const StoreLoginProvider = ({ children }) =>{
    const [store,dispatch]=useReducer(storeReducer, initialState);

    return (
        <StoreLoginContext.Provider value={[store,dispatch]}>
            {children}
        </StoreLoginContext.Provider>
    )
}
  

const useStore = () => useContext(StoreLoginContext)[0]//storeReducer
const useDispatch = () => useContext(StoreLoginContext)[1]//disparch

export { StoreLoginContext, useStore, useDispatch,StoreLoginProvider }
