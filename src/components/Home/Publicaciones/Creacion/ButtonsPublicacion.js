import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import Typography from "@material-ui/core/Typography";
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';

export function Multimedia({ children,disabled,activarButtons,setCantFotos,setMultimedia }) {
  const color= !disabled? "#27ae60" : "grey";
	
  const changeHandler = (event) => {
    activarButtons('multimedia');
    
   setMultimedia(event.target.files);
   setCantFotos(event.target.files.length);
	};
  
  return (
    <>

      <Button
      disabled={disabled}
        component="label"
        className="flex-fill bd-highlight"
        onChange={changeHandler} 
      >
        <AddPhotoAlternateIcon
          className="mr-2"
          style={{ textTransform: "none", color: color }}
        />
        <Typography style={{ textTransform: "none", color: "grey" }}>

          {children}
        </Typography>
        <input
          type="file"
          multiple="multiple"
          hidden
        />
      </Button>

    </>
  )
}


export function Encuesta({disabled,activarButtons}){

  return(

   <Button className="flex-fill bd-highlight" disabled={disabled} onClick={()=> activarButtons('encuesta')}>
    <LibraryAddCheckIcon className="mr-2"
      style={{ textTransform: "none", color: "#9b59b6" }}
    />
    <Typography style={{ textTransform: "none", color: "grey" }}>
      {" "}
    Encuesta
  </Typography>
  </Button>
  )
}