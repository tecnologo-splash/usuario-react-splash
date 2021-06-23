import React,{useState} from 'react';
import CardHeader from "@material-ui/core/CardHeader";
import {PerfilAvatar} from '../Perfil/PerfilAvatar';
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {StyledMenu,StyledMenuItem} from '../../StyledMenus';
import { useHistory } from "react-router-dom";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function PublicacionHeader({nombre,apellido,usuario,url_perfil,id,fecha_publicacion,meId,publicacionId,eliminarPublicacion}){
  const [anchorEl, setAnchorEl] = useState(null);
  let history = useHistory();
  const estiloCursor=css`cursor:pointer;`;

  const goToPerfil=()=>{
    if(id===meId){
      history.push("/home/mi-perfil/");
    }else{
      history.push("/home/perfil/"+id);

    }
  }
  const handleClickEliminar=(publicacionId)=>{
    console.log(publicacionId);
    eliminarPublicacion(publicacionId);
    setAnchorEl(null);
  }

  return (
    <CardHeader
    avatar={
      <PerfilAvatar img={url_perfil}  onClick={goToPerfil}/>
    }
    css={estiloCursor}
    title={nombre +" "+apellido}
    subheader={usuario+"- "+fecha_publicacion}
          action={
      <>
      {meId===id ? 
      <>
      <Tooltip title="Ver Más">
      <IconButton className="ml-3"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        size="small"
        onClick={(event)=>{setAnchorEl(event.currentTarget)}}
      >
         <MoreVertIcon />
      </IconButton>
    </Tooltip>

  <StyledMenu
      disableScrollLock 
      id="customized-menu"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={()=>(setAnchorEl(null))}
      >
      <StyledMenuItem >
        <EditIcon fontSize="small" className="mr-2" />
        Editar
      </StyledMenuItem>
      <StyledMenuItem onClick={()=>handleClickEliminar(publicacionId)}>
        <DeleteIcon fontSize="small" className="mr-2" />
       Eliminar
      </StyledMenuItem>
    </StyledMenu>
    </>
    :null}
        </>
    }

  />
  )
}

  