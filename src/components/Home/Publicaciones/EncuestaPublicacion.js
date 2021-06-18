import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Acciones } from "./Acciones";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { PublicacionHeader } from './PublicacionHeader';
import {PublicacionReaccionada} from './PublicacioReaccionada';

export default function EncuestaPublicacion({ publicacionData }) {
  const { encuesta } = publicacionData;
  //console.log(encuesta.opciones);
  const {usuario_comun}=publicacionData;
  const [totalVotos, setVotos] = useState(0);

  const {resumen_reaccion}=publicacionData;

  useEffect(() => {
    let total=0;
    encuesta.opciones.forEach(element => {
     total+=element.cantidad_votos;
    });
    setVotos(total);
  }, [encuesta.opciones]);

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
        <CardContent>
          <Typography paragraph>{publicacionData.texto}</Typography>


          <div className="row">
            {encuesta.opciones.map((item,index)=>(
              < Opciones opcion={item} key={index} totalVotos={totalVotos}/>

            ))}

          </div>
          <PublicacionReaccionada resumen_reaccion={resumen_reaccion}/>

        </CardContent>

        <Acciones resumen_reaccion={resumen_reaccion}/>
      </Card>
    </div>
  );
}

export function Opciones({  opcion=[],totalVotos=0 }) {//C4CFD6
  return (
    <>
      <div className="col-md-1 align-self-center"> <CheckCircleOutlineIcon /></div>
      <div className="col-md-1 align-self-center">{totalVotos===0 ? "0" : opcion.cantidad_votos*100/totalVotos}% </div>
      <div className="col-md-10">

        <div className="progress position-relative border mb-1" style={{ height: "35px", backgroundColor: '#FFFFFF' }}>

          <div className="progress-bar" role="progressbar" style={{
            width: `${totalVotos===0 ? 0 : opcion.cantidad_votos*100/totalVotos}%`, backgroundColor: '#1DA1F2', transition: ' 1s ease',
            transitionDelay: '1s'
          }}
          aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
          <div className="pl-3 justify-content-start d-flex position-absolute w-100 align-self-center">{opcion.texto}</div>
          <div className="pr-1 justify-content-end d-flex position-absolute w-100 align-self-center"></div>

        </div>
      </div>
    </>
  )
}