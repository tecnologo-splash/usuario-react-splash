import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {InputPublicacion} from '../../Publicaciones/InputPublicacion';

export function ModalCompartirPublicacion({open,setOpen,title='Compartir Publicación'}){
    const [texto,setTexto]=useState("");
    const [msgError,setMsgError]=useState("");
  const handleClose = () => {
    setOpen(false);
  };

  const enviar=()=>{
      //Endpoint compartir
      if(texto===""){
        
      }else{
        handleClose();
      }
 
  }

    return (
        <div>

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth={"sm"} fullWidth>
          <DialogTitle id="form-dialog-title">{title}</DialogTitle>
          <DialogContent>
    
        <InputPublicacion
         setTexto={setTexto}
         textoPublicacion={texto}
         placeH='Texto de la Publicacion*'
        />        
        {msgError}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancelar
            </Button>
            <Button onClick={enviar} color="primary">
              compartir
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
}