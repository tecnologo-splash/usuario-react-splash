import { createContext, useContext, useReducer } from 'react'
import {storeReducer,initialState } from './StoreLoginReducer';
import {storeReducerCuenta,initialStateCuenta } from './StoreCuentaReducer';

const StoreLoginContext = createContext();

const StoreLoginProvider = ({ children }) =>{
    const [store,dispatch]=useReducer(storeReducer, initialState);
    const [storeCuenta,dispatchCuenta]=useReducer(storeReducerCuenta, initialStateCuenta);

    return (
        <StoreLoginContext.Provider value={[store,dispatch,storeCuenta,dispatchCuenta]}>
            {children}
        </StoreLoginContext.Provider>
    )
}
  

const useStore = () => useContext(StoreLoginContext)[0]//storeReducer
const useDispatch = () => useContext(StoreLoginContext)[1]//disparch
const useStoreCuenta = () => useContext(StoreLoginContext)[2]//store
const useDispatchCuenta = () => useContext(StoreLoginContext)[3]//disparch

export { StoreLoginContext, useStore, useDispatch,StoreLoginProvider,useStoreCuenta,useDispatchCuenta }
