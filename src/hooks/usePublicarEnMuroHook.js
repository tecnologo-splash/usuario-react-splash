import { useState, useEffect, useReducer } from 'react';
import { PublicarSoloTexto } from '../services/MuroApi';
import { ACTIONS_MURO, storeReducer, initialState } from '../contexts/StoreMuroReducer';

export function usePublicarEnMuroHook() {

  const [store, dispatch] = useReducer(storeReducer, initialState);
  const {datos}=store;

  const publicarSoloTexto=({texto})=>{
        (async () => {
            const response = await PublicarSoloTexto({data:texto}) ;
            const { content } = response;
            dispatch({ type: ACTIONS_MURO.OBTENER_DATOS, payload:datos.concat(content) });
            
        })();
    }

  return {  datos, publicarSoloTexto  }
}