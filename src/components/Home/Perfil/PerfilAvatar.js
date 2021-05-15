import React from 'react';
import Avatar from "@material-ui/core/Avatar";

export function PerfilAvatar({img=''}){
    const newImg=img==='' ? 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4452684.jpg' : img;
    return (
        <Avatar aria-label="recipe" src={newImg} className="mr-2">
        </Avatar>
    )
}
