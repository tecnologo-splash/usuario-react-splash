import React from 'react';
import Avatar from "@material-ui/core/Avatar";

export function PerfilAvatar({img=''}){
    const img_perfil_sin_imagen=process.env.PUBLIC_URL + '/recursos/svg/perfil_sin_imagen.svg';
    const newImg=img==='' || img===null ? img_perfil_sin_imagen : img;
    return (<>
        <Avatar aria-label="recipe" src={newImg} className="mr-2">
        </Avatar>
        </>
    )
}
