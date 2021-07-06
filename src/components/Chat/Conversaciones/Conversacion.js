import React from 'react';
import {URL_BASE_FILE_STORAGE} from '../../../config/api/settings';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
export function Conversacion({item,setearChatId,chatIdSelected}){

    const handleClick=()=>{
        setearChatId(item,item.chat_id);
    }
const estilo=css`background-color:${chatIdSelected===item.chat_id ? '#eeeef1': ''};`
    
    return (
        
        <div className={"conversation-list-item border-bottom "} css={estilo} onClick={handleClick}>
        <img className="conversation-photo" src={URL_BASE_FILE_STORAGE+item.url_perfil} alt="conversation" />
        <div className="conversation-info">
            <h1 className="conversation-title">{item.nombre_chat}   <p className="conversation-snippet"> {item.chat_grupal ?'Grupo' :  "Individual"}</p></h1>
           {/* <p className="conversation-snippet">Ultimo Mensaje: {item.fecha_ultimo_mensaje}</p>*/}
        </div>
        </div>
              
      
    )
}