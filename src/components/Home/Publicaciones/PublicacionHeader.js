import React,{useState,useEffect} from 'react';
import CardHeader from "@material-ui/core/CardHeader";
import {PerfilAvatar} from '../Perfil/PerfilAvatar';
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {StyledMenu,StyledMenuItem} from '../../StyledMenus';
import { useHistory } from "react-router-dom";

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {InputPublicacion} from './InputPublicacion';


export function PublicacionHeader({nombre,apellido,usuario,url_perfil,id,
  fecha_publicacion,meId,publicacionId,eliminarPublicacion,textoEdicion,editarPublicacion,publicacionCompartida}){

    const [anchorEl, setAnchorEl] = useState(null);
  let history = useHistory();
  const [open, setOpen] = useState(false);
  const goToPerfil=()=>{
    if(id===meId){
      history.push("/home/mi-perfil/");
    }else{
      history.push("/home/perfil/"+id);

    }
  }
  const handleClickEliminar=(publicacionId)=>{
    eliminarPublicacion(publicacionId);
    setAnchorEl(null);
  }

  const handleClickOpen = () => {
    setOpen(true);
    setAnchorEl(null);
  };



  return (
    <CardHeader
    avatar={
      <PerfilAvatar img={url_perfil}  onClick={goToPerfil}/>
    }
    title={nombre +" "+apellido+publicacionCompartida}
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
      <StyledMenuItem onClick={handleClickOpen} >
        <EditIcon fontSize="small" className="mr-2" />
        Editar
      </StyledMenuItem>
      <StyledMenuItem onClick={()=>handleClickEliminar(publicacionId)}>
        <DeleteIcon fontSize="small" className="mr-2" />
       Eliminar
      </StyledMenuItem>
    </StyledMenu>
    <ModalEditarTextoPublicacion 
    open={open} 
    setOpen={setOpen}
     textoPublicacion={textoEdicion} 
     editarPublicacion={editarPublicacion}
     publicacionId={publicacionId}/>
    </>
    :null}
        </>
    }

  />
  )
}


export function ModalEditarTextoPublicacion({open,setOpen,textoPublicacion,editarPublicacion,publicacionId}){
 const [texto,setTexto]=useState(textoPublicacion);

  const handleClose = () => {
    setOpen(false);
  };


  const editar=()=>{
    editarPublicacion(publicacionId,texto);
    handleClose();

    
  }
  return (
    <div>

    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth={"sm"} fullWidth>
      <DialogTitle id="form-dialog-title">Editar Publicacion</DialogTitle>
      <DialogContent>

    <InputPublicacion
    setTexto={setTexto}
    textoPublicacion={texto}
  // handlePopoverOpen={handlePopoverOpen}
    />        

      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={editar} color="primary">
          Editar
        </Button>
      </DialogActions>
    </Dialog>
  </div>
  )
}
  