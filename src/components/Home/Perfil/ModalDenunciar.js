import React,{useState} from 'react';
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';


export function ModalDenunciar({open, setOpen, datosUsuario, denunciarUsuario}){

  const [motivo, setMotivo] = useState('SPAM');
  const [exito, setExito] = useState(false);
  const [error, setError] = useState(false);

  const onCloseModal = () => {
      setOpen(false);
  }

  const handleClick = () => {
    denunciarUsuario({
      "usuario_denunciado_id": datosUsuario.id,
      "tipo": motivo
    }).then((r) => {
      if (r.usuario_denunciado) setExito(true);
      else setError(true);
    });
  }

  const handleChange = (event) => {
    setMotivo(event.target.value);
  }

  return (
      <>
      <Dialog
        open={open}
        onClose={onCloseModal}
        aria-labelledby="form-dialog-title"
      >
      <DialogTitle id="form-dialog-title">Reportar a {datosUsuario.usuario}</DialogTitle>
      <DialogContent>
      { exito ? 
        <Typography>
          Se ha enviado tu reporte.
        </Typography>
        :
        error ? 
        <Typography>
          Se ha producido un error inesperado.
        </Typography>
        :
        <Grid container spacing={2}  >
        <FormLabel component="legend">Motivo</FormLabel>
        <RadioGroup aria-label="motivo" name="motivo" value={motivo} onChange={handleChange}>
          <FormControlLabel value="SPAM" control={<Radio />} label="Spam" />
          <FormControlLabel value="CUENTA_FALSA" control={<Radio />} label="Cuenta falsa" />
          <FormControlLabel value="CONTENIDO_INAPROPIADO" control={<Radio />} label="Contenido inapropiado" />
        </RadioGroup>
        </Grid>
      } 
      </DialogContent>

        <DialogActions className="pb-4 mr-4">
          { exito || error ? 
            <Button
              onClick={onCloseModal}
              color="primary" 
              variant="contained"
            >
              Cerrar
            </Button>
            :
            <div>
              <Button  color="primary" onClick={onCloseModal}>
                Cancelar
              </Button>
              <Button color="primary" variant="contained" onClick={handleClick}>
                Enviar
              </Button>
            </div>
          }
        </DialogActions>
      </Dialog>
    </>
  )

}