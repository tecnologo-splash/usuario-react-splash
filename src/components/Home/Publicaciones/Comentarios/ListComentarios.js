import React from 'react';
import CardContent from "@material-ui/core/CardContent";
import Collapse from "@material-ui/core/Collapse";
import { Comentario } from './Comentario';
import{PerfilAvatar} from '../../Perfil/PerfilAvatar';
import TextField from '@material-ui/core/TextField';
import NearMeIcon from '@material-ui/icons/NearMe';
import InputAdornment from '@material-ui/core/InputAdornment';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function ListComentarios({expanded, publicacionId,comentarios,userInfo,idOtroUsuario}) {
    const estilo=css`input:focus {
        background-color: white;
      }`;
      const estiloCursor=css`cursor:pointer;`;

return (
<>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
            {comentarios.map((item,index)=>(
                <Comentario key={index} data={item} idOtroUsuario={idOtroUsuario}  idMe={userInfo.id}/>
            ))}
        </CardContent>
      </Collapse>



      <div className="col-md-12 row mb-3">
    <div className='col-md-1 align-self-center'>
    <PerfilAvatar img={userInfo.url_perfil} size='small'/>
    </div>
    <div className='col-md-11'>

    <TextField
            style={{ margin: 8, backgroundColor:'#F1F2F6', border:'10px' }}
            placeholder="Ingrese su comentario"
            fullWidth
            margin="normal"
            size="small"
            variant="outlined"
            css={estilo}
            InputProps={{
                endAdornment: (
                  <InputAdornment position="end" css={estiloCursor}>
                    <NearMeIcon />
                  </InputAdornment>
                )
              }}
          />
        </div>      
</div>

</>
)

}

   