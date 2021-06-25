import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {InputPublicacion} from '../Home/Publicaciones/InputPublicacion';
import {useChatHook} from '../../hooks/chat/useChatHook';

export function EnviarMensajePerfilUsuario({open,setOpen,title='Editar Publicacion',usuarioIdDos}){
    const [texto,setTexto]=useState("");
    const {enviarMensajeChat}=useChatHook();
    
  const handleClose = () => {
    setOpen(false);
  };


  const enviar=()=>{
    enviarMensajeChat(texto,usuarioIdDos);
    handleClose();
  }

    return (
        <div>

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth={"sm"} fullWidth>
          <DialogTitle id="form-dialog-title">{title}</DialogTitle>
          <DialogContent>
    
        <InputPublicacion
         setTexto={setTexto}
         textoPublicacion={texto}
         placeH='Escriba mensaje'
        />        
    
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancelar
            </Button>
            <Button onClick={enviar} color="primary">
              Enviar Mensaje
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
}