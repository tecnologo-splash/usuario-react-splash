import React,{useState} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';

import DeleteIcon from '@material-ui/icons/Delete';

import{PerfilAvatar} from '../../Perfil/PerfilAvatar';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {ModalRespuesta} from './ModalRespuesta';

const estiloCursor=css`cursor:pointer;`;

const useStyles = makeStyles((theme) => ({
  inputPublicacion: {
    borderRadius: "25px",
    backgroundColor: "#f1f2f6",
  },      
}));

export function Comentario({data,idOtroUsuario,idMe,eliminarComentario,ingresarRespuesta}) {
const {respuestas}=data;

return (

<>
{/* Comentarios*/}
      <Coment data={data}  
      idOtroUsuario={idOtroUsuario}
      eliminarComentario={eliminarComentario}
      idMe={idMe}
      ingresarRespuesta={ingresarRespuesta}
      />
  {/*Respuestas */}
        {respuestas.map((item,index)=>(
        <Coment key={index} data={item} 
         size='offset-md-1'
         tipo='respuesta' 
         idOtroUsuario={idOtroUsuario}
         idMe={idMe}
        />
      ))}
       
   </>

)

}

export function Coment({data,size='', tipo='comentario',idOtroUsuario,idMe,eliminarComentario,ingresarRespuesta}){
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDelete=()=>{
    if(tipo==="respuesta"){

    }else{
      eliminarComentario(data.id);
    }
  }
  return (
    <div className={size+" row mb-3"}>
    {tipo==='comentario' ?
<ModalRespuesta
 open={open}
  setOpen={setOpen} 
  ingresarRespuesta={ingresarRespuesta} 
  comentarioId={data.id}/>
:null
    }

    <div  className="col-md-1 mr-3"><PerfilAvatar img={data.usuario_comun.url_perfil} /></div>
        <div className={classes.inputPublicacion+" col-md-10"} >
        <Typography variant="caption" display="block"  className="pt-1 pl-1 d-flex justify-content-between">
          <div><b>{data.usuario_comun.nombre} {data.usuario_comun.apellido}</b> -
          @{data.usuario_comun.usuario}  </div> 
   
          {idOtroUsuario===idMe ?  <div onClick={handleDelete}><DeleteIcon  
                                    fontSize="small" color="action"  css={estiloCursor}/></div>
          : data.usuario_comun.id===idMe ? <div onClick={handleDelete}><DeleteIcon  
                                    fontSize="small" color="action"  css={estiloCursor}/></div> :null} 

        </Typography>
        
  <Typography variant="body1"  display="block" className="pt-1 pl-1">
     {data.texto}    
  </Typography>

  <div className=" d-flex justify-content-between">
  <div >   
   <Typography variant="caption"gutterBottom>{data.fecha_creado}</Typography>
</div>

{
  tipo==='comentario' ?

  <div>   
   <Typography
    variant="caption" 
    display="block"
    gutterBottom color="primary"
    css={estiloCursor}
    onClick={()=>setOpen(true)}
      >Responder</Typography>
</div>
: null
}

</div>
    </div>
    </div>
  )
}