import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import {URL_BASE_FILE_STORAGE} from '../../../config/api/settings';

export function PerfilAvatar({img='',onClick=''}){
    const handleClick=()=>{
        if(onClick!==''){
            onClick();
        }
  
    }
    const img_perfil_sin_imagen=process.env.PUBLIC_URL + '/recursos/svg/perfil_sin_imagen.svg';
    const newImg=img==='' || img===null ? img_perfil_sin_imagen : URL_BASE_FILE_STORAGE+img;
    return (
    <>
        <Avatar aria-label="recipe" src={newImg} className="mr-2" onClick={handleClick}>
        </Avatar>
        </>
    )
}
