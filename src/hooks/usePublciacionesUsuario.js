import { useState, useEffect, useReducer } from 'react';
import { ObtenerPublicacionesPorUsuario } from '../services/MuroApi';
import { INITIAL_PAGE } from '../config/api/settings';
import { ACTIONS_MURO, storeReducer, initialState } from '../contexts/StoreMuroReducer';

export function usePublciacionesUsuario({ tipo_filtro = '',usuarioId,otroUsuarioInfo={} }) {

  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)
  const [store, dispatch] = useReducer(storeReducer, initialState);
  const { datos,cargando } = store;
  
  useEffect(() => {
    console.log("1 useeffect");
     if (page === INITIAL_PAGE){
      dispatch({ type: ACTIONS_MURO.CARGANDO, payload: true });
      (async () => {
        const response = await ObtenerPublicacionesPorUsuario({ usuarioId, page, order: "fechaCreado", by: "desc" });
        const { content } = response;
        dispatch({ type: ACTIONS_MURO.OBTENER_DATOS, payload: content });
        
      })();
     }
 
  }, [tipo_filtro, page,usuarioId])

  useEffect(() => {
    console.log("2 useffect");
    if (page === INITIAL_PAGE) return
      setLoadingNextPage(true);
      (async () => {
        const response = await ObtenerPublicacionesPorUsuario({ usuarioId,page, order: "fechaCreado", by: "desc" });
        const { content } = response;
        console.log("here->",content)
        if(otroUsuarioInfo.lo_sigo){
          dispatch({ type: ACTIONS_MURO.OBTENER_DATOS, payload: datos.concat(content) });
        }else{
          console.log("no hay mas datos")
        }

      })();

  }, [tipo_filtro, page,usuarioId])


  

  return { cargando, loadingNextPage, datos, setPage,page,INITIAL_PAGE  }
}