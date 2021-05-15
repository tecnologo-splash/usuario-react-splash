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

export function Register() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [value, setValue] = useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
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
            <Grid item xs={6}>
              <TextField
              fullWidth
                variant="outlined"
                label="Nombre"
                color="primary"
                type="text"
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
              fullWidth
                variant="outlined"
                label="Apellido"
                color="primary"
                type="text"
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={6} className="mt-3">
              <TextField
                variant="outlined"
                label="Usauario"
                color="primary"
                type="text"
                required
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={6} className="mt-3">
              <TextField
              fullWidth
                variant="outlined"
                label="Contraseña"
                color="primary"
                type="password"
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <VpnKeyIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={6} className="mt-3">
              <TextField
              fullWidth
                variant="outlined"
                label="Email"
                color="primary"
                type="text"
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
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
            <FormLabel component="legend">Genero</FormLabel>

              <RadioGroup row value={value} onChange={handleChange}>
                <FormControlLabel
                  value="mujer"
                  control={<Radio />}
                  label="Mujer"
                />
                <FormControlLabel
                  value="hombre"
                  control={<Radio />}
                  label="Hombre"
                />
                <FormControlLabel
                  value="otro"
                  control={<Radio />}
                  label="Otro"
                />
              </RadioGroup>
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
