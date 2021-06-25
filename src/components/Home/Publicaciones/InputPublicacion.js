import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import InputBase from "@material-ui/core/InputBase";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import AnnouncementIcon from "@material-ui/icons/Announcement";

import {useStyles} from '../../StyleInputPublicacion';

export function InputPublicacion({setTexto,textoPublicacion,placeH='¿Alguna idea interesante que publicar?'}){
    const classes = useStyles();

    const handleChangeTexto=(e)=>{
      setTexto(e.target.value);
    }
  
    return (  
        <div className={classes.inputPublicacion} >
          
  
          <InputBase
               startAdornment={
                <div className={classes.icon}>
                <AnnouncementIcon />
              </div>
              }
            className="col-md-12"
            multiline
            onChange={handleChangeTexto}
            value={textoPublicacion}
            autoFocus
            placeholder={placeH}
            classes={{
              input: classes.inputInput,
              focused: classes.cssLabel,
  
            }}
            rowsMax="7"
            endAdornment={
              <Tooltip title="Agregar Emoji">
                <IconButton aria-haspopup="true" 
               //  onClick={handlePopoverOpen}
                >
                  <EmojiEmotionsIcon />
                </IconButton>
              </Tooltip>
            }
          />
          
        </div>
     
    )
  }
    