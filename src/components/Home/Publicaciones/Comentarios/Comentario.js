import React,{useState} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import {InputComentario} from './ImputComentario';
import{PerfilAvatar} from '../../Perfil/PerfilAvatar';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import TextField from '@material-ui/core/TextField';
import NearMeIcon from '@material-ui/icons/NearMe';
import InputAdornment from '@material-ui/core/InputAdornment';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import {EmojiPopover} from '../../EmojiPopover';
const estilo=css`input:focus {background-color: white;}`;
const estiloCursor=css`cursor:pointer;`;
const useStyles = makeStyles((theme) => ({
  inputPublicacion: {
    borderRadius: "25px",
    backgroundColor: "#f1f2f6",
  },      
}));

export function Comentario({data,idOtroUsuario,idMe,eliminarComentario,ingresarRespuesta,eliminarRespuestaAComentario,urlPerfil}) {
const {respuestas}=data;

return (

<>
{/* Comentario*/}
      <Coment data={data}  
      idOtroUsuario={idOtroUsuario}
      eliminarComentario={eliminarComentario}
      idMe={idMe}
      ingresarRespuesta={ingresarRespuesta}
      urlPerfil={urlPerfil}
      />
  {/*Respuesta */}
        {respuestas.map((item,index)=>(
        <Coment 
        comentarioId={data.id}
        key={index}
         data={item} 
         size='offset-md-1'
         tipo='respuesta' 
         idRespuesta={item.id}
         eliminarRespuestaAComentario={eliminarRespuestaAComentario}
         idOtroUsuario={idOtroUsuario}
         idMe={idMe}
         urlPerfil={urlPerfil}
        />
      ))}
       
   </>

)

}

export function Coment({data,size='', tipo='comentario',idOtroUsuario,idMe,eliminarComentario,ingresarRespuesta,
eliminarRespuestaAComentario,idRespuesta,comentarioId,urlPerfil}){

  const [textoResp,setTextoResp]=useState('');
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickRespuesta = () => {
    if(textoResp!==''){
      ingresarRespuesta(data.id,textoResp);
      setOpen(false);
      setTextoResp('');
    }
  
};

const handleKeyPressComentario=(e)=> {
  if (e.key === 'Enter') {
    handleClickRespuesta();
  }
}

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDelete=()=>{
    if(tipo==="respuesta"){
     eliminarRespuestaAComentario(comentarioId,idRespuesta);
    }else{
      eliminarComentario(data.id);
    }
  }
  return (
    <div className={size+" row mb-3"}>


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
    onClick={()=>setOpen(!open)}
      >Responder</Typography>
</div>
: null
}


</div>

    </div>
    {tipo==='comentario' && open ?
<InputComentario
  urlPerfil={urlPerfil}
  >
  <TextField
            style={{ marinTop:10,margin: 8, backgroundColor:'#F1F2F6', border:'10px' }}
            placeholder="Ingrese su comentario"
            fullWidth
            margin="normal"
            size="small"
            variant="outlined"
            css={estilo}
            value={textoResp}
            onChange={(e)=>setTextoResp(e.target.value)}
            onKeyDown={(e)=>handleKeyPressComentario(e)}
            InputProps={{
                endAdornment: (
                    <>
                    <InsertEmoticonIcon  onClick={(e)=> setAnchorEl(e.currentTarget)}/>
                    <InputAdornment position="end" css={estiloCursor} onClick={handleClickRespuesta}>
                    <NearMeIcon />
                    </InputAdornment>
                    </>
                )
                }}
            />

</InputComentario>


:null
    }

{anchorEl!==null ?
  <EmojiPopover
anchorEl={anchorEl}
setAnchorEl={setAnchorEl}
seTexto={setTextoResp}
texto={textoResp}
/>
: null
}



    </div>
  )
}