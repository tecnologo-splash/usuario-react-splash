import { createContext, useContext, useReducer } from 'react'
import {ChatReducer,initialState } from './ChatReducer';

const ChatContext = createContext();

const ChatContextProvider = ({ children }) =>{
    const [store,dispatch]=useReducer(ChatReducer, initialState);

    return (
        <ChatContext.Provider value={[store,dispatch]}>
            {children}
        </ChatContext.Provider>
    )
}
  

const useStore = () => useContext(ChatContext)[0]//storeReducer
const useDispatch = () => useContext(ChatContext)[1]//disparch


export { ChatContext, useStore, useDispatch,ChatContextProvider }
