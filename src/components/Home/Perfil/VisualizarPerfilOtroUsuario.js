import React, { useEffect, useState } from 'react';
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { URL_BASE_FILE_STORAGE } from '../../../config/api/settings';
import { useParams } from 'react-router';
import 'react-medium-image-zoom/dist/styles.css';
import { useInfoUserHook } from '../../../hooks/useInfoUserHook';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import Button from '@material-ui/core/Button';
import PerfilDataLoading from '../../Loading/PerfilDataLoading';
import Skeleton from '@material-ui/lab/Skeleton';
import { useAmigosSugeridosHook } from '../../../hooks/useAmigosSugeridosHook';

const useStyles = makeStyles(theme => ({
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
}));

export function VisualizarPerfilOtroUsuario({ otroUsuarioInfo, loading }) {

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
                            <SeguirDejarDeSeguir otroUsuarioInfo={otroUsuarioInfo} />
                        }


                        <hr />
                        <div className="row d-flex justify-content-around">
                            <div >
                                <Typography variant="body1">
                                    <b>    Seguidores     </b> </Typography>
                            </div>
                            <div > <Typography variant="body1">
                                <b>    Siguiendo     </b>   </Typography></div>
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
                            ¿Quien soy?
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
    return (
        <>
            <Zoom zoomMargin={150}>
                <Avatar alt="Profile"
                    src={URL_BASE_FILE_STORAGE + uInfo.url_perfil}
                    className={classes.large} />
            </Zoom>

            <div className="col-md-12 mt-1">   <Typography variant="h6">
                {uInfo.nombre} {uInfo.apellido}
            </Typography></div>
            <div className="col-md-12">@{uInfo.usuario}</div>
        </>
    )
}

export function SeguirDejarDeSeguir({ otroUsuarioInfo }) {
    const [follow, setFollow] = useState(otroUsuarioInfo.lo_sigo);
    const { dejarDeSeguir, seguirUsuario } = useAmigosSugeridosHook();
    const comenzarASeguir = () => {
        seguirUsuario(otroUsuarioInfo.id);
        setFollow(true);

    }
    const dejarDeSeguirUsuario = () => {
        dejarDeSeguir(otroUsuarioInfo.id);
        setFollow(false);
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
        </>
    )
}