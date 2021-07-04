import React,{useEffect,useRef, useState,useCallback} from 'react';
import {InputMensaje} from './InputMensaje';
import {ButtonChatGrupal} from '../ButtonChatGrupal';

import {HeaderChat} from '../HeaderChat';
import {PerfilAvatar} from '../../Home/Perfil/PerfilAvatar';
import {Mensaje} from './Mensaje';
import {useMensajesChat} from '../../../hooks/chat/useMensajesChat';
import debounce from 'just-debounce-it';


export function ListaMensajes({chatIdSelected,idMe,convHeader,msg_pusher}){
  const messageRef = useRef(null)
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
  
useEffect(() => {
  if (messageRef.current) {
    messageRef.current.scrollIntoView(
      {
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest'
      })
  }
})


const externalRef = useRef();



const debounceHandleNextPage = useCallback(debounce(
  () =>
    setPage(prevPage => prevPage + 1)
  , 200), [setPage])
const handleClick=()=>{
  debounceHandleNextPage();
}
/*
useEffect(function () {
 // if (isNearScreen) debounceHandleNextPage()
}, [debounceHandleNextPage, isNearScreen])

*/


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
        cargar mas
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

     </div>
           
 </div>
</div>
    
    <ButtonChatGrupal/>
    <InputMensaje chatIdSelected={chatIdSelected} sendMensajeDesdeChat={sendMensajeDesdeChat}/>

</>
    
    )
}