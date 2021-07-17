import React from 'react';
import './estilos_css/ConversationListItem.css'
import './estilos_css/Messenger.css'
import './estilos_css/Toolbar.css'
import './estilos_css/Message.css';

import {useEffect,useState} from 'react';
import {HeaderChat} from '../HeaderChat';
import { Conversacion } from './Conversacion';
import {ListaMensajes} from '../Mensajes/ListaMensajes';
import {ChatNoSelecionado} from '../Mensajes/ChatNoSelecionado';
import { useInfoUserHook } from '../../../hooks/useInfoUserHook';
import { useChatHook } from '../../../hooks/chat/useChatHook';
import Pusher from 'pusher-js';
let pusher = new Pusher('1f2a6fe63e0652eb4139', {
  cluster: 'us2'
});
export function ListadoConversaciones (){
  const {conversaciones, convHeader,setearChatId,obtenerConversaciones} =useChatHook();
    const {chat_id}=convHeader;

  const {userInfo}=useInfoUserHook();

  const [msg_pusher,setMsgPusher]=useState([]);

    useEffect(()=>{
      obtenerConversaciones();
      console.log("-->",userInfo.id);
      var channel = pusher.subscribe(`chat-usuario-${userInfo.id}`);
      channel.bind('nuevo-mensaje', data => {
         console.log(data);
          setMsgPusher(data);
      
      }); 
  
  },[pusher,userInfo.id])

  useEffect(()=>{
    var booleanValue = conversaciones.filter((item) =>item.id===msg_pusher.chat_id).length > 0

    if(!booleanValue){
      obtenerConversaciones();
    }

  },[msg_pusher])


    return (
        <>
    <div className="col-md-3 offset-md-2 border p-0">
    <HeaderChat>
  <b> Conversaciones</b> 
    </HeaderChat>
    
    <div className="sidebar custom-scrollbar" >

            {
                conversaciones.map((item,i)=>(
                  <Conversacion item={item} key={i}
                   setearChatId={setearChatId} 
                   chatIdSelected={chat_id}
                   />
                ))
            }      
      </div>
    </div>

    {
 chat_id!==undefined
  ?  
  <ListaMensajes 
  idMe={userInfo.id}
  chatIdSelected={chat_id}
  convHeader={convHeader}
  msg_pusher={msg_pusher}

  />
  
: <ChatNoSelecionado/>

}
     
        </>       

    )
}