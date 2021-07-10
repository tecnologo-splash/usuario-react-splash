import {useState,useEffect,useReducer} from 'react';
import {SegurenciasDeSeguidores,ComenzarASeguir,DejarDeSeguir} from '../services/SeguidoresApi';
import { ACTIONS, SugerenciasAmigosReducer, initialStateAmigos } from '../contexts/SugerenciasAmigosReducer';
export function useAmigosSugeridosHook(){

    const [store, dispatch] = useReducer(SugerenciasAmigosReducer, initialStateAmigos);
    const {amigos,paginacion}=store;

    useEffect(()=>{
        obtenerAmigosSugeridos();
      },[paginacion])

    const obtenerAmigosSugeridos= async()=>{
        const response=await SegurenciasDeSeguidores({page:paginacion});
        console.log(response);
        dispatch({ type: ACTIONS.AMIGOS, payload:  amigos.concat(response) });
    }


    const seguirUsuario=(usuario_id)=>{
        (async () => {
            const response=await ComenzarASeguir({usuario_id});
            if(response.status >=200 && response.status <227){
                let index = amigos.map((item) => item.usuario_id).indexOf(usuario_id);
                if (index > -1) {
                    amigos.splice(index, 1);
                }
                dispatch({ type: ACTIONS.AMIGOS, payload:amigos });

            }else{
                console.log("Error de algun tipo");
            }
        
        })()
    }

    const dejarDeSeguir=(usuario_id)=>{
        (async () => {
            const response=await DejarDeSeguir({usuario_id});
            console.log(response)
            if(response.status >=200 && response.status <227){
                //setDatos({data:datos.data.filter(prop => prop.usuario_id !== usuario_id)})
            }else{
                console.log("Error de algun tipo");
            }
        
        })()
    }

    const obtenerMasAmigos=()=>{
        dispatch({ type: ACTIONS.PAGINACION, payload: paginacion+1 });
      //  obtenerAmigosSugeridos();
    }   

    return {
        obtenerAmigosSugeridos,
        amigos,
        seguirUsuario,
        dejarDeSeguir,
        obtenerMasAmigos
    }

}