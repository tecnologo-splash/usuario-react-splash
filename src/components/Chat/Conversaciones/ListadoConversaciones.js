import React from 'react';
import './estilos_css/ConversationListItem.css'
import './estilos_css/Messenger.css'
import './estilos_css/Toolbar.css'
import './estilos_css/Message.css';


import {HeaderChat} from '../HeaderChat';
import { Conversacion } from './Conversacion';
export function ListadoConversaciones ({conversaciones=[],listarMensajesDelChat,chatIdSelected}){
    

    return (
        <>
    <div className="col-md-3 offset-md-2 border p-0">
    <HeaderChat>
  <b> Conversaciones</b> 
    </HeaderChat>
    
    <div className="sidebar custom-scrollbar" >

            {
                conversaciones.map((item,i)=>(
                  <Conversacion item={item} key={i} listarMensajesDelChat={listarMensajesDelChat} chatIdSelected={chatIdSelected}/>
                ))
            }      
      </div>
    </div>

        </>       

    )
}