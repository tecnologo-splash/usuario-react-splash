import React,{useState} from 'react';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import { css } from "@emotion/react";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";

import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import EmailIcon from "@material-ui/icons/Email";

export function ModalEditarMisDatos({userData,openModal,setOpenModal,actualizarDatosUsuario,mensajeActualizarDatos}){
    const mensajeError=css`
      color:#F44336;
    `;

    const {nombre,apellido,fecha_nacimiento,correo,biografia,id} = userData;
    const [userDataUpdate, setUserDataUpdate] = useState({nombre,apellido,fecha_nacimiento,
      correo,biografia,id});
    const onCloseModal=()=>{
        setOpenModal(false);
    }
    const handleChangeUdpate=(e)=>{
        console.log(e.target.name, e.target.value)
        setUserDataUpdate({...userDataUpdate,[e.target.name]:e.target.value});
    }
    const handleClick=()=>{
      console.log(userDataUpdate)
       actualizarDatosUsuario (userDataUpdate);
    }

  
    return (
       <>
        <Dialog
          open={openModal}
          onClose={onCloseModal}
          aria-labelledby="form-dialog-title"
        >
        <DialogTitle id="form-dialog-title">Actualizar Mis Datos</DialogTitle>
        <DialogContent>


          <Grid container spacing={2}  >
          <CampoTexto Label="Nombre" Icon={<AccountCircle />}  nombre="nombre"  datos={userDataUpdate.nombre} handleChangeUdpate={handleChangeUdpate}/>
          <CampoTexto Label="Apellido" Icon={<AccountCircle />} nombre="apellido" datos={userDataUpdate.apellido} handleChangeUdpate={handleChangeUdpate}/>
          <CampoTexto Label="Email" Icon={<EmailIcon />} Type="email" nombre="correo" datos={userDataUpdate.correo} handleChangeUdpate={handleChangeUdpate}/>
      
          <Grid item xs={6} className="mt-3">
              <TextField
              fullWidth
                variant="outlined"
                label="Fecha Nacimiento"
                color="primary"
                type="date"
                name="fecha_nacimiento"
                onChange={handleChangeUdpate}
                value={userDataUpdate.fecha_nacimiento}
                required
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>

            <Grid item xs={12} className="mt-3">
              <TextField
              fullWidth
              multiline
              value={userDataUpdate.biografia === null ? "" : userDataUpdate.biografia}
              rows={3}
              onChange={handleChangeUdpate}

                variant="outlined"
                label="Biografia"
                color="primary"
                name="biografia"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <div className="col-md-12" css={mensajeError}><center><b>{mensajeActualizarDatos}</b></center></div>

            
        
          </Grid>
        </DialogContent>

        <DialogActions className="pb-4 mr-4">
          <Button  color="primary" onClick={onCloseModal}>
            Cancelar
          </Button>
          <Button color="primary" variant="contained" onClick={handleClick}>
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
      </>
    )

}

export function CampoTexto({Label,Icon,Type="text",nombre,datos,handleChangeUdpate}){

    return (
      <Grid item xs={6} className="mt-3">
      <TextField
      fullWidth
        variant="outlined"
        label={Label}
        color="primary"
        type={Type}
        value={datos}
        onChange={handleChangeUdpate}
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
  