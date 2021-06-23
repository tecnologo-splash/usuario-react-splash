import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import InsertLinkIcon from "@material-ui/icons/InsertLink";
import Typography from "@material-ui/core/Typography";

export function EnlaceExterno({}){
    {/*
        "texto": "Hello World",
        "enlaces_externos": [
            {
                "url": "www.google.com",
                "titulo": "Google",
                "descripcion": "Google is a search engine",
                "imagen_url": "google.jpg"
            }
        ] 
    */}
    
    
    return (
        <>
        <Button className="flex-fill bd-highlight">
        <InsertLinkIcon className="mr-2" />
        <Typography style={{ textTransform: "none", color: "grey" }}>
          {" "}
        Enlace Externo
      </Typography>
      </Button>

      </>
    )
}