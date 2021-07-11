import { useEffect, useState,useReducer} from "react";
import {PublicarComentario,ResponderAComentario,EliminarComentario,EliminarRespuestaAComentario} from '../../services/MuroApi';
import {ACTIONS, ComentarioReducer, initialStateCuenta } from '../../contexts/ComentarioReducer';

export function useComentarioHook({comentarios,publicacionId,setCantidadComentarios,cantidadComentarios}){
    const [texto,setTexto]=useState("");
    const [store, dispatch] = useReducer(ComentarioReducer, initialStateCuenta);
    const {coments}=store;
    useEffect(()=>{
        dispatch({ type: ACTIONS.COMENTARIOS, payload: comentarios });
    },[comentarios])

    const handleChangeTextComentario=(e)=>{
        setTexto(e.target.value);
    }
    
    const ingresarComentario =async()=>{
        const data={texto:texto};
           const response=await PublicarComentario({publicacionId,data});
           const {comentarios}=response;
           let c=comentarios;
           //setComentarios(comentarios);
           setTexto('');
           setCantidadComentarios(cantidadComentarios=>cantidadComentarios+1)
           dispatch({ type: ACTIONS.COMENTARIOS, payload: c});

    }

    const ingresarRespuesta =async(comentarioId,textoResp)=>{
        const data={texto:textoResp};
       const response=await ResponderAComentario({publicacionId,comentarioId,data});
        const {comentarios}=response;
           //setComentarios(comentarios);
        dispatch({ type: ACTIONS.COMENTARIOS, payload: comentarios});

    }
    const eliminarComentario= async(comentarioId)=>{

       const response=await EliminarComentario({publicacionId,comentarioId});
       const resp= coments.find(x => x.id === comentarioId).respuestas;
       if(resp.length>0){//tiene respuestas
        const {comentarios}=response;
        dispatch({ type: ACTIONS.COMENTARIOS, payload: comentarios });
       }else{//no tiene respuesta
            let index = coments.map((item) => item.id).indexOf(comentarioId);
            if (index > -1) {
                coments.splice(index, 1);
            }
            dispatch({ type: ACTIONS.COMENTARIOS, payload: coments });
       }
       setCantidadComentarios(cantidadComentarios=>cantidadComentarios-1)
    }
    const eliminarRespuestaAComentario= async(comentarioId,respuestaId)=>{
        const response=await EliminarRespuestaAComentario({publicacionId,comentarioId,respuestaId});
        const {comentarios}=response;
         dispatch({ type: ACTIONS.COMENTARIOS, payload: comentarios });
        
    }

    return {
        ingresarComentario,
        handleChangeTextComentario,
        eliminarComentario,
        ingresarRespuesta,
        eliminarRespuestaAComentario,
        coments,
        texto
    }
}