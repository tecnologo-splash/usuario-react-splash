import  {useState,useEffect} from 'react';
import {VotarEncuesta} from '../../services/MuroApi';


export function useVotarEncuestaHook({encuesta=[]}){
    const [votar,setVotar]=useState(false);
    const [enc,setEncuesta]=useState(encuesta);

    useEffect(()=>{

    },[votar])

    const votarPublicacion= async(opcionIdEncuesta,publicacionId)=>{
        console.log(opcionIdEncuesta,publicacionId);
        const response=await VotarEncuesta({publicacionId,opcionIdEncuesta});
        console.log(response);
        enc.opcion_id_votada=opcionIdEncuesta;
        console.log("--->",enc.opciones)
        enc.opciones.map((i)=>{
          if(i.id===opcionIdEncuesta){
              i.cantidad_votos=i.cantidad_votos+1;
          }
        
        })
     setVotar(true)

    }

    
  const [totalVotos, setVotos] = useState(0);
  const [encuestaActiva, setEstadoEnc] = useState({
    estado:null,
    fechaCierre:null
  });
 


    return {
        votarPublicacion,
        votar,
        enc,setEncuesta,setEstadoEnc,setVotos,encuestaActiva,totalVotos
    }
  
}