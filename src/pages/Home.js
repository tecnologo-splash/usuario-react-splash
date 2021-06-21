import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {MenuHeader} from '../components/Menu/MenuHeader';
import CrearPublicacion from '../components/Home/Publicaciones/Creacion/CreacionPublicacion';
import {ListAmigosSugeridos} from '../components/Home/AmigosSugeridos/ListAmigosSugeridos';

import {FiltroPublicacion} from '../components/Home/Publicaciones/FiltroPublicaciones';

import {ListarMuro} from '../components/Home/Publicaciones/ListarMuro';


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

            <ListarMuro/>

        

          </div>
 
      </div>
  </main>
 

</>
  );

}

