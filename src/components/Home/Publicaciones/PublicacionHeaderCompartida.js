import React from 'react';
import CardHeader from "@material-ui/core/CardHeader";
import {PerfilAvatar} from '../Perfil/PerfilAvatar';
import { useHistory } from "react-router-dom";

export function PublicacionHeaderCompartida({nombre,apellido,usuario,url_perfil,id,fecha_publicacion,meId}){
  let history = useHistory();
  const goToPerfil=()=>{
    if(id===meId){
      history.push("/home/mi-perfil/");
    }else{
      history.push("/home/perfil/"+id);

    }
  }

  return (
    <CardHeader
    avatar={
      <PerfilAvatar img={url_perfil}  onClick={goToPerfil}/>
    }
    title={nombre +" "+apellido}
    subheader={usuario+"- "+fecha_publicacion}
  />
  )
}