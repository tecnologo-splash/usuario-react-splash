import React,{useState} from 'react';
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import { css } from "@emotion/react";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export function ModalEditarFoto({userData,openModal,setOpenModal,actualizarFotoUsuario,mensajeActualizarDatos, getDatos,setUpdate}){
    const mensajeError=css`
      color:#F44336;
    `;


    const [foto, setFoto] = useState(null);

    const onCloseModal = () => {
        setOpenModal(false);
    }

    const handleClick = () => {
      setUpdate(true);
      if (foto && foto[0]){
        actualizarFotoUsuario(userData.id, foto[0]).then((r) => {
          if (r.status >= 200 && r.status < 226) {
            getDatos();
            setOpenModal(false);
          }
        })
      }
    }

    const changeHandler = (event) => {     
      console.log(event.target.files) 
      setFoto(event.target.files);
    };
  
    return (
       <>
        <Dialog
          open={openModal}
          onClose={onCloseModal}
          aria-labelledby="form-dialog-title"
        >
        <DialogTitle id="form-dialog-title">Actualizar Foto</DialogTitle>
        <DialogContent>


          <Grid container spacing={2}  >
         
      
          <Grid item xs={12} className="mt-3">
          <Button variant="contained"
              component="label"
              onChange={changeHandler} 
            >
              Seleccionar archivo
              <input
                type="file"
                multiple="multiple"
                hidden
              />
            </Button>
          </Grid>
          <Grid item xs={12} className="mt-3">
          <Typography variant="button">
            
            {
              foto && foto[0] ? foto[0].name : "Ningún archivo selccionado"
            }
          </Typography>
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