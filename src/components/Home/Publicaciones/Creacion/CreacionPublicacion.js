import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { PerfilAvatar } from '../../Perfil/PerfilAvatar';
import InputBase from "@material-ui/core/InputBase";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import { Emoji } from "emoji-mart";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import Popover from "@material-ui/core/Popover";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import InsertLinkIcon from "@material-ui/icons/InsertLink";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import Divider from "@material-ui/core/Divider";
import NearMeIcon from '@material-ui/icons/NearMe';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';

import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import AddIcon from '@material-ui/icons/Add';
import { useInfoUserHook } from "../../../../hooks/useInfoUserHook";

const useStyles = makeStyles((theme) => ({
  inputPublicacion: {
    position: "relative",
    borderRadius: "25px",
    backgroundColor: "#f1f2f6",
    "&:hover": {
      backgroundColor: "white",/*#ecf0f1*/
      border:'1px solid black'
    },
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

  },
  divZoom:{
    "&:hover": {
      transform: 'scale(1.01)',
    },
  }
}));


export default function CrearPublicacion() {
  const classes = useStyles();
  const [visible, setVisible] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const {userInfo,getDatos}=useInfoUserHook();

  const pepe = (emoji, e) => {
    console.log(emoji, e);
  };
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="col-md-8 offset-md-2 mb-4 ">
      <Card >

        <div className="d-flex flex-row mt-3">
          <div className="align-self-center col-md-1">
          <PerfilAvatar img={userInfo.imgUrl} />
          </div>
          <div className={"col-md-11 align-self-center pl-0 "+classes.divZoom}>
            <div className={classes.inputPublicacion} >
              <div className={classes.icon}>
                <AnnouncementIcon />
              </div>

              <InputBase
                className="col-md-12"
                multiline
                placeholder="¿Alguna idea interesante que publicar?"
                classes={{
                  input: classes.inputInput,
                }}
                rowsMax="7"
                endAdornment={
                  <Tooltip title="Agregar Emoji">
                    <IconButton aria-haspopup="true" onClick={handlePopoverOpen}>
                      <EmojiEmotionsIcon />
                    </IconButton>
                  </Tooltip>
                }
              />
            </div>
          </div>
        </div>


        <CardContent>
          {visible ? (
            <Picker
              set="facebook"
              onClick={(emoji, event) => pepe(emoji, event)}
            />
          ) : (
            ""
          )}
          {/* <Emoji emoji=':santa:' size={32} />*/}
          <Divider className="mb-3" />



          <div className="d-flex bd-highlight">
            <Button className="flex-fill bd-highlight">
              <AddPhotoAlternateIcon
                className="mr-2"
                style={{ textTransform: "none", color: "#27ae60" }}
              />
              <Typography style={{ textTransform: "none", color: "grey" }}>

                Fotos/Video
            </Typography>
            </Button>

            <Button className="flex-fill bd-highlight">
              <LibraryAddCheckIcon className="mr-2"
                style={{ textTransform: "none", color: "#9b59b6" }}

              />
              <Typography style={{ textTransform: "none", color: "grey" }}>
                {" "}
              Encuesta
            </Typography>
            </Button>


            <Button className="flex-fill bd-highlight">
              <InsertLinkIcon className="mr-2" />
              <Typography style={{ textTransform: "none", color: "grey" }}>
                {" "}
              Enlace Externo
            </Typography>
            </Button>

            <Button className="flex-fill bd-highlight" style={{ cursor: "not-allowed" }} >
              <NearMeIcon className="mr-2" style={{ color: "#2980b9" }} />
              <Typography style={{ textTransform: "none", color: "grey" }}>
                Publicar
              </Typography>
            </Button>
          </div>

          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handlePopoverClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <Picker
              set="facebook"
              onClick={(emoji, event) => pepe(emoji, event)}
            />
          </Popover>
          {/* <OpcionesEncuesta/>

          <OpcionesEncuesta/> */}

        </CardContent>
      </Card>







    </div>
  );
}

export function OpcionesEncuesta({ idOpcion }) {
  const classes = useStyles();

  return (
    <div className="col-md-12">
      <div className="row">
        <div className="col-md-10 offset-md-1 align-self-center pl-0 mt-3">
          <div className={classes.inputPublicacion} >
            <div className={classes.icon}>
              <SpeakerNotesIcon />
            </div>
            <InputBase
              className="col-md-12"
              placeholder="Opcion 1"
              classes={{
                input: classes.inputInput,
              }}

            />
          </div>

        </div>
        <div className="col-md-1 mt-3 pl-0 ">
          <IconButton color="primary" aria-label="upload picture" component="span">
            <AddIcon />
          </IconButton>
        </div>
      </div>
    </div>
  )
}
