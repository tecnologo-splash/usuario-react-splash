import React, { useState,useEffect } from 'react';
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
import { Divider } from "@material-ui/core";
import { Comentarios } from "../Comentarios";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReaccionarAPublicacion,BorrarReaccionarAPublicacion,Publicacion } from '../../../../services/MuroApi';
import { PublicacionReaccionada } from './PublicacioReaccionada';

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

export function Acciones({ resumen_reaccion = [], publicacionId }) {
  const [expanded, setExpanded] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [reacciones, setReacciones] = useState([]);

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  const handleExpandClick = () => {
      setExpanded(!expanded);
  };
  
  useEffect(()=>{
    setReacciones(resumen_reaccion)

  },[resumen_reaccion])

  const openReaccion=(e)=>{
    if(reacciones.mi_reaccion!=null){
      (async () => {
      const response=await BorrarReaccionarAPublicacion({ publicacionId });
      console.log(response);
      })();
      (async () => {
          const response=await Publicacion({publicacionId});
          const {resumen_reaccion}=response;
          setReacciones(resumen_reaccion);
        })()
    }else{
      setAnchorEl(e.currentTarget) 
    }
  }
  return (
    <>

<div className="col-md-12 mb-1"> 

    <PublicacionReaccionada resumen_reaccion={reacciones} />

</div>
      <div className="col-md-12"><Divider /></div>

      <CardActions className="d-flex bd-highlight">

        <Button style={{ textTransform: 'none', color: reacciones.mi_reaccion === null ? 'grey' : '#6F32C1' }} className="flex-fill bd-highlight"
          /* onMouseEnter={handlePopoverOpen}  */
          onClick={openReaccion}
        >
          <EmojiEmotionsIcon className="mr-2" />  <Typography> Reacionar</Typography>
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
              />
            ))
          }
        </Popover>

        <Button
          style={{ textTransform: 'none', color: 'grey' }}
          className="flex-fill bd-highlight"
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          {expanded ? <MenuBookIcon className="mr-2" /> : <CommentIcon className="mr-2" />}
          <Typography> Comentarios</Typography>
        </Button>

        <Button
          className="flex-fill bd-highlight"
          style={{ textTransform: 'none', color: 'grey' }}
        >
          <ShareIcon className="mr-2" />  <Typography> Compartir</Typography>
        </Button>

      </CardActions>


      <div className="col-md-12"><Divider /></div>

      <Comentarios expanded={expanded} />

    </>
  )

}

export function EmojiAction({ url, titulo, setAnchorEl, index, enumEmoji, publicacionId,setReacciones }) {
  const classes = useStyles();
  const handleClick = () => {
    console.log("reaccionar " + enumEmoji);
    (async () => {
      const data = { emoji: enumEmoji };
    const response=  await ReaccionarAPublicacion({ publicacionId, data })
      console.log(response);
      setReacciones(response.resumen_reaccion);
    })()

    setAnchorEl(null);
  }
  return (
    <Tooltip title={titulo} key={index}>
      <IconButton variant="contained" className="mr-2" onClick={handleClick}>
        <img src={process.env.PUBLIC_URL + url} alt="" width="45" className={classes.elementsHover} />
      </IconButton>
    </Tooltip>

  )

}