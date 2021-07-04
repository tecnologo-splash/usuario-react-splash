import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { MenuHeader } from '../components/Menu/MenuHeader';
import {ListadoConversaciones} from '../components/Chat/Conversaciones/ListadoConversaciones'

const useStyles = makeStyles(theme => ({
  content: {
    padding: theme.spacing(3),
    backgroundColor: '#ecf0f1'
  }
}));


export default function Chat() {

  const classes = useStyles();


  return (
    <>
       
      <MenuHeader />

      <main className={classes.content}>
        <div className="col-md-12">
          <center>Chat</center>
          </div>
          <div className="col-md-12 row ">

          <ListadoConversaciones/>

      
{/*
  chatIdSelected!==null
  ?     
  <ListaMensajes 
  chatIdSelected={chatIdSelected} 
  idMe={userInfo.id}
   dataMensajes={lstMensajes} 
  sendMensajeDesdeChat={sendMensajeDesdeChat}
  dispatchDataPusher={dispatchDataPusher}
  convSelectUserData={convSelectUserData}

  />

: <ChatNoSelecionado/>

*/}
     
          </div>       

      </main>

    </>
  );

}

