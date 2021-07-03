import {useEffect,useState} from 'react';
import { EnviarMensaje, ListarMensajes} from '../../services/ChatApi';
import { ACTIONS} from '../../contexts/ChatReducer';
import { useStore,useDispatch } from "../../contexts/ChatContext";

const INITIAL_PAGE=0;

export function useMensajesChat(){
    const [page, setPage] = useState(INITIAL_PAGE);
    const [pageMensajes, setPageMensajes] = useState(INITIAL_PAGE);
    const dispatch = useDispatch();
    const  {lstMensajes,convHeader} = useStore();
    console.log("here  useMensajeChat ",lstMensajes)
    console.log("conv header** ",convHeader);
    const chatId=convHeader.chat_id;



    const listarMensajesDelChat=async(item)=>{
        const response=await ListarMensajes({chatId,page:pageMensajes});
        console.log(response);
        const mensajesOrdered=[];
        response.forEach(element => {
          mensajesOrdered.unshift(element);
        });
     
        dispatch({ type: ACTIONS.LISTAMENSAJES, payload: mensajesOrdered});
    }
  
    const sendMensajeDesdeChat=async ({dataToSend})=>{
      const response=await EnviarMensaje({data:dataToSend});
      console.log(response);
      dispatch({ type: ACTIONS.LISTAMENSAJES, payload: lstMensajes.concat(response)});
    }

    const dispatchDataPusher=({data})=>{
      console.log("1->",lstMensajes);
      console.log("2->",data);
      dispatch({ type: ACTIONS.LISTAMENSAJES, payload: lstMensajes.concat(data)});

    }

return {
    convHeader,
    lstMensajes,
    listarMensajesDelChat,
    sendMensajeDesdeChat,
    dispatchDataPusher,

}

}