import { useEffect, useState,useReducer} from "react";
import {PublicarComentario,ResponderAComentario,EliminarComentario,EliminarRespuestaAComentario} from '../../services/MuroApi';
import {ACTIONS, ComentarioReducer, initialStateCuenta } from '../../contexts/ComentarioReducer';

export function useComentarioHook({comentarios,publicacionId}){
    const [texto,setTexto]=useState("");
    const [store, dispatch] = useReducer(ComentarioReducer, initialStateCuenta);
    const {coments}=store;
    useEffect(()=>{
        dispatch({ type: ACTIONS.COMENTARIOS, payload: comentarios });
    },[])

    const handleChangeTextComentario=(e)=>{
        setTexto(e.target.value);
    }
    
    const ingresarComentario =async()=>{
        const data={texto:texto};
           const response=await PublicarComentario({publicacionId,data});
           const {comentarios}=response;
           let c=comentarios;
           //setComentarios(comentarios);
           dispatch({ type: ACTIONS.COMENTARIOS, payload: c});

    }

    const eliminarComentario= async(comentarioId)=>{

       const response=await EliminarComentario({publicacionId,comentarioId});
       const resp= coments.find(x => x.id === comentarioId).respuestas;

       if(resp.length>0){//tiene respuestas


       }else{//no tiene respuesta
        let index = coments.map((item) => item.id).indexOf(comentarioId);
        if (index > -1) {
            coments.splice(index, 1);
        }
        dispatch({ type: ACTIONS.COMENTARIOS, payload: coments });


       }
    }
    const eliminarRespuestaAComentario= ()=>{

    }

    return {
        ingresarComentario,
        handleChangeTextComentario,
        eliminarComentario,
        coments
    }
}