import React,{useEffect,useState} from 'react';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ErrorIcon from '@material-ui/icons/Error';
import {logoutSplash} from '../../config/api/tokenLogin';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useHistory } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom'
import { useConfigHook } from '../../hooks/useConfigHook';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  form: {
    width: '100%'
  }
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function EliminarCuenta({userId, username, userGenero}) {
  const classes = useStyles();
  
  const { eliminarCuenta } = useConfigHook();

  const [inputUsername, setInputUsername] = useState('');
  const [open, setOpen] = useState(false);

  let history = useHistory();

  const logOut = () =>  {
    logoutSplash();
    history.push("/");         
  }

  const handleEliminarCuenta = () => {
    if (inputUsername === username) {
      eliminarCuenta(userId).then(() => {
        logOut();
      })
    } else {
      setOpen(true);
    }
  }

  const handleChangeInput = (event) => {
    setInputUsername(event.target.value);
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Container maxWidth="md">
        <Paper className={classes.paper}>
          <Typography variant="h5">
            <b>¿Está {userGenero === 'HOMBRE' ? 'seguro' : userGenero === 'MUJER' ? 'segura' : 'seguro/a'} de que desea eliminar su cuenta?</b>
          </Typography>
          <br/>
          <Typography>
            Su cuenta será eliminada del sistema y no podrá volver a acceder a ella o a su información.
          </Typography>
          <Typography>
            Esta acción es permanente e irreversible.
          </Typography>
          <br/><br/>
          <Typography variant="caption">
            <i>Escriba su nombre de usuario en el campo para eliminar su cuenta</i><br/>
          </Typography>
      
          <Grid container spacing={3}>
            <Grid item xs={3}/>
            <Grid item xs>
              <TextField
                className={classes.form}
                id="outlined"
                defaultValue=""
                variant="outlined"
                onChange={handleChangeInput}
              />
            </Grid>
            <Grid item xs={3}/>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={3}/>
            <Grid item xs>
              <Button 
                className={classes.form} 
                variant="contained" 
                size="large" 
                color="secondary" 
                onClick={handleEliminarCuenta}
                startIcon={<ErrorIcon/>}
              >
                Eliminar mi cuenta
              </Button>
            </Grid>
            <Grid item xs={3}/>
          </Grid>
        </Paper>
        <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
          <Alert severity="error">
            El nombre de usuario no es correcto.
          </Alert>
        </Snackbar>
      </Container>
    </>
  );
}
