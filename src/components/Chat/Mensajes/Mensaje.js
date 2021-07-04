import React from 'react';
import Typography from '@material-ui/core/Typography';

export function Mensaje({mensaje,envio='mine start',idMe}){
  const estilo=idMe===mensaje.from_usuario_id ? "d-flex flex-row-reverse" : "d-flex flex-row ml-1";
  const estilo_dos=idMe===mensaje.from_usuario_id ? "mine start" : "end";
    return(
        <div className={' message  mb-4 mr-2 '+estilo_dos}>
        <div className={"bubble-container "+estilo}>
         <div className="bubble "style={{  wordBreak:"break-all", maxWidth:'70%' }}>
         { mensaje.mensaje}
         </div>
       </div>
       <div className={estilo+" ml-2"}>       <Typography variant="caption" display="block" gutterBottom>
        {mensaje.fecha_envio}
</Typography></div>
     </div>
    )
}