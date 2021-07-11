import {useState,useEffect,useReducer} from 'react';
import {SegurenciasDeSeguidores,ComenzarASeguir,DejarDeSeguir} from '../services/SeguidoresApi';
import { ACTIONS, SugerenciasAmigosReducer, initialStateAmigos } from '../contexts/SugerenciasAmigosReducer';
export function useAmigosSugeridosHook(){
    const {
        amigos,
        paginacion,
        obtenerMasAmigos,
        dejarDeSeguir,
        seguirUsuario,
        obtenerAmigosSugeridos,comensarASeguir}=FuncionesAmigos();

    useEffect(()=>{
        obtenerAmigosSugeridos();
      },[paginacion])
   

    return {
        obtenerAmigosSugeridos,
        amigos,
        seguirUsuario,
        dejarDeSeguir,
        obtenerMasAmigos,comensarASeguir
    }

}

export function FuncionesAmigos(){
    
    const [store, dispatch] = useReducer(SugerenciasAmigosReducer, initialStateAmigos);
    const {amigos,paginacion,lo_sigo}=store;
    console.log(lo_sigo);
    const obtenerAmigosSugeridos= async()=>{
        const response=await SegurenciasDeSeguidores({page:paginacion});
        console.log(response);
        dispatch({ type: ACTIONS.AMIGOS, payload:  amigos.concat(response) });
    }


    const seguirUsuario=async(usuario_id)=>{
        await ComenzarASeguir({usuario_id});
        let index = amigos.map((item) => item.usuario_id).indexOf(usuario_id);
        if (index > -1) {
            amigos.splice(index, 1);
        }
        dispatch({ type: ACTIONS.AMIGOS, payload:amigos });
    }

    const dejarDeSeguir=async(usuario_id)=>{
       await DejarDeSeguir({usuario_id});
       dispatch({ type: ACTIONS.FOLLOW, payload:false });

    }

    const comensarASeguir=async(usuario_id)=>{
        await ComenzarASeguir({usuario_id});
        dispatch({ type: ACTIONS.FOLLOW, payload:true });
    }

    const obtenerMasAmigos=()=>{
        dispatch({ type: ACTIONS.PAGINACION, payload: paginacion+1 });
      //  obtenerAmigosSugeridos();
    }   
    return {
        lo_sigo,
        amigos,
        paginacion,
        obtenerMasAmigos,
        dejarDeSeguir,
        seguirUsuario,
        obtenerAmigosSugeridos,
        comensarASeguir
    }
}