import {useEffect,useState} from 'react';
import {ExisteChat,CrearChatIndividuar, EnviarMensaje, ListarConversaciones,ListarMensajes} from '../../services/ChatApi';
import { ACTIONS} from '../../contexts/ChatReducer';
import { useStore,useDispatch } from "../../contexts/ChatContext";

const INITIAL_PAGE=0;

export function useChatHook(){
    const [page, setPage] = useState(INITIAL_PAGE);
    const [pageMensajes, setPageMensajes] = useState(INITIAL_PAGE);
    const [convSelectUserData,setConvUserData]=useState(null);
    const dispatch = useDispatch();
    const data = useStore();
    const {conversaciones,chatIdSelected,convHeader}=data;
      
      useEffect(()=>{
   //   obtenerConversaciones();
      },[])

const enviarMensajeChat=async(mensaje,usuarioIdDos)=>{
        const response=await ExisteChat(usuarioIdDos);
       if(response.length>0){//ingreso mensaje
        let chatId = response[0].chat_id;

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
          await CrearChatIndividuar({data});
    //      console.log(response)
        }
}



  const obtenerConversaciones= async()=>{
        const response=await ListarConversaciones({page});
        dispatch({ type: ACTIONS.CONVERSACIONES, payload: response});
  }

    const listarMensajesDelChat=async(item,chatId)=>{
     // console.log(chatId);
        setConvUserData(item);
        const response=await ListarMensajes({chatId,page:pageMensajes});
        console.log(response);
        dispatch({ type: ACTIONS.CHATID, payload: chatId});
        const mensajesOrdered=[];
        response.forEach(element => {
          mensajesOrdered.unshift(element);
        });
     
        dispatch({ type: ACTIONS.LISTAMENSAJES, payload: mensajesOrdered});
    }
  

    const setearChatId=(item,chatId)=>{
    // console.log(item)
      dispatch({ type: ACTIONS.CONVERSACIONHEADER, payload: item});
    //  listarMensajesDelChat(item,chatId);
     // dispatch({ type: ACTIONS.CONVHEADER, payload: item});

    }

return {
  setearChatId,
    enviarMensajeChat,
    conversaciones,
    chatIdSelected,
    listarMensajesDelChat,
    setConvUserData,
    convHeader, obtenerConversaciones
}

}