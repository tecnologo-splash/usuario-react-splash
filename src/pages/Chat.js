import React, { useEffect, useCallback, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { MenuHeader } from '../components/Menu/MenuHeader';
import {ListadoConversaciones} from '../components/Chat/Conversaciones/ListadoConversaciones'
import {ListaMensajes} from '../components/Chat/Mensajes/ListaMensajes';
import {ChatNoSelecionado} from '../components/Chat/Mensajes/ChatNoSelecionado';

import { useChatHook } from '../hooks/chat/useChatHook';
import { useInfoUserHook } from '../hooks/useInfoUserHook';

const useStyles = makeStyles(theme => ({
  content: {
    padding: theme.spacing(3),
    backgroundColor: '#ecf0f1'
  }
}));

export default function Chat() {

  const classes = useStyles();
const {conversaciones,  chatIdSelected,lstMensajes,
  listarMensajesDelChat} =useChatHook();
  const {userInfo}=useInfoUserHook();

  return (
    <>
      <MenuHeader />
    
      <main className={classes.content}>
        <div className="col-md-12">
          <center>Chat</center>
          </div>
          <div className="col-md-12 row ">
          <ListadoConversaciones conversaciones={conversaciones} listarMensajesDelChat={listarMensajesDelChat} chatIdSelected={chatIdSelected}/>

{
  chatIdSelected!==null
  ?     <ListaMensajes chatIdSelected={chatIdSelected} idMe={userInfo.id} dataMensajes={lstMensajes}/>
: <ChatNoSelecionado/>
}
     
          </div>       

      </main>


    </>
  );

}

