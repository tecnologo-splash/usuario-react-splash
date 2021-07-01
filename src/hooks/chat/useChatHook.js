import {useEffect,useState,useReducer} from 'react';
import {ExisteChat,CrearChatIndividuar, EnviarMensaje, ListarConversaciones,ListarMensajes} from '../../services/ChatApi';
import { ACTIONS, ChatoReducer, initialStateCuenta } from '../../contexts/ChatReducer';

const INITIAL_PAGE=0;

export function useChatHook(){
    const [page, setPage] = useState(INITIAL_PAGE);
    const [pageMensajes, setPageMensajes] = useState(INITIAL_PAGE);

    const [store, dispatch] = useReducer(ChatoReducer, initialStateCuenta);
      const {conversaciones,chatIdSelected,lstMensajes}=store;

      useEffect(()=>{
       obtenerConversaciones();
      },[])

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
            await EnviarMensaje({data});
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



  const obtenerConversaciones= async()=>{
        const response=await ListarConversaciones({page});
        dispatch({ type: ACTIONS.CONVERSACIONES, payload: response});
  }

    const listarMensajesDelChat=async(chatId)=>{
        //setChatId(chatId);
        const response=await ListarMensajes({chatId,page:pageMensajes});
      //  console.log(response);
        dispatch({ type: ACTIONS.CHATID, payload: chatId});

        dispatch({ type: ACTIONS.LISTAMENSAJES, payload: response});

    }

return {
    enviarMensajeChat,
    conversaciones,
    chatIdSelected,
    lstMensajes,
    listarMensajesDelChat
}

}