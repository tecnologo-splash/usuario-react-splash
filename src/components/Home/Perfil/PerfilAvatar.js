import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import {URL_BASE_FILE_STORAGE} from '../../../config/api/settings';
/** @jsxImportSource @emotion/react */
import {  css } from "@emotion/react";
import { makeStyles } from '@material-ui/core/styles';


export function PerfilAvatar({img='',onClick='',size=''}){
  
    const useStyles = makeStyles((theme) => ({
        small: {
          width: theme.spacing(3),
          height: theme.spacing(3),
        },
        large: {
          width: theme.spacing(7),
          height: theme.spacing(7),
        },
      }));
      
    const estiloCursor=css`cursor:pointer;`;
    const classes = useStyles();

    const handleClick=()=>{
        if(onClick!==''){
            onClick();
        }
    }
    const estilo=size==='small' ? classes.small : "";
    const img_perfil_sin_imagen=process.env.PUBLIC_URL + '/recursos/svg/perfil_sin_imagen.svg';
    const newImg=img==='' || img===null ? img_perfil_sin_imagen : URL_BASE_FILE_STORAGE+img;
    return (
    <>
        <Avatar aria-label="recipe" src={newImg} className={'mr-2 '+estilo} onClick={handleClick} css={estiloCursor}>
        </Avatar>
        </>
    )
}
