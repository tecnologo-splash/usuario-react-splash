import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import {URL_BASE_FILE_STORAGE} from '../../../config/api/settings';

export default function SimplePublicacion({publicacionData}) {
  const {multimedia}=publicacionData;
  const valor=multimedia[0].tipo.toLowerCase()==='foto'? "img" : "video";
  
  return (
     <>
     <div className="container">
        <Typography paragraph>
          {publicacionData.texto}
        </Typography>
      </div>
            
      <CardMedia
      component={valor}
     src={URL_BASE_FILE_STORAGE+multimedia[0].url}
      title='title'
      controls
      />    
    

</>
  );
}
