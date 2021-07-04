import React from 'react';
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export function ModalEliminarFoto({userData,openModal,setOpenModal,eliminarFotoUsuario,mensajeActualizarDatos, getDatos,setUpdate}){

    const onCloseModal = () => {
        setOpenModal(false);
    }

    const handleClick = () => {
      setUpdate(true);
      eliminarFotoUsuario(userData.id).then((r) => {
        if (r.status >= 200 && r.status < 226) {
          getDatos();
          setOpenModal(false);
        }
      });
    }
  
    return (
       <>
        <Dialog
          open={openModal}
          onClose={onCloseModal}
          aria-labelledby="form-dialog-title"
        >
        <DialogTitle id="form-dialog-title">Eliminar Foto</DialogTitle>
        <DialogContent>
          <Grid item xs={12} className="mt-3">
          <Typography variant="button">
            ¿Desea eliminar su foto de perfil?
          </Typography>
          </Grid>
        </DialogContent>

        <DialogActions className="pb-4 mr-4">
          <Button  color="primary" onClick={onCloseModal}>
            Cancelar
          </Button>
          <Button color="primary" variant="contained" onClick={handleClick}>
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
      </>
    )
}