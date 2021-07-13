import React,{useEffect, useCallback, useRef } from 'react';
import { PublicacionHeader } from './PublicacionHeader';
import { Acciones } from './Acciones/Acciones';
import Card from "@material-ui/core/Card";
import SimplePublicacion from './SimplePublicacion';
import CarrouselPublicacion from './CarrouselPublicacion';
import EncuestaPublicacion from './EncuestaPublicacion';
import LinkExternoPublicacion from './LinkExternoPublicacion';
import { SoloTextoPublicacion } from './SoloTextoPublicacion';
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Skeleton from '@material-ui/lab/Skeleton';
import {FiltroPublicacion} from '../Publicaciones/FiltroPublicaciones';
import debounce from 'just-debounce-it';
import useNearScreen from '../../../hooks/useNearScreen';
import {PublicacionHeaderCompartida} from './PublicacionHeaderCompartida';

const useStyles = makeStyles((theme) => ({
  media: {height: 190, },
}));

export function ListarMuro({userInfo,loading, datos=[], setPage, 
  eliminarPublicacion, editarPublicacion,setTipoFiltro }) {
  const externalRef = useRef();

      console.log(datos);
      console.log(loading);
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false
  })

  const debounceHandleNextPage = useCallback(debounce(
    () =>
      setPage(prevPage => prevPage + 1)
    , 200), [setPage])

  useEffect(function () {
    if (isNearScreen) debounceHandleNextPage()
  }, [debounceHandleNextPage, isNearScreen])

  return (
    <>
        <FiltroPublicacion setTipoFiltro={setTipoFiltro}/>
    

      {loading 
        ? <div className="col-md-8 offset-md-2 mb-4">   <>
       <CargandoPublicacion /><br/><CargandoPublicacion /></>
        </div>
        :datos.length===0 && !loading ? <div className="col-md-8 offset-md-2 mb-4"> Sin Publicaciones que mostrar</div> :
        <>
          {datos.map((item, index) => (
            <div className="col-md-8 offset-md-2 mb-4 p-2" key={index}>
              <Card >
                <PublicacionHeader
                  nombre={item.usuario_comun.nombre}
                  apellido={item.usuario_comun.apellido}
                  url_perfil={item.usuario_comun.url_perfil}
                  usuario={"@" + item.usuario_comun.usuario}
                  id={item.usuario_comun.id}
                  fecha_publicacion={item.fecha_creado}
                  meId={userInfo.id}
                  publicacionId={item.id}
                  eliminarPublicacion={eliminarPublicacion}
                  editarPublicacion={editarPublicacion}
                  textoEdicion={item.texto}
                  publicacionCompartida={item.publicacion_compartida!==null ? " - Publicacion compartida":""}
                />
                   <Publicaciones item={item} id={item.usuario_comun.id}  idMe={userInfo.id}/>
                 {item.publicacion_compartida!==null ?
                    <PublicacionCompartida
                    item={item.publicacion_compartida} 
                    meId={userInfo.id}
                    />
                    :
                     null
                 }
                 
                 <Acciones resumen_reaccion={item.resumen_reaccion} publicacionId={item.id} 
                comentarios={item.comentarios}  userInfo={userInfo}
                idOtroUsuario={item.usuario_comun.id} compartir={item.publicacion_compartida}
                />

              </Card>

            </div>
          ))}
          <div id="visor" ref={externalRef}>
            <div className="col-md-8 offset-md-2 mb-4">
                <CargandoPublicacion />
            </div>
          </div>
        </>
      }

    </>
  )
}

export function Publicaciones({ item,id,idMe }) {

  if (item.encuesta !== null) {//es necuesta
    return <EncuestaPublicacion textoPublicacion={item.texto} encuestaPublicacion={item.encuesta} id={id} idMe={idMe} publicacionId={item.id}/>;
  } else if (item.enlace_externo.length > 0) {//es enlace externo
    return <LinkExternoPublicacion publicacionData={item} />;
  } else if (item.multimedia.length > 0) {//es multimedia  ver si es carrusel o no
    if (item.multimedia.length === 1) {
      return <SimplePublicacion publicacionData={item} />;
    } else {
      return <CarrouselPublicacion publicacionData={item} />;
    }
  } else {//publicacion solo texto
    return <SoloTextoPublicacion publicacionData={item} />;
  }
}

export function CargandoPublicacion() {
  const classes = useStyles();

  return (

    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Skeleton animation="wave" variant="circle" width={40} height={40} />
        }

        title={
          <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />

        }
        subheader={<Skeleton animation="wave" height={10} width="40%" />}
      />
      <Skeleton animation="wave" variant="rect" className={classes.media} />


      <CardContent>
        <>
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} width="80%" />
        </>

      </CardContent>
    </Card>

  );
}

export function PublicacionCompartida({item,meId}){
  return (
    <div className="border border-light rounded">
     {
       item.publicacion!==null
       ?
       <>
       <PublicacionHeaderCompartida
       nombre={item.publicacion.usuario_comun.nombre}
       apellido={item.publicacion.usuario_comun.apellido}
       usuario={"@"+item.publicacion.usuario_comun.usuario}
       url_perfil={item.publicacion.usuario_comun.url_perfil}
       id={item.publicacion.usuario_comun.id}
       fecha_publicacion={item.publicacion.fecha_creado}
       meId={meId}
       />
       <Publicaciones item={item.publicacion} id={item.publicacion.usuario_comun.id}  idMe={meId}/>
      </>
       :<center>Publciacion Borrada por el creador de la misma</center>
     }

  </div>
  )
}