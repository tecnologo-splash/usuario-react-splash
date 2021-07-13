import React, {useEffect,useState } from 'react';
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ShareIcon from "@material-ui/icons/Share";
import CommentIcon from '@material-ui/icons/Comment';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Popover from "@material-ui/core/Popover";
import Tooltip from '@material-ui/core/Tooltip';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { ModalReacciones } from './ModalReacciones'
import { Divider } from "@material-ui/core";
import { ListComentarios } from "../Comentarios/ListComentarios";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { PublicacionReaccionada } from './PublicacioReaccionada';
import {useAccionesHook} from './useAccionesHook';
import {ModalCompartirPublicacion} from './ModalCompartirPublicacion';

const useStyles = makeStyles((theme) => ({
  elementsHover: {
    "&:hover": {
      transform: 'scale(1.4)',
      transition: 'transform .2s'
    }
  },
}));

const tilo = css`.MuiPaper-root{border-radius:50px;}`;

const emjis = [
  { img: '/recursos/reaciones/64px/thumbs_up.gif', nameEmoji: 'Me Gusta', enumEmoji: 'ME_GUSTA' },
  { img: '/recursos/reaciones/64px/thumbs_down.gif', nameEmoji: 'No Me Gusta', enumEmoji: 'NO_ME_GUSTA' },
  { img: '/recursos/reaciones/64px/grinning_face_with_smiling_eyes.gif', nameEmoji: 'Me Divierte', enumEmoji: 'ME_DIVIERTE' },
  { img: '/recursos/reaciones/64px/middle_finger.gif', nameEmoji: 'Me Enoja', enumEmoji: 'ME_ENOJA' },
  { img: '/recursos/reaciones/64px/woman_shrugging.gif', nameEmoji: 'No Me Interesa', enumEmoji: 'NO_ME_INTERESA' }
];

export function Acciones({ resumen_reaccion = [], publicacionId,comentarios,userInfo,idOtroUsuario,compartir }) {

  const { handleClick,
          handleExpandClick,
          handlePopoverClose,
          setOpenReact,
          openReaccion,
          open,
          anchorEl,
          setAnchorEl,
          expanded,
          openReact,setReacciones,reacciones,handleClickAgregarReaccion,
          cantidadComentarios,setCantidadComentarios,setMiReaccion 
        }=useAccionesHook({resumen_reaccion, publicacionId,comentarios,userInfo,idOtroUsuario});
const [openModal,setOpenModal]=useState(false);

const handleClickCompartir=()=>{
  setOpenModal(true);
}

return (
    <>
  {
    openReact ? 
    <ModalReacciones
      pubId = {publicacionId}
      openModal = {openReact}
      setOpenModal = {setOpenReact}
    />
    : null
  }

<div className="col-md-12 mb-1" onClick={handleClick}> 
    <PublicacionReaccionada resumen_reaccion={reacciones} />
</div>

  <div className="col-md-12 d-flex flex-row-reverse">
    <Typography variant="caption"gutterBottom className=" d-flex flex-row-reverse">
        {cantidadComentarios} Comentarios
    </Typography>
  </div>
  
      <div className="col-md-12"><Divider /></div>

      <CardActions className="d-flex bd-highlight">

        <Button style={{ textTransform: 'none', color: reacciones.mi_reaccion === null ? 'grey' : '#6F32C1' }}
         className="flex-fill bd-highlight"
          onClick={openReaccion}
        >
          <EmojiEmotionsIcon className="mr-2" />  <Typography> Reaccionar</Typography>
        </Button>

        <Popover
          css={tilo}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left"
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          onClose={handlePopoverClose}
        >

          {
            [...new Array(5)].map((item, index) => (
              <EmojiAction key={index}
                url={emjis[index].img}
                titulo={emjis[index].nameEmoji}
                enumEmoji={emjis[index].enumEmoji}
                publicacionId={publicacionId}
                setAnchorEl={setAnchorEl}
                setReacciones={setReacciones}
                setMiReaccion={setMiReaccion}
                handleClickAgregarReaccion={handleClickAgregarReaccion}
              />
            ))
          }
        </Popover>

        <Button
          style={{ textTransform: 'none', color: 'grey' }}
          className="flex-fill bd-highlight"
          onClick={handleExpandClick}
        >
          {expanded ? <MenuBookIcon className="mr-2" /> : <CommentIcon className="mr-2" />}
          <Typography> Comentarios</Typography>
        </Button>

{
  compartir===null ?<Button
  className="flex-fill bd-highlight"
  style={{ textTransform: 'none', color: 'grey' }}
  onClick={handleClickCompartir}
>
  <ShareIcon className="mr-2"/>  <Typography>Compartir</Typography>
</Button>
  : null

}
        

      </CardActions>

      <ListComentarios expanded={expanded}
      comentarios={comentarios}
      userInfo={userInfo}
       publicacionId={publicacionId}
       idOtroUsuario={idOtroUsuario}
       setCantidadComentarios={setCantidadComentarios}
       cantidadComentarios={cantidadComentarios}
     />  
{openModal ?
  <ModalCompartirPublicacion open={true} setOpen={setOpenModal}/>
:null
}
    </>
  )

}

export function EmojiAction({ url, titulo, setAnchorEl, enumEmoji, publicacionId,setReacciones,setMiReaccion,handleClickAgregarReaccion }) {
  const classes = useStyles();

  return (
    <Tooltip title={titulo}>
      <IconButton variant="contained" className="mr-2" onClick={()=>handleClickAgregarReaccion(enumEmoji)}>
        <img src={process.env.PUBLIC_URL + url} alt="" width="45" className={classes.elementsHover} />
      </IconButton>
    </Tooltip>

  )

}