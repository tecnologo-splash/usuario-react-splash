import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Typography from "@material-ui/core/Typography";
import {Acciones} from './Acciones';

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
export default function CarrouselPublicacion() {

  return (
    <div className="col-md-8 offset-md-2 mb-4">
    <Card>
    <PublicacionHeader/>
     <Carousel css={estilo}   interval={null}>
  <Carousel.Item>
    <img
      className={"d-block w-100"}
      src="https://i.pinimg.com/originals/11/7e/93/117e9371c1a30a8de6fe51ac861cf247.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
        className={"d-block w-100"}
      src="http://2.bp.blogspot.com/_3sU0MnRawMI/TQ9LYi6iUPI/AAAAAAAACb8/sSCMmMla1UM/s1600/kakashi%2Bhatake%2B.jpg"
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
     className={"d-block w-100"}
      src="https://i.pinimg.com/736x/01/be/24/01be24e24eccf8e9e70278df34a08e6e.jpg"
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>
      
      <CardContent>
      <Typography paragraph>
       Hola me llamo Pepe de Pepe Rompe de videomatch

          </Typography>
          
      </CardContent>

      <Acciones/>

 

    </Card>

    </div>
  );
}
