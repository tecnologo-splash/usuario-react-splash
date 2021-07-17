import React,{useEffect,useRef, useState,useCallback} from 'react';
import {InputMensaje} from './InputMensaje';
import {ButtonChatGrupal} from '../ButtonChatGrupal';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {HeaderChat} from '../HeaderChat';
import {PerfilAvatar} from '../../Home/Perfil/PerfilAvatar';
import {Mensaje} from './Mensaje';
import {useMensajesChat} from '../../../hooks/chat/useMensajesChat';
import debounce from 'just-debounce-it';
import { useHistory } from "react-router-dom";


export function ListaMensajes({chatIdSelected,idMe,convHeader,msg_pusher}){
  const estiloCursor=css`cursor:pointer; margin-right:20px`;
  let history = useHistory();

  const messagesEndRef = useRef(null)
  const [enviado,setEnviado]=useState(true);

  const {  lstMensajes,setPage,
  sendMensajeDesdeChat,
  dispatchDataPusher}=useMensajesChat(chatIdSelected);

useEffect(() => {
if(msg_pusher.chat_id===convHeader.chat_id){
  console.log(msg_pusher)
  const fechaFormateada=fechaFormatoPusher(msg_pusher.fecha_envio);
  msg_pusher.fecha_envio=fechaFormateada;
  dispatchDataPusher({data:msg_pusher});
}
},[msg_pusher])

const fechaFormatoPusher=(fecha_pusher)=>{
  let fecha = new Date(fecha_pusher);
  var dateStr =
    ("00" + fecha.getDate()).slice(-2) + "/" +
    ("00" + (fecha.getMonth() + 1)).slice(-2) + "/" +
    fecha.getFullYear() + " " +
    ("00" + fecha.getHours()).slice(-2) + ":" +
    ("00" + fecha.getMinutes()).slice(-2);
    return dateStr;
}

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

const handleClickPerfil=()=>{
  console.log(convHeader);
  //history.push('/home/perfil/'+convHeader.id);

}

  return(
        <>
    <div className="col-md-6 border p-0 ">
    <HeaderChat>
               <div className="d-flex align-items-center">
                <PerfilAvatar img={convHeader.url_perfil} onClick={handleClickPerfil}/>

                    <b> {convHeader.nombre_chat} </b>
                </div>
      </HeaderChat>          
    <div className="message-list sidebar  custom-scrollbar border">
      <div  className="col-md-12 mb-3" ref={externalRef} onClick={handleClick} css={estiloCursor}>
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