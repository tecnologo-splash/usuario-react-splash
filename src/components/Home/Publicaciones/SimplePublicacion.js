import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {Acciones} from './Acciones';
import {PublicacionHeader} from './PublicacionHeader';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const estiloMedia=css`
height: 0;
padding-top: 56.25%; /* 16:9*/
`;

export default function SimplePublicacion() {

  return (
    <div className="col-md-8 offset-md-2 mb-4">

    <Card>
      <PublicacionHeader/>
  
  
      <CardMedia
        css={estiloMedia}
        image={"https://i.blogs.es/2cc78a/ordenstarwars/1366_2000.jpg"}
      />
      
      <CardContent>
      <Typography paragraph>
       Hola me llamo Pepe de Pepe Rompe de videomatch

          </Typography>
          
      </CardContent>
  
      { /*   <img  src={process.env.PUBLIC_URL + '/recursos/reaciones/32px/thumbs-up.png'} alt="" width="20"/>
          <img  src={process.env.PUBLIC_URL + '/recursos/reaciones/32px/thumbs-down.png'} alt="" width="20"/>
          <img  src={process.env.PUBLIC_URL + '/recursos/reaciones/32px/grinning-face-with-smiling-eyes.png'} alt="" width="20"/>
          <img  src={process.env.PUBLIC_URL + '/recursos/reaciones/32px/middle-finger.png'} alt="" width="20"/>

          <img  src={process.env.PUBLIC_URL + '/recursos/reaciones/32px/woman-shrugging.png'} alt="" width="20"/>
          117
      */  }   
      <Acciones/>

    </Card>

       </div>
  );
}
