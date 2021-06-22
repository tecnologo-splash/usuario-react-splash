import React, { useState, useEffect,useCallback } from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

export default function EncuestaPublicacion({ publicacionData= []}) {
  const { encuesta } = publicacionData;
  //console.log(encuesta);
  const [totalVotos, setVotos] = useState(0);
  const [encuestaActiva, setEstadoEnc] = useState({
    estado:null,
    fechaCierre:null
  });
 
  const validarCierreEncuesta=useCallback(
    ()=>{
      let today = new Date();
      let fechaCierre = new Date(encuesta.fecha_cierre);
      let dd = String(fechaCierre.getDate()).padStart(2, '0');
      let mm = String(fechaCierre.getMonth() + 1).padStart(2, '0'); //January is 0!
      let yyyy = fechaCierre.getFullYear();
      fechaCierre = dd + '/' +  mm + '/' + yyyy;
      let parts = fechaCierre.match(/(\d+)/g);
      let   fechaCierre2=   new Date(parts[0], parts[1]-1, parts[2]); // months are 0-based
      
      if(today.getTime()>fechaCierre2.getTime()){
        setEstadoEnc({
          estado:false,
          fechaCierre:"Cerrada "+fechaCierre
        });
      }else{
        setEstadoEnc({
         estado:true,
        fechaCierre:"Activa hasta el: "+fechaCierre
        });
      }
    },[encuesta.fecha_cierre]
  
  )
  useEffect(() => {
    let total=0;
    encuesta.opciones.forEach(element => {
     total+=element.cantidad_votos;
    });
    setVotos(total);
    validarCierreEncuesta();
   
  }, [encuesta.opciones,validarCierreEncuesta]);

  return (

        <CardContent>
          <Typography paragraph>{publicacionData.texto}</Typography>
          <div className="row">
            {encuesta.opciones.map((item,index)=>(
              < Opciones opcion={item} key={index} totalVotos={totalVotos} 
              opcion_id_votada={encuesta.opcion_id_votada}
              encuestaActiva={encuestaActiva}/>
            ))}
          </div> 
     <small className="d-flex flex-row-reverse mt-1">     Estado: {encuestaActiva.fechaCierre}</small>
        </CardContent>

  );
}

export function Opciones({ opcion=[],totalVotos=0,opcion_id_votada }) {//C4CFD6
  return (
    <>
      <div className="col-md-1 align-self-center"> 
      {
        opcion_id_votada!=null ? <CheckCircleOutlineIcon /> :""
      }
     </div>
      <div className="col-md-1 align-self-center">
        
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