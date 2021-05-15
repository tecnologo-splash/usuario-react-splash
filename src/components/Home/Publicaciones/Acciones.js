import React,{useState} from 'react';
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
import { Comentarios } from "./Comentarios";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const useStyles = makeStyles((theme) => ({
    elementsHover:{
      "&:hover": {
          transform: 'scale(1.4)',
          transition: 'transform .2s' 
        }
    },

  }));

  const tilo=css`
    .MuiPaper-root{
      border-radius:50px;
    }
  `;

  const emjis=[
    {img:'/recursos/reaciones/64px/thumbs_up.gif', nameEmoji:'Me Gusta'},
    {img:'/recursos/reaciones/64px/thumbs_down.gif', nameEmoji:'No Me Gusta'},
    {img:'/recursos/reaciones/64px/grinning_face_with_smiling_eyes.gif',nameEmoji:'Me Divierte'},
    {img:'/recursos/reaciones/64px/middle_finger.gif',nameEmoji:'Me Enoja'},
    {img:'/recursos/reaciones/64px/woman_shrugging.gif', nameEmoji:'No Me Interesa'}
];

export function Acciones() {
    const [expanded, setExpanded] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

      const handlePopoverClose = () => {
        setAnchorEl(null);
      };
    
      const open = Boolean(anchorEl);
    
      const handleExpandClick = () => {
        setExpanded(!expanded);
      };
        
      return (
<>
<div className="col-md-12"><Divider/></div>
    <CardActions className="d-flex bd-highlight">

      <Button style={{textTransform: 'none', color:'grey'}} className="flex-fill bd-highlight" 
     /* onMouseEnter={handlePopoverOpen}*/
     onClick={(event)=>{setAnchorEl(event.currentTarget)}}
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
      [...new Array(5)].map((item,index)=>(
        <EmojiAction key={index} url={emjis[index].img} titulo={emjis[index].nameEmoji} handlePopoverClose={handlePopoverClose}/>
      ))
      }
       </Popover>

        <Button 
        style={{textTransform: 'none', color:'grey'}}
        className="flex-fill bd-highlight"
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          {expanded ?<MenuBookIcon className="mr-2"/>: <CommentIcon className="mr-2"/>}
         <Typography> Comentarios</Typography>
        </Button>

        <Button 
         className="flex-fill bd-highlight"
         style={{textTransform: 'none', color:'grey'}}
         >
          <ShareIcon className="mr-2" />  <Typography> Compartir</Typography>
        </Button>

      </CardActions>
      <div className="col-md-12"><Divider/></div>


      <Comentarios expanded={expanded}/>

      </>
)

}

export function EmojiAction ({url, titulo,handlePopoverClose,index}){
  const classes = useStyles();
return (
  <Tooltip title={titulo} key={index}>
      <IconButton variant="contained" onClick={handlePopoverClose} className="mr-2">
        <img  src={process.env.PUBLIC_URL + url} alt="" width="45"  className={classes.elementsHover}/>
        </IconButton>
      </Tooltip>

)

}