import React,{useState,useEffect} from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SettingsIcon from "@material-ui/icons/Settings";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import NotificationsIcon from "@material-ui/icons/Notifications";
import EmailIcon from "@material-ui/icons/Email";
import Badge from "@material-ui/core/Badge";
import {logoutSplash} from '../../config/api/tokenLogin';
import { useHistory } from "react-router-dom";

import HomeIcon from "@material-ui/icons/Home";
import Box from "@material-ui/core/Box";
import { PerfilAvatar } from "../Home/Perfil/PerfilAvatar";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {StyledMenu,StyledMenuItem} from '../StyledMenus';
import { useInfoUserHook } from "../../hooks/useInfoUserHook";

export default function RightMenuItems() {
  const estiloColor=css`color:white !important;`;
  let history = useHistory();
  const {userInfo,getDatos}=useInfoUserHook();

  const logOut=()=>{
    logoutSplash();
    history.push("/");         
  }

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

const irMiPerfil=()=>{
  history.push("/home/mi-perfil");
}

const irAlInicio=()=>{
  history.push("/home");
}

useEffect(()=>{
  getDatos();
})

  return (
    <div className="col-md-4 d-flex justify-content-end">

      <Tooltip title="Inicio">
        <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          size="small"
          css={estiloColor}
          onClick={irAlInicio}
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
          onClick={irMiPerfil}
        >
          <Box boxShadow={1} borderRadius={16} className="row">
            <PerfilAvatar img={userInfo.url_perfil} />

            <div className="align-self-center">{userInfo.nombre} {userInfo.apellido}</div>
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