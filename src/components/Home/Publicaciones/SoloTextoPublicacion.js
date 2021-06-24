import React from "react";
import Typography from "@material-ui/core/Typography";



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
