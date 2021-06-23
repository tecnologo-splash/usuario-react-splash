import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import Typography from "@material-ui/core/Typography";

export function Multimedia({children}){
 
    
    
    return (
        <>
       <Button className="flex-fill bd-highlight">
              <AddPhotoAlternateIcon
                className="mr-2"
                style={{ textTransform: "none", color: "#27ae60" }}
              />
              <Typography style={{ textTransform: "none", color: "grey" }}>

                {children}
            </Typography>
            </Button>
      </>
    )
}