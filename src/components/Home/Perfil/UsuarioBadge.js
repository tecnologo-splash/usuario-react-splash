import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from '@material-ui/core/Avatar'
/** @jsxImportSource @emotion/react */
import {  css } from "@emotion/react";
import { useHistory } from "react-router-dom";
import { URL_BASE_FILE_STORAGE } from '../../../config/api/settings';

export function UsuarioBadge({user}){

  let history = useHistory();
  const goToPerfil = () => {
    history.push("/home/perfil/"+user.id);
  }

  const estilo = css`cursor:pointer;`

  return (
    <>  
    { user ? 
      <Grid item xs={6}>
        <Grid container>
          <Grid item xs className="mt-3" align="center">
            <Avatar css={estilo} onClick={goToPerfil} src={URL_BASE_FILE_STORAGE + user.url_perfil}>{user.nombre.slice(0,1).toUpperCase()}</Avatar>
          </Grid>
          <Grid item xs={9} className="mt-3">
            <Grid item xs={12}>
              <Typography css={estilo}>{user.nombre} {user.apellido}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography css={estilo} variant='button'>@{user.usuario}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      :null
      }
    </>
  )
}