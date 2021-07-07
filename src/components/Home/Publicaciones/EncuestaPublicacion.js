import React, { useState, useEffect,useCallback } from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useVotarEncuestaHook } from "../../../hooks/publicar/useVotarEncuestaHook";
const selectorCheck = css`
.MuiRadio-colorSecondary.Mui-checked{
  color:#592393;
}
`;

export default function EncuestaPublicacion({ publicacionData= []}) {
  const { encuesta } = publicacionData;

  const {
    votarPublicacion,votar,
    enc,setEncuesta,
    setEstadoEnc,setVotos,
    encuestaActiva,totalVotos
  }=useVotarEncuestaHook({encuesta});

  console.log(enc);
  const validarCierreEncuesta=useCallback(
    ()=>{
      let today = new Date();
      let fechaCierre = new Date(enc.fecha_cierre);
      var dateStr =
        ("00" + (fechaCierre.getMonth() + 1)).slice(-2) + "/" +
        ("00" + fechaCierre.getDate()).slice(-2) + "/" +
        fechaCierre.getFullYear() + " " +
        ("00" + fechaCierre.getHours()).slice(-2) + ":" +
        ("00" + fechaCierre.getMinutes()).slice(-2);

        let est=true;
      if(fechaCierre<today){
        est=false;
      }
      setEstadoEnc({
        estado:est,
       fechaCierre:"Activa hasta el: "+dateStr
       });

    },[enc.fecha_cierre]
  
  )
  useEffect(() => {
    let total=0;
    enc.opciones.forEach(element => {
     total+=element.cantidad_votos;
    });
    setVotos(total);
    validarCierreEncuesta();
   
  }, [enc.opciones,validarCierreEncuesta,votar]);

  return (

        <CardContent>
          <Typography paragraph>{publicacionData.texto}</Typography>
          <div className="row">
            {enc.opciones.map((item,index)=>(
              < Opciones 
              opcion={item}
               key={index} 
              totalVotos={totalVotos} 
              opcion_id_votada={enc.opcion_id_votada}
              encuestaActiva={encuestaActiva}
              votarPublicacion={votarPublicacion} 
              votar={votar}
              idPublicacion={publicacionData.id}
              />
            ))}
          </div> 
     <small className="d-flex flex-row-reverse mt-1"> {encuestaActiva.fechaCierre}</small>
        </CardContent>

  );
}

export function Opciones({ opcion=[],totalVotos=0,opcion_id_votada,encuestaActiva,votarPublicacion,votar,idPublicacion }) {//C4CFD6
 
  return (
    <>
      
      <div className="col-md-1 align-self-center"> 
      {
        opcion_id_votada!=null && opcion_id_votada===opcion.id ? <CheckCircleOutlineIcon /> : encuestaActiva.estado && !votar && opcion_id_votada==null ? 
        <FormControlLabel control={<Radio />} css={selectorCheck} onClick={()=>votarPublicacion(opcion.id,idPublicacion)} />
    :""
      }
 
     </div>
      

      <div className="col-md-1 align-self-center pb-2">
        
        {totalVotos===0 ? "0" : opcion.cantidad_votos*100/totalVotos}%
        
         </div>
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

export function Votaciones({opcion_id_votada,opcionId,votarPublicacion,idPublicacion,votar,encuestaActivaEstado}){


}