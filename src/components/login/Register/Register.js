import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Link from '@material-ui/core/Link';

import Grid from "@material-ui/core/Grid";

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

export function Register() {
  const [open, setOpen] = useState(false);

  const [datosUsuario,setDatosUsuario]=useState({
    nombre:null,
    apellido:null,
    usuario:null,
    password:null,
    email:null,
    fecha_nacimiento:null,
    genero:null
  });
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <Button variant="contained" fullWidth className="mt-2" size="large" onClick={handleClickOpen}>
       Crear Cuenta
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Registro</DialogTitle>
        <DialogContent>


          <Grid container spacing={2}  >
          <CampoTexto Label="Nombre" Icon={<AccountCircle />}/>
          <CampoTexto Label="Apellido" Icon={<AccountCircle />}/>
          <CampoTexto Label="Usauario" Icon={<AccountCircle />}/>
          <CampoTexto Label="Contraseña" Icon={<VpnKeyIcon />} Type="password"/>
          <CampoTexto Label="Email" Icon={<EmailIcon />} Type="email"/>
          <Grid item xs={6} className="mt-3">
              <TextField
              fullWidth
                variant="outlined"
                label="Fecha Nacimiento"
                color="primary"
                type="date"
                required
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} className="mt-1"> 
              <GeneroRadio/>
            </Grid>
 
           <Grid item xs={12}> 

           <Typography variant="caption">
                  * Campos obligatirios</Typography>
            </Grid>

            <Grid item xs={12}> 
            <Typography variant="caption" display="block" gutterBottom>
           Al hacer clic en Registrarte,
           
           <Link href="#">
    {'   aceptas las Condiciones, la Política de datos '}
  </Link>
          del servicio en cuestion
      </Typography>
            
           </Grid>
          </Grid>
        </DialogContent>
        <DialogActions className="pb-4 mr-4">
          <Button onClick={handleClose} color="primary">
            Calcelar
          </Button>
          <Button onClick={handleClose} color="primary" variant="contained">
            Registrarme
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export function CampoTexto({Label,Icon,Type="text"}){

  return (
    <Grid item xs={6} className="mt-3">
    <TextField
    fullWidth
      variant="outlined"
      label={Label}
      color="primary"
      type={Type}
      required
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

export function GeneroRadio(){
  const [value, setValue] = useState(null);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const selectorCheck = css`
  .MuiRadio-colorSecondary.Mui-checked{
    color:#592393;
  }
`;
  return (
<>
    <FormLabel component="legend">Genero</FormLabel>

    <RadioGroup row value={value} onChange={handleChange} css={selectorCheck}>
      <FormControlLabel
        value="Mujer"
        control={<Radio />}
        label="Mujer"
      />
      <FormControlLabel
        value="Hombre"
        control={<Radio />}
        label="Hombre"
      />
      <FormControlLabel
        value="Otro"
        control={<Radio />}
        label="Otro"
      />
    </RadioGroup>
    </>
  )
}