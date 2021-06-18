import React,{useState} from "react";
import "emoji-mart/css/emoji-mart.css";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import Link from "@material-ui/core/Link";
import {PerfilAvatar} from '../Perfil/PerfilAvatar';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {useAmigosSugeridosHook} from '../../../hooks/useAmigosSugeridosHook';
import {SIZE_SUGERENCIAS_AMIGOS_MURO} from '../../../config/api/settings';

export function ListAmigosSugeridos() {
const divStyle=css`
background-color: white;
border-radius: 20px;
&:hover {
  cursor:pointer;
  transform: scale(1.03);
  transition: transform .1s;
}
`;
  const {datos,obtenerAmigosSugeridos,seguirUsuario}=useAmigosSugeridosHook();
  useState(()=>{
 obtenerAmigosSugeridos();
  },[])

 return (

  <div className="col-md-3">
  <div className="sticky-top" style={{ top:'80px' }}>
        
  <Typography variant="h5" className="mb-3 pl-3">
    Amigos Sugeridos
  </Typography>

    {datos.data.map((item, index) => (
      <div
        key={index}
        className="col-md-8 mb-4 border shadow-sm d-inline-flex p-2 offset-md-1 nav"
        css={divStyle}
      >
       <CardAmigos userData={item} seguirUsuario={seguirUsuario}/>
      </div>
    ))}

        {                         
            datos.cantidad >SIZE_SUGERENCIAS_AMIGOS_MURO
            ?
    <div
      className="col-md-8 mb-4 border shadow-sm d-flex justify-content-center offset-md-1"
      css={divStyle}
    >
      <Link component="button" variant="body2">
        Ver Más
      </Link>
      </div>
      : ""
      }
  


  </div>
  </div>
  );
}

export function CardAmigos({userData,seguirUsuario}){

  return(
    <>
    <PerfilAvatar img={userData.url_perfil}/>

    <div className="col flex-nowrap">
    <Typography variant="body1">{userData.nombre} {userData.apellido}</Typography>
    <Typography variant="body2" color="textSecondary">
    @{userData.usuario}
    </Typography>
  </div>
  <div className="col-md-12">
    <Button
      style={{ textTransform: "none" }}
      variant="outlined"
      color="primary"
      size="small"
      className="mt-1"
      fullWidth
      onClick={()=>seguirUsuario(userData.usuario_id)}
    >
      <PersonAddIcon className="mr-2" />{" "}
      <Typography> Seguir</Typography>
    </Button>
  </div>
  </>
  )
}