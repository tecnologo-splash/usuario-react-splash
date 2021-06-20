import React, { useEffect, useState } from 'react';
import Avatar from "@material-ui/core/Avatar";
import CreateIcon from '@material-ui/icons/Create';
import Badge from '@material-ui/core/Badge';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { URL_BASE_FILE_STORAGE } from '../../../config/api/settings';
import { useParams } from 'react-router';
import { useInfoUserHook } from '../../../hooks/useInfoUserHook';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { StyledMenu, StyledMenuItem } from '../../StyledMenus';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {MisDatosPersonales} from './MisDatosPerfil';
import PerfilData from '../../Loading/PerfilData';
import Skeleton from '@material-ui/lab/Skeleton';
import Button from '@material-ui/core/Button';

import { ModalEditarMisDatos } from './ModalEditarMisDatos';
export function VisualizarPerfil() {

    const { id } = useParams();
    const [anchorEl, setAnchorEl] = useState(null);

    const useStyles = makeStyles(theme => ({
        large: {
            width: theme.spacing(20),
            height: theme.spacing(20),
        },
    }));

    const classes = useStyles();
    const SmallAvatar = withStyles((theme) => ({
        root: {
            width: 32,
            height: 32,
            border: `2px solid ${theme.palette.background.paper}`,
            '&:hover': {
                cursor: "pointer",
                backgroundColor: '#6F32C1'
            },
        },
    }))(Avatar);


    const { getDatos, userInfo,actualizarDatosUsuario,mensajeActualizarDatos,getDatosOtroUsuario,otroUsuarioInfo } = useInfoUserHook();
    const [uInfo, setUserInfo] = useState(userInfo);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        if (id === undefined) {//mi perfil
            console.log(userInfo);
            setUserInfo(userInfo);
            if (userInfo.usuario === "") {
                getDatos();
            }

        } else {//perfil de otro usuario
            getDatosOtroUsuario(id);
            setUserInfo(otroUsuarioInfo);

        }
 
    }, [userInfo])

    const openPover=(e)=>{
        if(id===undefined){
            setAnchorEl(e.currentTarget)

        }
    }
    return (

        <div className="col-md-3" >
            <div className="sticky-top" style={{ top: '80px' }}>
                <center>
  
                {uInfo.url_perfil===""
                ?
                <PerfilData />

            :
            <>
            <Badge
                overlap="circle"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                onClick={openPover}

                badgeContent={
                    id === undefined ?
                        <SmallAvatar alt="Editar Mi Perfil" children={<CreateIcon />} /> : null
                }>

                <Zoom zoomMargin={150}>
                    <Avatar alt="Profile"
                        src={URL_BASE_FILE_STORAGE + uInfo.url_perfil}
                        className={classes.large} />
                </Zoom>

            </Badge>

            <div className="col-md-12 mt-1">   <Typography variant="h6">
                {uInfo.nombre} {uInfo.apellido}
            </Typography></div>
            <div className="col-md-12">@{uInfo.usuario}</div>
</>
            }
            {
                id!==undefined
                ?
                <>
                <Button variant="contained" size="small" color="primary" className="mt-2">
                Seguir
              </Button>
              <Button variant="outlined" size="small" color="secondary" className="mt-2">
                Dejar de Seguir
              </Button>
              </>
                :
                null
            }
         
                    <hr />
                    <div className="row d-flex justify-content-around">
                        <div >

                            <Typography variant="body1">
                                <b>    Me Siguen     </b> </Typography>
                        </div>
                        <div > <Typography variant="body1">
                            <b>    Yo Sigo     </b>   </Typography></div>
                    </div>
                    <div className="row d-flex justify-content-around">

                        <div>{uInfo.cantidad_usuarios_seguidores}</div>
                        <div>{uInfo.cantidad_usuarios_siguiendo}</div>
                    </div>
                </center>
                
                {
                    id === undefined ?

                        <MisDatosPersonales data={uInfo} />
                        :
                        <>
                        <hr />
                        <Typography variant="h6" className="d-flex justify-content-center mb-3">
                            ¿Quien soy?
                     </Typography>
                        <div>
                            {uInfo.biografia}
                        </div>
                        </>
                }
            </div>


            <StyledMenu
                disableScrollLock
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'center',
                    horizontal: 'left',
                }}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={() => (setAnchorEl(null))}
                onClick={() => (setAnchorEl(null))}
            >
                <StyledMenuItem onClick={()=>setOpenModal(true)} >
                    <EditIcon fontSize="small" className="mr-2" />
                    Editar Datos
                </StyledMenuItem>

                <StyledMenuItem>
                    <AddAPhotoIcon fontSize="small" className="mr-2" />
                        Editar Foto
                </StyledMenuItem >

                <StyledMenuItem>
                    <DeleteIcon fontSize="small" className="mr-2" />
                    Eliminar Foto
                </StyledMenuItem>
            </StyledMenu>

{
    openModal ?  <ModalEditarMisDatos 
    openModal={openModal} 
    setOpenModal={setOpenModal}
     userData={userInfo}
     actualizarDatosUsuario={actualizarDatosUsuario}
     mensajeActualizarDatos={mensajeActualizarDatos}
     />
    : null
}
           
    
    
      {/*<Snackbar open={openAlert} autoHideDuration={6000} onClose={handleCloseAlert}>
        <Alert onClose={handleCloseAlert} variant="outlined" style={{color:'black', backgroundColor:'white' }}>
         ¡Registrado con exito!<br/>
         Para activar su cuenta dirigiase a su email
        </Alert>
            </Snackbar>*/}
    
        </div>
    )
}