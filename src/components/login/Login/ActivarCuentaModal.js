import React from 'react';
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import {useActivarCuentaHook} from './useActivarCuentaHook';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function ActivarCuentaModal({open}){
  
  const { 
    codigo_activacion,
    handleClicReEnviarCodigo,
    handleChangeCodigoActivacion,
    reEnviarButton,
    handleCloseActivarCuenta,
    handleActivarCuenta,
    mensajeActivacion}=useActivarCuentaHook();

  const {mensaje,tipo_mensaje}=mensajeActivacion;

  const mensajeColor=css`
    color:${tipo_mensaje==='ERROR' ? '#F44336' :'#6D31BF'}
  `
   return( 
   <>

  <Dialog
    open={true}
    onClose={handleCloseActivarCuenta}
    aria-labelledby="form-dialog-title"
  >
    <DialogTitle id="form-dialog-title">Activar Cuenta</DialogTitle>
    <DialogContent>
      <DialogContentText className="mb-3">
        Ingrese su código de activación de cuenta que se le envió a su
        correo electronico.
      </DialogContentText>
      <TextField
    fullWidth
    autoFocus 
      variant="outlined"
      label="Clave de Activación"
      color="primary"
      type="password"
      required
      onChange={handleChangeCodigoActivacion}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" >
        <LockOpenIcon />
          </InputAdornment>
        ),
      }}
    />
       <center><div className="mt-1" css={mensajeColor}>
        {mensaje}
        </div></center>
    </DialogContent>
 
    <DialogActions className="d-flex justify-content-between mt-2 mb-3 ml-3 mr-3" >
    <div>
    <Button onClick={handleClicReEnviarCodigo} color="primary" variant="outlined" disabled={reEnviarButton}>
        Reenviar Código
      </Button>
      </div>

      <div>
      <Button onClick={handleCloseActivarCuenta} color="primary" variant="outlined">
        Cancelar
      </Button>
      {" "}
      <Button onClick={handleActivarCuenta} color="primary" variant="contained" disabled={codigo_activacion===''? true : false}>
        Aceptar
      </Button>
      </div>
    </DialogActions>
  </Dialog>

   </>
   
  

   )
}