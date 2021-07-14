import React, { useEffect, useState } from 'react';
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { URL_BASE_FILE_STORAGE } from '../../../config/api/settings';
import 'react-medium-image-zoom/dist/styles.css';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import Button from '@material-ui/core/Button';
import PerfilDataLoading from '../../Loading/PerfilDataLoading';
import Skeleton from '@material-ui/lab/Skeleton';
import ChatIcon from '@material-ui/icons/Chat';
import {EnviarMensajePerfilUsuario} from '../../Chat/EnviarMensajePerfilUsuario';
import { Denunciar } from './Denunciar';

const useStyles = makeStyles(theme => ({
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    }
}));

export function VisualizarPerfilOtroUsuario({ otroUsuarioInfo, loading,dejarDeSeguir, comensarASeguir  }) {

    console.log(otroUsuarioInfo)
    console.log("carngado " + loading)

    return (

        <>
            <div className="col-md-3" >
                <div className="sticky-top" style={{ top: '80px' }}>
                    <center>
                        {loading ? <PerfilDataLoading /> :
                            <PerfilLateral uInfo={otroUsuarioInfo} />
                        }

                        {loading ? <Skeleton width={150} height={50} />
                            :
                            <SeguirDejarDeSeguir otroUsuarioInfo={otroUsuarioInfo}
                            dejarDeSeguir={dejarDeSeguir} comensarASeguir={comensarASeguir} />
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
                                        <Skeleton width={50} height={20} />
                                        <Skeleton width={50} height={20} />
                                    </>
                                    :
                                    <>
                                        <div>{otroUsuarioInfo.cantidad_usuarios_seguidores}</div>
                                        <div>{otroUsuarioInfo.cantidad_usuarios_siguiendo}</div>
                                    </>
                            }

                        </div>
                        <hr />
                        <Typography variant="h6" className="d-flex justify-content-center mb-3">
                            ¿Quién soy?
                        </Typography>
                        <div>
                            {loading ?
                                <Skeleton width={250} height={100} />
                                :
                                otroUsuarioInfo.biografia
                            }
                        </div>
                    </center>
                </div>
            </div>
        </>

    )

}

export function PerfilLateral({ uInfo }) {
    const classes = useStyles();
    const img_perfil_sin_imagen=process.env.PUBLIC_URL + '/recursos/svg/perfil_sin_imagen.svg';
   const img= uInfo.url_perfil===null ? img_perfil_sin_imagen : URL_BASE_FILE_STORAGE+uInfo.url_perfil;
    return (
        <>
            <Zoom zoomMargin={150}>
                <Avatar alt="Profile"
                    src={img}
                    className={classes.large} />
            </Zoom>

            <div className="col-md-12 mt-1">   <Typography variant="h6">
                {uInfo.nombre} {uInfo.apellido}
            </Typography></div>
            <div className="col-md-12">@{uInfo.usuario}</div>
        </>
    )
}

export function SeguirDejarDeSeguir({ otroUsuarioInfo,dejarDeSeguir, comensarASeguir  }) {
    const [follow, setFollow] = useState(otroUsuarioInfo.lo_sigo);
    const [open,setOpen]=useState(false);


    const comenzarASeguir = () => {
        comensarASeguir(otroUsuarioInfo.id);
        setFollow(true);

    }
    const dejarDeSeguirUsuario = () => {
        dejarDeSeguir(otroUsuarioInfo.id);
        setFollow(false);
    }
    
    const handleClick = () => {
        setOpen(true);
    }


    return (
        <>
          
                    {follow ?
                        <Button variant="outlined" size="small" color="secondary" className="mt-2" onClick={dejarDeSeguirUsuario}>
                            Dejar de Seguir
                        </Button>
                        :
                        <Button variant="contained" size="small" color="primary" className="mt-2" onClick={comenzarASeguir}>
                            Seguir
                        </Button>
                    }
                    <div className="col-md-12">
                    <Denunciar
                        datosUsuario = {otroUsuarioInfo}
                    >
                        Reportar
                    </Denunciar>
                    </div>


           <div className="mt-3">
                <Button variant="contained" size="small" color="inherit"
                   startIcon={<ChatIcon fontSize="small"/>}  
                   onClick={handleClick}>

                Enviar Mensaje
                </Button>
        </div>


        <EnviarMensajePerfilUsuario open={open} setOpen={setOpen} title="Enviar Mensaje" usuarioIdDos={otroUsuarioInfo.id}/>


        </>
    )
}