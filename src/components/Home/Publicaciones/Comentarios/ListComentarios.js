import React,{useState} from 'react';
import CardContent from "@material-ui/core/CardContent";
import Collapse from "@material-ui/core/Collapse";
import { Comentario } from './Comentario';
import {useComentarioHook} from '../../../../hooks/comentarios/useComentarioHook';
import { Divider } from "@material-ui/core";
import {InputComentario} from './ImputComentario';
import TextField from '@material-ui/core/TextField';
import NearMeIcon from '@material-ui/icons/NearMe';
import InputAdornment from '@material-ui/core/InputAdornment';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import {EmojiPopover} from '../../EmojiPopover';

export function ListComentarios({expanded, publicacionId,comentarios,userInfo,idOtroUsuario,setCantidadComentarios,cantidadComentarios}) {
  const estilo=css`input:focus {
    background-color: white;
    }`;
const estiloCursor=css`cursor:pointer;`;

    const {ingresarComentario,eliminarComentario,handleKeyPressComentario,setTexto,
        handleChangeTextComentario,coments,ingresarRespuesta,texto,eliminarRespuestaAComentario}=useComentarioHook({comentarios,publicacionId,setCantidadComentarios,cantidadComentarios});
        //useMemo here
        const [anchorEl, setAnchorEl] = useState(null);
        console.log("here")
return (
<>
      <div className="col-md-12"><Divider /></div>

       <Collapse in={expanded} timeout="auto" unmountOnExit >
        <CardContent>
            {coments.map((item,index)=>(
                <Comentario key={index} 
                data={item}
                idOtroUsuario={idOtroUsuario} 
                idMe={userInfo.id}
                urlPerfil={userInfo.url_perfil}
                eliminarComentario={eliminarComentario}
                ingresarRespuesta={ingresarRespuesta}
                eliminarRespuestaAComentario={eliminarRespuestaAComentario}
                  />
            ))}
        </CardContent>
      </Collapse>

      <InputComentario
      urlPerfil={userInfo.url_perfil}
      >
      <TextField
            style={{ margin: 8, backgroundColor:'#F1F2F6', border:'10px' }}
            placeholder="Ingrese su comentario"
            fullWidth
            margin="normal"
            size="small"
            variant="outlined"
            css={estilo}
            value={texto}
            onChange={(e)=>handleChangeTextComentario(e)}
            onKeyDown={(e)=>handleKeyPressComentario(e)}
            InputProps={{
                endAdornment: (
                    <>
                    <InsertEmoticonIcon  css={estiloCursor} onClick={(e)=> setAnchorEl(e.currentTarget)}/>
                    <InputAdornment position="end" css={estiloCursor} onClick={ingresarComentario}>
                    <NearMeIcon />
                    </InputAdornment>
                    </>
                )
                }}
            />
        </InputComentario>

{anchorEl!==null ?
    <EmojiPopover
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        seTexto={setTexto}
        texto={texto}
     />
: null

}
        

        </>
)

}

   