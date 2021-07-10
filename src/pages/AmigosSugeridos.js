import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { MenuHeader } from '../components/Menu/MenuHeader';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {useAmigosSugeridosHook} from '../hooks/useAmigosSugeridosHook';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import Link from "@material-ui/core/Link";
import {PerfilAvatar} from '../components/Home/Perfil/PerfilAvatar';
import {CardAmigos} from '../components/Home/AmigosSugeridos/ListAmigosSugeridos';

const useStyles = makeStyles(theme => ({
    content: {
      padding: theme.spacing(3),
      backgroundColor: '#ecf0f1'
    }
  }));
export default function AmigosSugeridos(){
    const classes = useStyles();
    const divStyle=css`
    background-color: white;
    border-radius: 20px;
    &:hover {
      cursor:pointer;
      transform: scale(1.03);
      transition: transform .1s;
    }
    `;
   const {amigos,seguirUsuario,obtenerMasAmigos}=useAmigosSugeridosHook();
    console.log(amigos);

  return (

    <>
     <MenuHeader />
      <main className={classes.content}>
        <div className="container ">
        <center>
  <Typography variant="h5" className="mb-3 pl-3">
    Usuarios Sugeridos
  </Typography>
  </center>
          <div className="row">
        


    {amigos.map((item, index) => (
      <div
        key={index}
        className="col-md-3 mb-4 border shadow-sm d-inline-flex p-2 offset-md-1 nav"
        css={divStyle}
      >
       <CardAmigos userData={item} seguirUsuario={seguirUsuario}/>
      </div>
    ))}
         </div>

    <div
      className="offset-md-1 border shadow-sm d-flex justify-content-center"
      css={divStyle}
      onClick={obtenerMasAmigos}
    >

      <Link component="button" variant="body2">
        Cargar más sugerencias
      </Link>
 
      </div>
 
        </div>
      </main>
    </>

   )

}

