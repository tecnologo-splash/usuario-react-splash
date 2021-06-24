import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    cssLabel:{
      backgroundColor: "white",
      border:'1px solid black',
      borderRadius: "25px",
    },
    inputPublicacion: {
      position: "relative",
      borderRadius: "25px",
      backgroundColor: "#f1f2f6",
      color: "#747d8c",
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
      },
    },
    icon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputInput: {
      color: "#2f3542",
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from icon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
  
    }
  }));