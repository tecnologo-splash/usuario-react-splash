import React from 'react';
import CardContent from "@material-ui/core/CardContent";
import Collapse from "@material-ui/core/Collapse";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import InputAdornment from "@material-ui/core/InputAdornment";



import AnnouncementIcon from "@material-ui/icons/Announcement";
import{PerfilAvatar} from '../../Perfil/PerfilAvatar';
export function Comentarios({expanded}) {

  const useStyles = makeStyles((theme) => ({
    inputPublicacion: {
      position: "relative",
      borderRadius: "25px",
      backgroundColor: "#f1f2f6",
      "&:hover": {
        backgroundColor: " #ecf0f1",
      },
      color: "#747d8c",
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
      },
    },
    inputInput: {
      color: "#2f3542",
      paddingLeft: `calc(1em + 1px)`,
      transition: theme.transitions.create("width"),
    },
  
  }));
  const classes = useStyles();

    return (

        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <div className="col-md-11 align-self-center pl-0">
            <div className={classes.inputPublicacion} >
          <InputBase
          fullWidth
          multiline
            className="col-md-12"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
      
            value="
              Set aside off of the ."
              readOnly
            
          />
                 
        </div>
            </div>

        </CardContent>
      </Collapse>

    )

}

   