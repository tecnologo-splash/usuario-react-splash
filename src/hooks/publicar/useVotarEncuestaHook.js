import  {useState,useEffect,useReducer,useCallback} from 'react';
import {VotarEncuesta} from '../../services/MuroApi';
import {ACTIONS,EncuestaVotacionReducer,initialState} from '../../contexts/EncuestaVotacionReducer';

export function useVotarEncuestaHook({encuestaPublicacion=[]}){
    const [store,dispatch]=useReducer(EncuestaVotacionReducer,initialState);
    const{encuestaActiva,votada,totalVotos,encuesta}=store;
    const [loading,setLoading]=useState(true);
    useEffect(() => {
      setLoading(true);
      const votosTotales=totalVotosEncuesta(encuestaPublicacion);
      const estado=validarCierreEncuesta(encuestaPublicacion.fecha_cierre);

      encuestaPublicacion.totalVotos=votosTotales;
      encuestaPublicacion.estado=estado.estado;
      encuestaPublicacion.fechaCierre=estado.fechaCierre;

      dispatch({ type: ACTIONS.DATOS_ENCUESTA, payload:encuestaPublicacion });
      setLoading(false)
    }, [encuestaPublicacion]);

    const totalVotosEncuesta=(ee)=>{
      let total=0;
      ee.opciones.forEach(element => {
       total+=element.cantidad_votos;
      });
      return total;
    }
 
    const votarPublicacion= async(opcionIdEncuesta,publicacionId)=>{

      console.log(opcionIdEncuesta,publicacionId);
       const response=await VotarEncuesta({publicacionId,opcionIdEncuesta});
      console.log(response);
      console.log(encuesta);

      encuesta.opcion_id_votada=opcionIdEncuesta;
        encuesta.opciones.map((i)=>{
          if(i.id===opcionIdEncuesta){
              i.cantidad_votos++;
          }
        })
        console.log(encuesta);
        encuesta.totalVotos=encuesta.totalVotos+1;
      dispatch({ type: ACTIONS.DATOS_ENCUESTA, payload:encuesta });

    }
    const validarCierreEncuesta=(fecha_cierre)=>{
        let today = new Date();
        let fechaCierre = new Date(fecha_cierre);
        var dateStr =
          ("00" + (fechaCierre.getMonth() + 1)).slice(-2) + "/" +
          ("00" + fechaCierre.getDate()).slice(-2) + "/" +
          fechaCierre.getFullYear() + " " +
          ("00" + fechaCierre.getHours()).slice(-2) + ":" +
          ("00" + fechaCierre.getMinutes()).slice(-2);
  
          let est=true;
        if(fechaCierre<today){
          est=false;
        }
        return {estado:est,fechaCierre:"Activa hasta el: "+dateStr}
      //  dispatch({ type: ACTIONS.OBTENER_DATOS, payload:data });

       }

    return {
        votada,
        votarPublicacion,
        enc:encuesta,
        encuestaActiva,
        totalVotos,
        totalVotosEncuesta,
        validarCierreEncuesta,
        loading
        
    }
  
}