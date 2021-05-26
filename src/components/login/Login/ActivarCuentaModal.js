import React,{useState} from 'react';
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export function ActivarCuentaModal({setOpen,open}){


  const handleClose = () => {
    setOpen(false);
  };
   return( 
   <>

  <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="form-dialog-title"
  >
    <DialogTitle id="form-dialog-title">Activar Cuenta</DialogTitle>
    <DialogContent>
      <DialogContentText className="mb-3">
        Ingrese su código de activación de cuenta que se le envió a su
        correo electronico.
        <br />
        En caso de que su codigo haya expierado debe volverse a registrar.
      </DialogContentText>
      <TextField
    fullWidth
      variant="outlined"
      label="Clave de Activación"
      color="primary"
      type="text"
      required
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" >
        <LockOpenIcon />
          </InputAdornment>
        ),
      }}
    />
    </DialogContent>
    <DialogActions className="mt-2 mb-3 mr-3">
      <Button onClick={handleClose} color="primary" variant="outlined">
        Candelar
      </Button>
      <Button onClick={handleClose} color="primary" variant="contained">
        Aceptar
      </Button>
    </DialogActions>
  </Dialog>
   </>
   
  

   )
}