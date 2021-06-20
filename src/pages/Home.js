import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SimplePublicacion from '../components/Home/Publicaciones/SimplePublicacion';
import CarrouselPublicacion from '../components/Home/Publicaciones/CarrouselPublicacion';
import EncuestaPublicacion from '../components/Home/Publicaciones/EncuestaPublicacion';
import LinkExternoPublicacion from '../components/Home/Publicaciones/LinkExternoPublicacion';
import {MenuHeader} from '../components/Menu/MenuHeader';
import CrearPublicacion from '../components/Home/Publicaciones/Creacion/CreacionPublicacion';
import {ListAmigosSugeridos} from '../components/Home/AmigosSugeridos/ListAmigosSugeridos';
import {SoloTextoPublicacion} from '../components/Home/Publicaciones/SoloTextoPublicacion';

import {FiltroPublicacion} from '../components/Home/Publicaciones/FiltroPublicaciones';
import {ListarPublicacionMisSegudiores} from '../services/MuroApi';
import {PublicacionHeader} from '../components/Home/Publicaciones/PublicacionHeader';
import {Acciones} from '../components/Home/Publicaciones/Acciones';
import {PublicacionReaccionada} from '../components/Home/Publicaciones/PublicacioReaccionada';
import CardContent from "@material-ui/core/CardContent";


import Card from "@material-ui/core/Card";

export default function Home() {
const useStyles = makeStyles(theme => ({
    content: {
        padding: theme.spacing(3),
        backgroundColor:'#ecf0f1'
    }
 }));

  const classes = useStyles();
const [datos,setDatos]=useState([]);

  useEffect(()=>{
    (async()=>{
      const response=await ListarPublicacionMisSegudiores({order:"fechaCreado",by:"desc"});
        const {content}=response;
      setDatos(content)
      console.log(content);
    })()
  },[])

  return (
      <>
      <MenuHeader/>
    <main className={classes.content}>
          
          <div className="row">

            <ListAmigosSugeridos/>

    
          <div className="col-md-9">
          <CrearPublicacion/>
          <FiltroPublicacion/>

                {datos.map((item,index)=>(
                      <div className="col-md-8 offset-md-2 mb-4" key={index}>

                  <Card >
    <PublicacionHeader
         nombre={item.usuario_comun.nombre}  
         apellido={item.usuario_comun.apellido}
        url_perfil={item.usuario_comun.url_perfil}
        usuario={"@"+item.usuario_comun.usuario}
        id={item.usuario_comun.id}
        fecha_publicacion={item.fecha_creado}
        />
              {Publicaciones({item})}
      
              <Acciones resumen_reaccion={item.resumen_reaccion} publicacionId={item.id}/>

                  </Card>

       </div>
                ))}    

        

          </div>
 
      </div>
  </main>
 

</>
  );

}

export function Publicaciones({item}){
  console.log(item);
  if(item.encuesta!==null){//es necuesta
    return  <EncuestaPublicacion publicacionData={item}/>;
  }else if(item.enlace_externo.length >0){//es enlace externo
    return  <LinkExternoPublicacion publicacionData={item} />;
  }else if(item.multimedia.length >0){//es multimedia  ver si es carrusel o no
    if(item.multimedia.length===1){
      return <SimplePublicacion publicacionData={item}/> ;
    }else{
      return  <CarrouselPublicacion publicacionData={item}/>;
    }
  }else{//publicacion solo texto
    return <SoloTextoPublicacion  publicacionData={item}/>;
  }
}