import React,{useEffect,useRef, useState,useCallback} from 'react';
import {InputMensaje} from './InputMensaje';
import {ButtonChatGrupal} from '../ButtonChatGrupal';

import {HeaderChat} from '../HeaderChat';
import {PerfilAvatar} from '../../Home/Perfil/PerfilAvatar';
import {Mensaje} from './Mensaje';
import {useMensajesChat} from '../../../hooks/chat/useMensajesChat';
import debounce from 'just-debounce-it';


export function ListaMensajes({chatIdSelected,idMe,convHeader,msg_pusher}){

  const messagesEndRef = useRef(null)
  const [enviado,setEnviado]=useState(true);

  const {  lstMensajes,loading,setPage,
  sendMensajeDesdeChat,listarMensajesDelChat,
  dispatchDataPusher}=useMensajesChat(chatIdSelected);

useEffect(() => {
if(msg_pusher.chat_id===convHeader.chat_id){
  console.log(msg_pusher)
  dispatchDataPusher({data:msg_pusher});
}
},[msg_pusher])

useEffect(() => {
 // listarMensajesDelChat();
  setPage(0);
  },[chatIdSelected])
  
const externalRef = useRef();

const debounceHandleNextPage = useCallback(debounce(
  () =>
    setPage(prevPage => prevPage + 1)
  , 200), [setPage])


/*
useEffect(function () {
 // if (isNearScreen) debounceHandleNextPage()
}, [debounceHandleNextPage, isNearScreen])

*/
const handleClick=()=>{
  setEnviado(false)
  debounceHandleNextPage();
}


const scrollToBottom = () => {
  messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
}
useEffect(() => {
  if(enviado){
    scrollToBottom()

  }

}, [lstMensajes]);

  return(
        <>
    <div className="col-md-6 border p-0 ">
    <HeaderChat>
               <div className="d-flex align-items-center">
                <PerfilAvatar img={convHeader.url_perfil}/>

                    <b> {convHeader.nombre_chat} </b>
                </div>
      </HeaderChat>          
    <div className="message-list sidebar  custom-scrollbar border">
      <div  className="col-md-12 mb-3" ref={externalRef} onClick={handleClick}>
        <center>Cargar más mensajes</center>
      </div>
      
        <div className="srcoll">  
               
        {
                
                lstMensajes.map((item,i)=>(
                  <Mensaje key={i}
                  chatIdSelected={chatIdSelected} 
                  idMe={idMe}
                  mensaje={item}
                  />

                ))
            }
      <div ref={messagesEndRef} />

     </div>
           
 </div>
</div>
    
    <ButtonChatGrupal/>
    <InputMensaje chatIdSelected={chatIdSelected} sendMensajeDesdeChat={sendMensajeDesdeChat} setEnviado={setEnviado}/>

</>
    
    )
}