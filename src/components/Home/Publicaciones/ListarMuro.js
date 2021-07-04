import React,{useEffect} from 'react';
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

const useStyles = makeStyles((theme) => ({
  media: {height: 190, },
}));

export function ListarMuro({datos=[],loading,externalRef,eliminarPublicacion,editarPublicacion,userInfo,userUrlMe={},setTipoFiltro}) {
 
  return (
    <>
        <FiltroPublicacion setTipoFiltro={setTipoFiltro}/>

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
                  meId={userInfo.id}
                  publicacionId={item.id}
                  eliminarPublicacion={eliminarPublicacion}
                  editarPublicacion={editarPublicacion}
                  textoEdicion={item.texto}
                />
                {Publicaciones({ item })}

                <Acciones resumen_reaccion={item.resumen_reaccion} publicacionId={item.id} 
                comentarios={item.comentarios}  userInfo={userInfo}
                idOtroUsuario={item.usuario_comun.id}
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