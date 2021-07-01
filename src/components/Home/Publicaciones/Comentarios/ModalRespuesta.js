import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export  function ModalRespuesta({open,setOpen,ingresarRespuesta,comentarioId}) {
    const [textoResp,setTextoResp]=useState('');

    const handleClickRespuesta = () => {
        ingresarRespuesta(comentarioId,textoResp);
        setOpen(false);
    };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
  
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Agregar Respuesta al Comentario</DialogTitle>
        <DialogContent>

          <TextField
            autoFocus
            type="text"
            placeholder='Ingresar Respuesta'
            fullWidth
            onChange={(e)=>setTextoResp(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleClickRespuesta} color="primary">
            Agregar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}