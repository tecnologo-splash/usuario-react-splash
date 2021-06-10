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
import { useStore,useDispatch } from "../../../contexts/LoginContext";
import { ACTIONS} from "../../../contexts/StoreLoginReducer";

export function ActivarCuentaModal({open}){
  
  const dispatch=useDispatch();
  const {credenciales}=useStore();
  const [codigoActivacion,setCodigoActivacion]=useState('');

  const handleChangeCodigoActivacion=(e)=>{
    setCodigoActivacion(e.target.value);
  }
  const handleClose = () => {
    dispatch({ type: ACTIONS.ACTIVAR_CUENTA_MODAL, payload: false });
  };
  
  const handleClickActivarCuenta=()=>{

    console.log(credenciales.usuario);
  }

  const handleClicReEnviarCodigo=()=>{
    
  }

   return( 
   <>

  <Dialog
    open={true}
    onClose={handleClose}
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
    </DialogContent>
    <DialogActions className="d-flex justify-content-between mt-2 mb-3 ml-3 mr-3" >
    <div>
    <Button onClick={handleClicReEnviarCodigo} color="primary" variant="outlined">
        Reenviar Código
      </Button>
      </div>
      <div>
      <Button onClick={handleClose} color="primary" variant="outlined">
        Candelar
      </Button>
      {" "}
      <Button onClick={handleClickActivarCuenta} color="primary" variant="contained" disabled={codigoActivacion===''? true : false}>
        Aceptar
      </Button>
      </div>
    </DialogActions>
  </Dialog>
   </>
   
  

   )
}