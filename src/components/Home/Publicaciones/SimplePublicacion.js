import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {Acciones} from './Acciones';
import {PublicacionHeader} from './PublicacionHeader';

import {URL_BASE_FILE_STORAGE} from '../../../config/api/settings';
import {PublicacionReaccionada} from './PublicacioReaccionada';


export default function SimplePublicacion({publicacionData}) {
  const{usuario_comun}=publicacionData;
  const {multimedia}=publicacionData;
  const {resumen_reaccion}=publicacionData;

  return (
    <div className="col-md-8 offset-md-2 mb-4">

    <Card>
    <PublicacionHeader
         nombre={usuario_comun.nombre}  
         apellido={usuario_comun.apellido}
        url_perfil={usuario_comun.url_perfil}
        usuario={"@"+usuario_comun.usuario}
        id={usuario_comun.id}
        fecha_publicacion={publicacionData.fecha_creado}
        />
     
     <div className="container">
        <Typography paragraph>
          {publicacionData.texto}
        </Typography>
      </div>
            
      <CardMedia
      component="video"
      src={URL_BASE_FILE_STORAGE+multimedia[0].url}
      title='title'
      controls
      />    
      <CardContent>
      <PublicacionReaccionada resumen_reaccion={resumen_reaccion}/>

  </CardContent>

  {/*
resumen_reaccion.cantidad_me_enoja: 
resumen_reaccion.cantidad_me_gusta: 
resumen_reaccion.cantidad_no_me_gusta: 
resumen_reaccion.cantidad_no_me_interesa: 
mi_reaccion: null
  */}
      <Acciones resumen_reaccion={resumen_reaccion}/>

    </Card>

       </div>
  );
}
