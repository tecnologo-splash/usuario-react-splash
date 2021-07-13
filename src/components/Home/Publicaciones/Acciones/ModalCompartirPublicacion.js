import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {InputPublicacion} from '../../Publicaciones/InputPublicacion';
import { useStore, useDispatch } from '../../../../contexts/MuroContext';
import { ACTIONS_MURO } from '../../../../contexts/StoreMuroReducer';
import {CompartirPublicacion} from '../../../../services/MuroApi';
import Typography from "@material-ui/core/Typography";

export function ModalCompartirPublicacion({open,setOpen,title='Compartir Publicación',publicacionId}){
    const [texto,setTexto]=useState("");
    const [msgError,setMsgError]=useState("");
    const dispatch=useDispatch();
    const store=useStore();
   const { datos } = store;

  const handleClose = () => {
    setOpen(false);
  };

  const enviar=()=>{
      //Endpoint compartir
      if(texto===""){
        setMsgError("Eror ingresar texto de la publicacion");
      }else{
        cc(publicacionId,texto);
        handleClose();
      }
 
  }


  const cc= async(publicacionId,texto)=>{
    const data={
      "texto": texto,
      "publicacion_compartida_id": publicacionId
    }
  const response=await CompartirPublicacion({data});
  console.log(response);
  dispatch({ type: ACTIONS_MURO.OBTENER_DATOS, payload: [response].concat(datos)});

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
        
          <center>
            <Typography variant="button" display="block" gutterBottom  color="secondary">
             {msgError}
            </Typography>
          </center>
        
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