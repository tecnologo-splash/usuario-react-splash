import React,{useEffect,useRef, useState} from 'react';
import {InputMensaje} from './InputMensaje';
import {ButtonChatGrupal} from '../ButtonChatGrupal';

import {HeaderChat} from '../HeaderChat';
import {PerfilAvatar} from '../../Home/Perfil/PerfilAvatar';
import {Mensaje} from './Mensaje';
import {useMensajesChat} from '../../../hooks/chat/useMensajesChat';

export function ListaMensajes({chatIdSelected,idMe,convHeader,msg_pusher}){
  const messageRef = useRef(null)
const {  lstMensajes,
  sendMensajeDesdeChat,listarMensajesDelChat,
  dispatchDataPusher}=useMensajesChat();
useEffect(() => {
if(msg_pusher.chat_id===convHeader.chat_id){
  console.log(msg_pusher)
  dispatchDataPusher({data:msg_pusher});
}},[msg_pusher])

useEffect(() => {
  listarMensajesDelChat();
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
  <div className="col-md-12 mb-3"></div>

        <div className="srcoll" ref={messageRef}>  
               
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