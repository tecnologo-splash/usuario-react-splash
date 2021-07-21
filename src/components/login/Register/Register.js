import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Link from '@material-ui/core/Link';

import Grid from "@material-ui/core/Grid";
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import EmailIcon from "@material-ui/icons/Email";
import FormLabel from '@material-ui/core/FormLabel';
import Typography from '@material-ui/core/Typography';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {useRegisterHook} from '../../../hooks/useRegisterHook';

export function Register() {
  const mensajeError=css`
  color:#F44336;
`;

  const {
    openAlert, 
     mensaje,
     handleChangeRegister,
     onClickRegister,
     valueCombo,
     handleModalRegister,
     handleCloseAlertExito,
     disabledButton,
      openModalRegister}=useRegisterHook();

  return (
    <div>
      <Button variant="contained" fullWidth className="mt-2" size="large" onClick={handleModalRegister}>
       Crear Cuenta
      </Button>

      <Dialog
        open={openModalRegister}
        onClose={handleModalRegister}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Registro</DialogTitle>
        <DialogContent>


          <Grid container spacing={2}  >
          <CampoTexto Label="Nombre" Icon={<AccountCircle />}  nombre="nombre" handleChangeRegister={handleChangeRegister}/>
          <CampoTexto Label="Apellido" Icon={<AccountCircle />} nombre="apellido" handleChangeRegister={handleChangeRegister} />
          <CampoTexto Label="Usuario" Icon={<AccountCircle />} nombre="usuario" handleChangeRegister={handleChangeRegister}/>
          <CampoTexto Label="Contraseña" Icon={<VpnKeyIcon />} Type="password" nombre="clave" handleChangeRegister={handleChangeRegister}/>
          <CampoTexto Label="Email" Icon={<EmailIcon />} Type="email" nombre="correo" handleChangeRegister={handleChangeRegister}/>
          
          <Grid item xs={6} className="mt-3">
              <TextField
              fullWidth
                variant="outlined"
                label="Fecha Nacimiento"
                color="primary"
                type="date"
                onChange={handleChangeRegister}
                name="fecha_nacimiento"
                required
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} className="mt-1"> 
              <GeneroRadio value={valueCombo} handleChangeRegister={handleChangeRegister}/>
            </Grid>
            <div className="col-md-12" css={mensajeError}><center><b>{mensaje}</b></center></div>

                  <TextoDeRegistro/>
        
          </Grid>
        </DialogContent>

        <DialogActions className="pb-4 mr-4">
          <Button onClick={handleModalRegister} color="primary">
            Cancelar
          </Button>
          <Button onClick={onClickRegister} color="primary" variant="contained" disabled={disabledButton}>
            Registrarme
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleCloseAlertExito}>
        <Alert onClose={handleCloseAlertExito} variant="outlined" style={{color:'black', backgroundColor:'white' }}>
         ¡Registrado con éxito!<br/>
         Para activar su cuenta diríjase a su email
        </Alert>
      </Snackbar>

    </div>
  );
}

export function CampoTexto({Label,Icon,Type="text",nombre,handleChangeRegister}){

  return (
    <Grid item xs={6} className="mt-3">
    <TextField
    fullWidth
      variant="outlined"
      label={Label}
      color="primary"
      type={Type}
      onChange={handleChangeRegister}
      required
      name={nombre}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" >
            {Icon}
          </InputAdornment>
        ),
      }}
    />
  </Grid>
  )

}

export function GeneroRadio({valueCombo,handleChangeRegister}){

  const selectorCheck = css`
  .MuiRadio-colorSecondary.Mui-checked{
    color:#592393;
  }
`;
  return (
<>
    <FormLabel component="legend">Género</FormLabel>

    <RadioGroup row value={valueCombo} css={selectorCheck} onChange={handleChangeRegister}>
      <FormControlLabel
        value="MUJER"
        control={<Radio />}
        name="genero"
        label="Mujer"
      />
      <FormControlLabel
        value="HOMBRE"
        control={<Radio />}
        name="genero"
        label="Hombre"
      />
      <FormControlLabel
        value="OTRO"
        control={<Radio />}
        name="genero"
        label="Otro"
      />
    </RadioGroup>
    </>
  )
}

export function TextoDeRegistro(){
  return (
    <>
       <Grid item xs={12}> 

<Typography variant="caption">
       * Campos obligatorios</Typography>
 </Grid>

 <Grid item xs={12}> 
 <Typography variant="caption" display="block" gutterBottom>
Al hacer clic en Registrarte, aceptas las&nbsp;

<Link href="#">
    condiciones y política de datos
 </Link>
 &nbsp;del servicio en cuestión.
</Typography>
 
</Grid>
    </>
  )
}