import { useState, useEffect, useReducer } from 'react';
import { ListarPublicacionMisSegudiores,PublicarSoloTexto,EliminarPublicacion } from '../services/MuroApi';
import { INITIAL_PAGE } from '../config/api/settings';
import { ACTIONS_MURO, storeReducer, initialState } from '../contexts/StoreMuroReducer';

export function useMuroHook({ tipo_filtro = '' }) {

  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)
  const [store, dispatch] = useReducer(storeReducer, initialState);
  const { datos,cargando } = store;
  useEffect(() => {
    console.log("1 useeffect");
     if (page === INITIAL_PAGE){
      dispatch({ type: ACTIONS_MURO.CARGANDO, payload: true });
      (async () => {
        const response = await ListarPublicacionMisSegudiores({ page, order: "fechaCreado", by: "desc" });
        const { content } = response;
        dispatch({ type: ACTIONS_MURO.OBTENER_DATOS, payload: content });
        
      })();
     }
 
  }, [tipo_filtro, page])

  useEffect(() => {
    console.log("2 useffect");
    if (page === INITIAL_PAGE) return
      setLoadingNextPage(true);
      (async () => {
        const response = await ListarPublicacionMisSegudiores({ page, order: "fechaCreado", by: "desc" });
        const { content } = response;
        console.log("-->",content);
        dispatch({ type: ACTIONS_MURO.OBTENER_DATOS, payload: datos.concat(content) });

      })();

  }, [tipo_filtro, page])

  const publicarSoloTexto=(t)=>{
    console.log(t);
    (async () => {
      const data={texto:t};
        const response = await PublicarSoloTexto({data}) ;
        console.log(response);
        dispatch({ type: ACTIONS_MURO.OBTENER_DATOS, payload:[response].concat(datos) });
        
    })();
  }



  const eliminarPublicacion=(idPublicacion)=>{
    (async () => {
       await EliminarPublicacion({data:idPublicacion}) ;
        
        let index = datos.map((item) => item.id).indexOf(idPublicacion);
        if (index > -1) {
          datos.splice(index, 1);
        }
        dispatch({ type: ACTIONS_MURO.OBTENER_DATOS, payload:datos });
        
    })();
  }

  const publicarImagenVideo=()=>{

  }

  const publicarEnlaceExterno=({datosEnlace})=>{
    
  }


  return { loading:cargando, loadingNextPage, datos, setPage,publicarSoloTexto,eliminarPublicacion,publicarImagenVideo  }
}