import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Typography from "@material-ui/core/Typography";
import {Acciones} from './Acciones';
import CardMedia from "@material-ui/core/CardMedia";
import {URL_BASE_FILE_STORAGE} from '../../../config/api/settings';

import {Carousel} from 'react-bootstrap';
import {PublicacionHeader} from './PublicacionHeader';

const estilo=css`
.carousel-indicators li{
  background-color:#6F32C1;
  width: 10px;
 height: 10px;
 border-radius: 100%;
}
`;
export default function CarrouselPublicacion({publicacionData}) {
  const {multimedia}=publicacionData;
  return (
    <>
         <div className="container">
        <Typography paragraph>
          {publicacionData.texto}
        </Typography>
      </div>
     <Carousel css={estilo}   interval={null}>

    {multimedia.map((item,index)=>(
        <Carousel.Item key={index}>
          <CardMedia
          component={item.tipo.toLowerCase()==='foto'? "img" : "video"}
        src={URL_BASE_FILE_STORAGE+item.url}
          title='title'
          controls
          />  
    </Carousel.Item>
    ))}

</Carousel>
      

 </>
  );
}
