import React,{useState} from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SettingsIcon from "@material-ui/icons/Settings";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import NotificationsIcon from "@material-ui/icons/Notifications";
import EmailIcon from "@material-ui/icons/Email";
import Badge from "@material-ui/core/Badge";
import Divider from "@material-ui/core/Divider";

import Typography from "@material-ui/core/Typography";

import HomeIcon from "@material-ui/icons/Home";
import Box from "@material-ui/core/Box";
import { PerfilAvatar } from "../Home/Perfil/PerfilAvatar";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {StyledMenu,StyledMenuItem} from '../StyledMenus';

export default function RightMenuItems() {
  
const estiloColor=css`
color:white;
`;
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div className="col-md-4 d-flex justify-content-end">

      <Tooltip title="Inicio">
        <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          size="small"
          css={estiloColor}
        >
          <Box boxShadow={1} borderRadius={16}>
            <HomeIcon fontSize="large" />
          </Box>
        </IconButton>
      </Tooltip>

      

      <Tooltip title="Notificaciones">
        <IconButton
          className="ml-3"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          size="small"
          css={estiloColor}
          onClick={handleClick2}
        >
          <Box boxShadow={1} borderRadius={16}>
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon fontSize="large" />
            </Badge>
          </Box>
        </IconButton>
      </Tooltip>

      <Tooltip title="Mensajes">
        <IconButton
          className="ml-3"
          aria-haspopup="true"
          size="small"
          css={estiloColor}
        >
          <Box boxShadow={1} borderRadius={16}>
            <Badge badgeContent={2} color="secondary">
              <EmailIcon fontSize="large" />
            </Badge>
          </Box>
        </IconButton>
      </Tooltip>

      <Tooltip title="Mi Perfil">
        <IconButton
          className="ml-4"
          aria-haspopup="true"
          size="small"
          css={estiloColor}
        >
          <Box boxShadow={1} borderRadius={16} className="row">
            <PerfilAvatar img="https://i.pinimg.com/originals/11/7e/93/117e9371c1a30a8de6fe51ac861cf247.jpg" />

            <div className="align-self-center">Pepe Rommpe</div>
          </Box>
        </IconButton>
      </Tooltip>

      <Tooltip title="Ver Más">
        <IconButton
          className="ml-3"
          aria-haspopup="true"
          size="small"
          onClick={handleClick}
          css={estiloColor}
        >
          <Box boxShadow={1} borderRadius={16}>
            <ExpandMoreIcon fontSize="large" />
          </Box>
        </IconButton>
      </Tooltip>

      <StyledMenu
        disableScrollLock
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <SettingsIcon fontSize="small" className="mr-2" />
          Configuracion
        </StyledMenuItem>
        <StyledMenuItem>
          <ExitToAppIcon fontSize="small" className="mr-2" />
          Cerrar Sesion
        </StyledMenuItem>
      </StyledMenu>
    
  
    
    
    
    </div>
  );
}
 {/*
<StyledMenu
disableScrollLock
anchorEl={anchorEl2}
keepMounted
open={Boolean(anchorEl2)}
onClose={handleClose2}
>
<StyledMenuItem>
  <ContactsIcon fontSize="small" className="mr-2 flex-wrap" style={{ color:'#6d31bf' }}/>
  <div className="d-flex flex-column">
  <Typography variant="subtitle2"  gutterBottom color="textPrimary" className="m-0">
  <b> Un nuevo Seguidor</b>
</Typography>
  <Typography variant="body2" gutterBottom color="textPrimary" >
Marcelo Tizzi
</Typography>
  <Typography variant="body2" gutterBottom color="textSecondary" >
     <div className="d-flex justify-content-start">@ Mtizzi</div> 
<div className="d-flex justify-content-end">03/12/2021 15:30</div>
</Typography>
</div>
</StyledMenuItem>

<Divider/>

<StyledMenuItem>
  <EmojiEmotionsIcon fontSize="small" className="mr-2 flex-wrap" style={{ color:'#6d31bf' }}/>
  <div className="d-inline-flex flex-column">
  <Typography variant="subtitle2"  gutterBottom color="textPrimary" className="m-0">
  <b> Reacciono a tu publicacion</b>
</Typography>
  <Typography variant="body2" gutterBottom color="textPrimary" >
Marcelo Tizzi
</Typography>
  <Typography variant="caption" gutterBottom color="textSecondary" className="m-0 p-0">
<div className="d-flex justify-content-start">@ Mtizzi</div> 
<div className="d-flex justify-content-end">03/12/2021 15:30</div>

</Typography>
</div>
</StyledMenuItem>
<Divider/>

<StyledMenuItem>
<AddCommentIcon fontSize="small" className="mr-2 flex-wrap" style={{ color:'#6d31bf' }}/>
<div className="d-inline-flex flex-column">
<Typography variant="subtitle2"  gutterBottom color="textPrimary" className="m-0">
<b> Comento tu publicacion</b>
</Typography>
<Typography variant="body2" gutterBottom color="textPrimary" >
Marcelo Tizzi
</Typography>
<Typography variant="caption" gutterBottom color="textSecondary" >
<div className="d-flex justify-content-start">@ Mtizzi</div> 
<div className="d-flex justify-content-end">03/12/2021 15:30</div>

</Typography>
</div>
</StyledMenuItem>
<Divider/>

<StyledMenuItem >
<PersonAddDisabledIcon fontSize="small" className="mr-2 flex-wrap" style={{ color:'#6d31bf' }}/>
<div className="d-inline-flex flex-column">
<Typography variant="subtitle2"  gutterBottom color="textPrimary" className="m-0">
<b> Te dejo de seguir</b>
</Typography>
<Typography variant="body2" gutterBottom color="textPrimary" >
Marcelo Tizzi
</Typography>
<Typography variant="caption" gutterBottom color="textSecondary" >
<div className="d-flex justify-content-start">@ Mtizzi</div> 
<div className="d-flex justify-content-end">03/12/2021 15:30</div>

</Typography>
</div>
</StyledMenuItem>
<Divider/>

<StyledMenuItem>
  <VisibilityIcon fontSize="small" className="mr-2" />
  Ver más
</StyledMenuItem>
</StyledMenu>
*/}