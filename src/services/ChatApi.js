import {METHOD, SIZE_CONVERSACIONES_CHAT,SIZE_MENSAJES_CHAT} from '../config/api/settings';
import {request} from './GeneralApi';

  export function ExisteChat(usuarioIdDos) {
   return request(`chat/obtener-chat?usuarioIdDos=${usuarioIdDos}`, METHOD.GET);
  }
 
 export function CrearChatIndividuar({data}){
    return request(`chat/individual/crear`, METHOD.POST,data);
 }

  export function EnviarMensaje({data}){
    return request(`chat/enviar-mensaje`, METHOD.POST,data);
 }

 export function ListarMensajes({chat_id, page,data}){
    return request(`chat/obtener-mensajes?chatId=${chat_id}&page=${page}&size=${SIZE_MENSAJES_CHAT}`, METHOD.GET,data);
 }

 export function ListarConversaciones({data, page}){
    return request(`chat/obtener-chats?page=${page}&size=${SIZE_MENSAJES_CHAT}`, METHOD.GET,data);
 }