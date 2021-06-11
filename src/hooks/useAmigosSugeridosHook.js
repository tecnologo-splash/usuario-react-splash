import {useState} from 'react';
import {SegurenciasDeSeguidores,ComenzarASeguir} from '../services/SeguidoresApi';

const INITIAL_PAGE=0;
export function useAmigosSugeridosHook(){
    const [datos=[],setDatos]=useState({
        data:[],
        cantidad:0
    });

    const obtenerAmigosSugeridos=()=>{
        (async () => {
            const response=await SegurenciasDeSeguidores({page:INITIAL_PAGE});
         //   console.log(response);
            setDatos({data:response,cantidad:Object.keys(response).length});
        })()
    }

    const seguirUsuario=(usuario_id)=>{
        (async () => {
            const response=await ComenzarASeguir({usuario_id});
            if(response.status >=200 && response.status <227){
                obtenerAmigosSugeridos();
                //setDatos({data:datos.data.filter(prop => prop.usuario_id !== usuario_id)})
            }else{
                console.log("Error de algun tipo");
            }
        
        })()
    }
    return {
        obtenerAmigosSugeridos,
        datos,
        seguirUsuario
    }

}