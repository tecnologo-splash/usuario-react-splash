import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { useConfigHook } from '../../hooks/useConfigHook';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

const testMobile = (valor) => {
  return /^(MOBILE|AMBAS)$/.test(valor);
}

const testCorreo = (valor) => {
  return /^(CORREO|AMBAS)$/.test(valor);
}

export default function Notificaciones() {
  const classes = useStyles();

  const { updateConfigNotificaciones } = useConfigHook();

  const [notifs, setNotifs] = useState({});
  const [update, setUpdate] = useState(true);
  
  useEffect(() => {
    updateConfigNotificaciones(notifs).then((a) => {
      console.log(a)
      setNotifs(a);
    })
  }, [update])

  const handleChangeMobile = (event) => {
    if (event.target.checked) {
      setNotifs({
        ...notifs,
        [event.target.name]: testCorreo(notifs[event.target.name]) ? "AMBAS" : "MOBILE"
      });
    } else {
      setNotifs({
        ...notifs,
        [event.target.name]: testCorreo(notifs[event.target.name]) ? "CORREO" : "NINGUNA"
      });
    }
    setUpdate(!update);
  }

  const handleChangeCorreo = (event) => {
    if (event.target.checked) {
      setNotifs({
        ...notifs,
        [event.target.name]: testMobile(notifs[event.target.name]) ? "AMBAS" : "CORREO"
      });
    } else {
      setNotifs({
        ...notifs,
        [event.target.name]: testMobile(notifs[event.target.name]) ? "MOBILE" : "NINGUNA"
      });
    }
    setUpdate(!update);
  }

  return (
    <>
      <Container maxWidth="md">
        <Paper className={classes.paper}>
          
          <Grid container spacing={3}>
            <Grid item xs={6}>
            </Grid>
            <Grid item xs>
            <Typography variant="h6" className="d-flex justify-content-center mb-3">
                Mobile
            </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="h6" className="d-flex justify-content-center mb-3">
                  Correo
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Typography variant="h6" className="d-flex justify-content-left mb-3">
                Nuevos seguidores
              </Typography>
            </Grid>
            <Grid item xs>
              <Switch
                color="primary"
                checked={testMobile(notifs.nuevo_seguidor)}
                onChange={handleChangeMobile}
                name="nuevo_seguidor"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
            </Grid>
            <Grid item xs>
              <Switch
                color="primary"
                checked={testCorreo(notifs.nuevo_seguidor)}
                onChange={handleChangeCorreo}
                name="nuevo_seguidor"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Typography variant="h6" className="d-flex justify-content-left mb-3">
                Bloqueo y desbloqueo
              </Typography>
            </Grid>
            <Grid item xs>
              <Switch
                color="primary"
                checked={testMobile(notifs.bloqueo_desbloqueo)}
                onChange={handleChangeMobile}
                name="bloqueo_desbloqueo"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
            </Grid>
            <Grid item xs>
              <Switch
                color="primary"
                checked={testCorreo(notifs.bloqueo_desbloqueo)}
                onChange={handleChangeCorreo}
                name="bloqueo_desbloqueo"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Typography variant="h6" className="d-flex justify-content-left mb-3">
                Mensajes del chat
              </Typography>
            </Grid>
            <Grid item xs>
              <Switch
                color="primary"
                checked={testMobile(notifs.chat_mensajes_nuevos)}
                onChange={handleChangeMobile}
                name="chat_mensajes_nuevos"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
            </Grid>
            <Grid item xs>
              <Switch
                color="primary"
                checked={testCorreo(notifs.chat_mensajes_nuevos)}
                onChange={handleChangeCorreo}
                name="chat_mensajes_nuevos"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Typography variant="h6" className="d-flex justify-content-left mb-3">
                Comentarios recibidos
              </Typography>
            </Grid>
            <Grid item xs>
              <Switch
                color="primary"
                checked={testMobile(notifs.comentarios_en_publicacion)}
                onChange={handleChangeMobile}
                name="comentarios_en_publicacion"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
            </Grid>
            <Grid item xs>
              <Switch
                color="primary"
                checked={testCorreo(notifs.comentarios_en_publicacion)}
                onChange={handleChangeCorreo}
                name="comentarios_en_publicacion"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Typography variant="h6" className="d-flex justify-content-left mb-3">
                Reacciones recibidas
              </Typography>
            </Grid>
            <Grid item xs>
              <Switch
                color="primary"
                checked={testMobile(notifs.reacciones_en_publicacion)}
                onChange={handleChangeMobile}
                name="reacciones_en_publicacion"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
            </Grid>
            <Grid item xs>
              <Switch
                color="primary"
                checked={testCorreo(notifs.reacciones_en_publicacion)}
                onChange={handleChangeCorreo}
                name="reacciones_en_publicacion"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
}
