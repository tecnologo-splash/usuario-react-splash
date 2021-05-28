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
import {useLoginHook} from '../../hooks/useLoginHook';

import HomeIcon from "@material-ui/icons/Home";
import Box from "@material-ui/core/Box";
import { PerfilAvatar } from "../Home/Perfil/PerfilAvatar";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {StyledMenu,StyledMenuItem} from '../StyledMenus';

export default function RightMenuItems() {
  const estiloColor=css`color:white !important;`;

  const {logOut}=useLoginHook();


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
        <StyledMenuItem  onClick={logOut}>
          <ExitToAppIcon fontSize="small" className="mr-2" />
          Cerrar Sesion
        </StyledMenuItem>
      </StyledMenu>   
    
    </div>
  );
}