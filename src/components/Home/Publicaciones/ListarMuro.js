import React, { useEffect, useState, Suspense, useRef, useCallback } from 'react';
import { PublicacionHeader } from './PublicacionHeader';
import { Acciones } from './Acciones';
import Card from "@material-ui/core/Card";
import SimplePublicacion from './SimplePublicacion';
import CarrouselPublicacion from './CarrouselPublicacion';
import EncuestaPublicacion from './EncuestaPublicacion';
import LinkExternoPublicacion from './LinkExternoPublicacion';
import { SoloTextoPublicacion } from './SoloTextoPublicacion';
import useNearScreen from '../../../hooks/useNearScreen';
import { useMuroHook } from '../../../hooks/useMuroHook';
import debounce from 'just-debounce-it';
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
  media: {
    height: 190,
  },
}));

export function ListarMuro() {
  const { loading, datos, setPage } = useMuroHook({ tipo_filtro: '' });
  const externalRef = useRef();

  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false
  })

  const debounceHandleNextPage = useCallback(debounce(
    () =>
      setPage(prevPage => prevPage + 1)
    , 200), [setPage])

  useEffect(function () {
    if (isNearScreen ) debounceHandleNextPage()
  }, [debounceHandleNextPage, isNearScreen])

  console.log(datos);

  return (
    <>
      {loading && datos.length===0
        ? <div className="col-md-8 offset-md-2 mb-4">   <>
       <CargandoPublicacion /><br/><CargandoPublicacion /></>
        </div>
        : <>

          {datos.map((item, index) => (
            <div className="col-md-8 offset-md-2 mb-4" key={index}>

              <Card >
                <PublicacionHeader
                  nombre={item.usuario_comun.nombre}
                  apellido={item.usuario_comun.apellido}
                  url_perfil={item.usuario_comun.url_perfil}
                  usuario={"@" + item.usuario_comun.usuario}
                  id={item.usuario_comun.id}
                  fecha_publicacion={item.fecha_creado}
                />
                {Publicaciones({ item })}

                <Acciones resumen_reaccion={item.resumen_reaccion} publicacionId={item.id} />

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

export function Publicaciones({ item }) {

  if (item.encuesta !== null) {//es necuesta
    return <EncuestaPublicacion publicacionData={item} />;
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