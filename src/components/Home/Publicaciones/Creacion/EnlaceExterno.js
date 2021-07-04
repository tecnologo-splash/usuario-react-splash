import React from "react";
import Button from "@material-ui/core/Button";
import InsertLinkIcon from "@material-ui/icons/InsertLink";
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';

export function EnlaceExterno({activarButtons}){ 
    return (
        <>
        <Button className="flex-fill bd-highlight" onClick={()=>activarButtons('link_externo')}>
        <InsertLinkIcon className="mr-2" />
        <Typography style={{ textTransform: "none", color: "grey" }}>
          {" "}
        Enlace Externo
      </Typography>
      </Button>

      </>
    )
}

export function EnlaceExternoInput({link_externo,setUrl}){
   return(
        
        link_externo==='link_externo' ?
        <>
            <TextField
            className="col-md-11  mt-4"
            label="Enlace Externo"
            style={{ margin: 8 }}
            placeholder="Ingrese Su enlace Externo"
            fullWidth
            margin="normal"
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            onChange={(e)=>setUrl(e.target.value)}
          />
          
          </>
            :null
            
        
    //LinkExternoPublicacion({ publicacionData }) 

    )
}