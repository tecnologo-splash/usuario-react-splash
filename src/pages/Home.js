import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SimplePublicacion from '../components/Home/Publicaciones/SimplePublicacion';
import CarrouselPublicacion from '../components/Home/Publicaciones/CarrouselPublicacion';
import EncuestaPublicacion from '../components/Home/Publicaciones/EncuestaPublicacion';
import LinkExternoPublicacion from '../components/Home/Publicaciones/LinkExternoPublicacion';
import {MenuHeader} from '../components/Menu/MenuHeader';
import CrearPublicacion from '../components/Home/Publicaciones/Creacion/CreacionPublicacion';
import {ListAmigosSugeridos} from '../components/Home/AmigosSugeridos/ListAmigosSugeridos';
import {FiltroPublicacion} from '../components/Home/Publicaciones/FiltroPublicaciones';


export default function Home() {
  
const useStyles = makeStyles(theme => ({
    content: {
        padding: theme.spacing(3),
        backgroundColor:'#ecf0f1'
    }
 }));

  const classes = useStyles();
  
  return (
      <>
      <MenuHeader/>

    <main className={classes.content}>
          
          <div className="row">

            <ListAmigosSugeridos/>
     
          <div className="col-md-9">
          <CrearPublicacion/>
          <FiltroPublicacion/>
          <LinkExternoPublicacion/>

          <EncuestaPublicacion/>
          <CarrouselPublicacion/>
          <SimplePublicacion/>   
          </div>
 
      </div>
  </main>
 

</>
  );
}
