import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SimplePublicacion from '../components/Home/Publicaciones/SimplePublicacion';
import CarrouselPublicacion from '../components/Home/Publicaciones/CarrouselPublicacion';
import EncuestaPublicacion from '../components/Home/Publicaciones/EncuestaPublicacion';
import LinkExternoPublicacion from '../components/Home/Publicaciones/LinkExternoPublicacion';
import {MenuHeader} from '../components/Menu/MenuHeader';
import CrearPublicacion from '../components/Home/Publicaciones/Creacion/CreacionPublicacion';
import {ListAmigosSugeridos} from '../components/Home/AmigosSugeridos/ListAmigosSugeridos';
import {SoloTextoPublicacion} from '../components/Home/Publicaciones/SoloTextoPublicacion';
import Typography from '@material-ui/core/Typography';
import {FiltroPublicacion} from '../components/Home/Publicaciones/FiltroPublicaciones';
import {ListarPublicacionMisSegudiores} from '../services/MuroApi';
import {PublicacionHeader} from '../components/Home/Publicaciones/PublicacionHeader';
import {Acciones} from '../components/Home/Publicaciones/Acciones';
import Avatar from "@material-ui/core/Avatar";
import CreateIcon from '@material-ui/icons/Create';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import {Amigos} from '../components/Home/Perfil/Amigos';
import Card from "@material-ui/core/Card";
import {VisualizarPerfil} from '../components/Home/Perfil/VisualizarPerfil';
import { useParams } from 'react-router';
import { useLocation } from 'react-router-dom'

export default function Perfil() {
  const data = useParams();
console.log(data);

const useStyles = makeStyles(theme => ({
    content: {
        padding: theme.spacing(3),
        backgroundColor:'#ecf0f1'
    },
 }));

  const classes = useStyles();
const [datos,setDatos]=useState([]);
const location = useLocation();
console.log(location.pathname);
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
              <Amigos/>
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

