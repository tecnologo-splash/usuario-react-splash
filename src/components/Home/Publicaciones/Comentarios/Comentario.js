import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';

import DeleteIcon from '@material-ui/icons/Delete';

import{PerfilAvatar} from '../../Perfil/PerfilAvatar';

const useStyles = makeStyles((theme) => ({
  inputPublicacion: {
    borderRadius: "25px",
    backgroundColor: "#f1f2f6",
  },      
}));
export function Comentario({data,idOtroUsuario,idMe}) {
const {respuestas}=data;

return (

<>
      <Coment data={data}  idOtroUsuario={idOtroUsuario}
        idMe={idMe}/>

        {respuestas.map((item,index)=>(
        <Coment key={index} data={item} size='offset-md-1' tipo='respuesta' 
         idOtroUsuario={idOtroUsuario}
        idMe={idMe}/>
      ))}
       
   </>

)

}

export function Coment({data,size='', tipo='comentario',idOtroUsuario,idMe}){
  const classes = useStyles();
  return (
    <div className={size+" row mb-3"}>
    <div  className="col-md-1 mr-3"><PerfilAvatar img={data.usuario_comun.url_perfil} /></div>
        <div className={classes.inputPublicacion+" col-md-10"} >
        <Typography variant="caption" display="block"  className="pt-1 pl-1 d-flex justify-content-between">
        <div><b>{data.usuario_comun.nombre} {data.usuario_comun.apellido}</b> - @{data.usuario_comun.usuario}  </div> 
   
  {idOtroUsuario===idMe ?  <div><DeleteIcon  fontSize="small" color="action" /></div>
 :null} 

  </Typography>
  <Typography variant="body1"  display="block" className="pt-1 pl-1">
     {data.texto}    
  </Typography>

  <div class=" d-flex justify-content-between">
  <div >   
   <Typography variant="caption"gutterBottom>{data.fecha_creado}</Typography>
</div>

{
  tipo==='comentario' ?

  <div>   
   <Typography variant="caption" display="block" gutterBottom color="primary">Responder</Typography>
</div>
: null
}

</div>
    </div>
    </div>
  )
}