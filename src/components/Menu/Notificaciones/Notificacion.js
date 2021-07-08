import React,{useEffect,useState} from 'react';
import NotificationsIcon from "@material-ui/icons/Notifications";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {StyledMenu,StyledMenuItem} from '../../StyledMenus';
import Badge from "@material-ui/core/Badge";
import Box from "@material-ui/core/Box";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import {PerfilAvatar} from '../../Home/Perfil/PerfilAvatar';
import { useHistory } from "react-router-dom";
import {useNotificacionHook} from '../Notificaciones/useNotificacionHook';

const estiloColor=css`color:white !important;`;

export  function Notificacion() {
  const [anchorEl, setAnchorEl] = useState(null);
    const {data,verMasNotis,cantNotis}=useNotificacionHook();
    let history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


const handleGoToNoti=(item)=>{
    if(item.tipo_notificacion==='REACCION_EN_PUBLICACION'){
        history.push('/home/mi-perfil/publicacion/'+item.referencia_notificacion.publicacion_id);
    }else if(item.tipo_notificacion==='CHAT_MENSAJE_NUEVO'){
        history.push('/home/chat');
    }
}
  return (
    <div>

      <Tooltip title="Notificaciones">
        <IconButton
          className="ml-3"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          size="small"
          css={estiloColor}
          onClick={handleClick}
        >
          <Box boxShadow={1} borderRadius={16}>
            <Badge badgeContent={cantNotis} color="secondary">
              <NotificationsIcon fontSize="large" />
            </Badge>
          </Box>
        </IconButton>
      </Tooltip>

      <StyledMenu
        className="mt-2 "
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        disableScrollLock
       
      >
    
    {
        data.map((item,i)=>(
    <StyledMenuItem key={i} onClick={()=>handleGoToNoti(item)}>
          <ListItemIcon>
        
          <PerfilAvatar size='small'/>

          </ListItemIcon>
          <ListItemText>
            <div className="d-flex justify-content-start row">

            <Typography variant="body2" display="block" gutterBottom className=" pr-3  text-wrap"  style={{ width:'200px' }}>
               {item.texto}
            </Typography>
            </div>
            <div className="mt-1 d-flex justify-content-end">        
            <Typography variant="caption" display="block" gutterBottom>
               {item.fecha_creado}
            </Typography>
            </div>
        </ListItemText>
        <Divider />
        </StyledMenuItem>
   
        ))
    }
      <Divider />
      <StyledMenuItem onClick={verMasNotis}>
      <ListItemText>
          <center>
    Ver Mas
    </center>
    </ListItemText>
    </StyledMenuItem>


      </StyledMenu>

        </div>
  );
}