import {useState} from 'react';
import {ExisteChat,CrearChatIndividuar, EnviarMensaje, ListarConversacion,ListarMensajes} from '../../services/ChatApi';

export function useChatHook(){


const enviarMensajeChat=async(mensaje,usuarioIdDos)=>{
        const response=await ExisteChat(usuarioIdDos);
    let chatId = response[0].chat_id;
    console.log(chatId);
       if(response.length>0){//ingreso mensaje
            console.log("ingresar mensaje")
            const data = {
                mensaje: mensaje,
                tipo_mensaje: "TEXTO", 
                chat_id: chatId
            }
            console.log(data);
            const response = await EnviarMensaje({data});
        }else{//creo chat 
            console.log("crear chat")
            const data={
                to_usuario_id:usuarioIdDos,
                mensaje: mensaje,
                tipo_mensaje: "TEXTO"
            }
          const response= await CrearChatIndividuar({data});
          console.log(response)
        }
}

const obtenerConversacion = async(usuarioIdDos) =>{
    const response=await ExisteChat(usuarioIdDos);
    if(response.length>0){
        const data = {
            mensaje: response.mensaje,
            from_usuario_id: response.from_usuario_id,
            from_usuario_nombre_apellido: response.from_usuario_nombre_apellido,
            tipo_mensaje: "TEXTO", 
            fecha_envio: response.fecha_envio
        }
    const response = await ListarMensajes({data})
    }
}

return {
    enviarMensajeChat,
    obtenerConversacion
}

}