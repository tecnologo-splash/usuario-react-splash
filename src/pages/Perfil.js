import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {MenuHeader} from '../components/Menu/MenuHeader';
import CrearPublicacion from '../components/Home/Publicaciones/Creacion/CreacionPublicacion';
import {FiltroPublicacion} from '../components/Home/Publicaciones/FiltroPublicaciones';
import {MisAmigos} from '../components/Home/Perfil/MisAmigos';
import {VisualizarPerfil} from '../components/Home/Perfil/VisualizarPerfil';
import { useLocation } from 'react-router-dom'
import {VisualizarPerfilOtroUsuario} from '../components/Home/Perfil/VisualizarPerfilOtroUsuario';

const useStyles = makeStyles(theme => ({
  content: {
      padding: theme.spacing(3),
      backgroundColor:'#ecf0f1'
  },
}));

export default function Perfil() {


  const classes = useStyles();
const location = useLocation();
  return (
      <>
      <MenuHeader/>
    <main className={classes.content}>
          
          <div className="row">
      
            <VisualizarPerfil/>
          
      
          <div className="col-md-9">
            {
              location.pathname==="/home/mi-perfil/amigos"
              ?
              <MisAmigos/>
              :
              <>
                  <CrearPublicacion/>
                <FiltroPublicacion/>
              </>
            }
      
          </div>
 
      </div>
  </main>
 

</>
  );

}

