import {useState} from 'react';
import {ExisteChat} from '../../services/ChatApi';

export function useChatHook(){





const enviarMensajeChat=(mensaje,usuarioIdDos)=>{
    (async()=>{
        const response=await ExisteChat(usuarioIdDos);
        if(response.length>0){//ingreso mensaje
            console.log("ingresar mensaje")
        }else{//creo chat 
            console.log("crear chat")
        }
    })()
}

return {
    enviarMensajeChat
}

}