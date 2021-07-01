import React from 'react';
import Typography from '@material-ui/core/Typography';

export function Mensaje({dataMensaje,envio='mine start',idMe}){
  console.log(dataMensaje);
  const estilo="";//idMe===dataMensaje.from_usuario_id ? "d-flex flex-row-reverse" : "d-flex flex-row";
    return(
        <div className={' message  mb-4 mr-2 '+envio}>
        <div className={"bubble-container "+estilo}>
         <div className="bubble "style={{  wordBreak:"break-all", maxWidth:'70%' }}>
         { "pepe asdddddddddddddddddddddddddddddqqqqqqqqqqqqqqqqwewqeasdasasasdas asdddddddddddddddddddddddddddddqqqqqqqqqqqqqqqqwewqeasdasasasdas"}
         </div>
       </div>
       <div className="d-flex flex-row-reverse mr-2">       <Typography variant="caption" display="block" gutterBottom>
         2020/03/2021 15:30
</Typography></div>
     </div>
    )
}