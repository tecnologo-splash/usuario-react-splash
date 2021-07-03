import {useEffect,useState} from 'react';
import { EnviarMensaje, ListarMensajes} from '../../services/ChatApi';
import { ACTIONS} from '../../contexts/ChatReducer';
import { useStore,useDispatch } from "../../contexts/ChatContext";

const INITIAL_PAGE=0;

export function useMensajesChat(chatIdSelected){
    const [page, setPage] = useState(INITIAL_PAGE);
    const [nextPageMensajes, setLoadingNextPage] = useState(false);
    const dispatch = useDispatch();
    const  {lstMensajes,convHeader} = useStore();
    console.log("here  useMensajeChat ",chatIdSelected,lstMensajes)
    //console.log("conv header** ",convHeader);
    const chatId=convHeader.chat_id;
  const [loading,setLoading]=useState(false);
 
  console.log("--------------------")
  console.log(chatId);
 console.log(chatIdSelected);
 console.log(page);
 console.log("--------------------")
      useEffect(() => {
       console.log("1 useeffect ");
       console.log(page);
        if (page === INITIAL_PAGE){
          listarMensajesDelChat();
        }
    
     }, [page,chatIdSelected])
   
  
     useEffect(() => {
       console.log("2 useffect");
       if (page===INITIAL_PAGE) return;

        setLoadingNextPage(true);
        listarMensajesDelChatPaginado();
       
     }, [page,chatIdSelected])


    const listarMensajesDelChat=async(item)=>{
        const response=await ListarMensajes({chatId,page});
        console.log(response);
        const mensajesOrdered=[];
        response.forEach(element => {
          mensajesOrdered.unshift(element);
        });
     
        dispatch({ type: ACTIONS.LISTAMENSAJES, payload: mensajesOrdered});
    }
  


    const listarMensajesDelChatPaginado=async()=>{
      const response=await ListarMensajes({chatId,page});
      console.log("****",response)
      const mensajesOrdered=[];
      response.forEach(element => {
        mensajesOrdered.unshift(element);
      });

      dispatch({ type: ACTIONS.LISTAMENSAJES, payload: mensajesOrdered.concat(lstMensajes)});
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
    loading,setLoading,setPage,nextPageMensajes

}

}