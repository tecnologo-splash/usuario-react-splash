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
import PerfilDataLoading from '../../Loading/PerfilDataLoading';
import Skeleton from '@material-ui/lab/Skeleton';

import { ModalEditarMisDatos } from './ModalEditarMisDatos';
import { ModalEliminarFoto } from './ModalEliminarFoto';
import { ModalEditarFoto } from './ModalEditarFoto';

const useStyles = makeStyles(theme => ({
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
}));

export function VisualizarPerfil() {

    const { id } = useParams();
    const [anchorEl, setAnchorEl] = useState(null); 


    const { getDatos, userInfo,actualizarDatosUsuario,mensajeActualizarDatos,loading,setLoading, actualizarFotoUsuario, eliminarFotoUsuario,} = useInfoUserHook();
    const [openModal, setOpenModal] = useState(false);
    const [perfilUpdate, setPerfilUpdate] = useState(false);
    const [openModalFoto, setOpenModalFoto] = useState(false);
    const [openModalEliminar, setOpenModalEliminar] = useState(false);

    useEffect(() => {
            console.log("mi perfil")
      
            if (userInfo.usuario === "" || perfilUpdate) {
                getDatos();
                setPerfilUpdate(false)
            }else{
                setLoading(false);
            }
      
    }, [id, perfilUpdate])

    console.log("cargando "+loading)
    const openPover=(e)=>{
            setAnchorEl(e.currentTarget)
    }

    return (

        <div className="col-md-3" >
            <div className="sticky-top" style={{ top: '80px' }}>
                <center>
  
  {
      loading?
      <PerfilDataLoading />
      :
      <PerfilLateral id={id} uInfo={userInfo} openPover={openPover}/>
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
                    {
                                loading ?
                                <>
                                <Skeleton width={50}  height={20} />
                                <Skeleton width={50}  height={20} />
                                </>
                            :
                            <>
                            <div>{userInfo.cantidad_usuarios_seguidores}</div>
                            <div>{userInfo.cantidad_usuarios_siguiendo}</div>
                            </>
                            }
                         
                    
                    
                    </div>
                </center>
                
           <MisDatosPersonales data={userInfo} loading={loading} />
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

                <StyledMenuItem onClick={()=>setOpenModalFoto(true)}>
                    <AddAPhotoIcon fontSize="small" className="mr-2" />
                        Editar Foto
                </StyledMenuItem >

                <StyledMenuItem onClick={()=>setOpenModalEliminar(true)}>
                    <DeleteIcon fontSize="small" className="mr-2" />
                    Eliminar Foto
                </StyledMenuItem>
            </StyledMenu>

{
    openModal ?  <ModalEditarMisDatos 
    openModal={openModal} 
    getDatos={getDatos}
    setOpenModal={setOpenModal}
     userData={userInfo}
     setUpdate={setPerfilUpdate}
     actualizarDatosUsuario={actualizarDatosUsuario}
     mensajeActualizarDatos={mensajeActualizarDatos}
     />
    : null
}
{
    openModalFoto ?  <ModalEditarFoto 
    openModal={openModalFoto} 
    getDatos={getDatos}
    setOpenModal={setOpenModalFoto}
     userData={userInfo}
     setUpdate={setPerfilUpdate}
     actualizarFotoUsuario={actualizarFotoUsuario}
     mensajeActualizarDatos={mensajeActualizarDatos}
     />
    : null
}
{
    openModalEliminar ?  <ModalEliminarFoto 
    openModal={openModalEliminar} 
    setOpenModal={setOpenModalEliminar} 
    getDatos={getDatos}
     userData={userInfo}
     setUpdate={setPerfilUpdate}
     eliminarFotoUsuario={eliminarFotoUsuario}
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

export function PerfilLateral({id,uInfo,openPover}){
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


    return(
        <>
        <Badge
        overlap="circle"
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        onClick={openPover}

        badgeContent={
                <SmallAvatar alt="Editar Mi Perfil" children={<CreateIcon />} />
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
    )
}