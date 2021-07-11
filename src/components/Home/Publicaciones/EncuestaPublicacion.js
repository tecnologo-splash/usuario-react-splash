import React from "react";
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

export default function EncuestaPublicacion({ encuestaPublicacion= [],textoPublicacion=[],id,idMe,publicacionId}) {
  const {
    votarPublicacion,votar,
    enc,loading
  }=useVotarEncuestaHook({encuestaPublicacion});

  return (

        <CardContent>
          <Typography paragraph>{textoPublicacion}</Typography>
          <div className="row">
            { !loading ? enc.opciones.map((item,index)=>(
              < Opciones 
              opcion={item}
               key={index} 
              totalVotos={enc.totalVotos} 
              opcion_id_votada={enc.opcion_id_votada}
              encuestaActiva={enc}
              votarPublicacion={votarPublicacion} 
              votar={votar}
              idPublicacion={publicacionId}
              id={id}
              idMe={idMe}
              />
            ))
            :null
            }
         
          </div> 
          {
            !loading ?      <small className="d-flex flex-row-reverse mt-1"> {enc.fechaCierre}</small>
            :null
          }
        </CardContent>

  );
}

export function Opciones({ opcion=[],totalVotos=0,opcion_id_votada,encuestaActiva,votarPublicacion,votar,idPublicacion,id,idMe }) {
 // console.log("total "+totalVotos);
//  console.log("cantidad "+opcion.cantidad_votos);

  return (
    <>
      
      <div className="col-md-1 align-self-center"> 
      {
        opcion_id_votada!=null && opcion_id_votada===opcion.id ? <CheckCircleOutlineIcon /> : 
        encuestaActiva.estado && !votar && opcion_id_votada==null && id!==idMe ? 
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