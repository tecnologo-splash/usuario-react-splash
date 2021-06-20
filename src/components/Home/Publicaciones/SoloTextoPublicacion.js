import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {Acciones} from './Acciones';
import {PublicacionHeader} from './PublicacionHeader';

import {URL_BASE_FILE_STORAGE} from '../../../config/api/settings';
import {PublicacionReaccionada} from './PublicacioReaccionada';


export  function SoloTextoPublicacion({publicacionData}) {
  return (
    <>
     <div className="container">
        <Typography paragraph>
          {publicacionData.texto}
        </Typography>
      </div>
 
 </>
  );
}
