import { useState, useEffect, useReducer } from 'react';
import { ObtenerPublicacionesPorUsuario,EditarPublicacion,EliminarPublicacion } from '../services/MuroApi';
import { INITIAL_PAGE } from '../config/api/settings';
import { ACTIONS_MURO, storeReducer, initialState } from '../contexts/StoreMuroReducer';

export function usePublciacionesUsuario({usuarioId,otroUsuarioInfo={} }) {

  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const [tipoFiltro,setTipoFiltro]=useState("fechaCreado");
  const [page, setPage] = useState(INITIAL_PAGE)
  const [store, dispatch] = useReducer(storeReducer, initialState);
  const { datos,cargando } = store;
  
  useEffect(() => {
    console.log("1 useeffect");
     if (page === INITIAL_PAGE){
      dispatch({ type: ACTIONS_MURO.CARGANDO, payload: true });
      (async () => {
        const response = await ObtenerPublicacionesPorUsuario({ usuarioId, page, order: tipoFiltro, by: "desc" });
        const { content } = response;
        dispatch({ type: ACTIONS_MURO.OBTENER_DATOS, payload: content });
        
      })();
     }
 
  }, [tipoFiltro, page,usuarioId])

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

  }, [tipoFiltro, page,usuarioId])


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

  const editarPublicacion=(publicacionId,t)=>{
    (async () => {
      const data={texto:t};
     await EditarPublicacion({publicacionId,data}) ;
      let index = datos.map((item) => item.id).indexOf(publicacionId);
       datos[index].texto=t;
        dispatch({ type: ACTIONS_MURO.OBTENER_DATOS, payload:datos });
        
    })();
  }


  return { cargando, loadingNextPage, datos, setPage,page,INITIAL_PAGE,setTipoFiltro,editarPublicacion,eliminarPublicacion  }
}