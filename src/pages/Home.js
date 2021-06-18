import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SimplePublicacion from '../components/Home/Publicaciones/SimplePublicacion';
import CarrouselPublicacion from '../components/Home/Publicaciones/CarrouselPublicacion';
import EncuestaPublicacion from '../components/Home/Publicaciones/EncuestaPublicacion';
import LinkExternoPublicacion from '../components/Home/Publicaciones/LinkExternoPublicacion';
import {MenuHeader} from '../components/Menu/MenuHeader';
import CrearPublicacion from '../components/Home/Publicaciones/Creacion/CreacionPublicacion';
import {ListAmigosSugeridos} from '../components/Home/AmigosSugeridos/ListAmigosSugeridos';
import {FiltroPublicacion} from '../components/Home/Publicaciones/FiltroPublicaciones';
import {ListarPublicacionMisSegudiores} from '../services/MuroApi';

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
    {console.log(datos)}

          {datos.map((item,index)=>{
                    if(item.encuesta!==null){//es necuesta
                      return  <EncuestaPublicacion key={item.id} publicacionData={item}/>;
                    }else if(item.enlace_externo.length >0){//es enlace externo
                      return  <LinkExternoPublicacion publicacionData={item} key={item.id}/>;
                    }else if(item.multimedia.length >0){//es multimedia  ver si es carrusel o no
                      if(item.multimedia.length===1){
                        return <SimplePublicacion publicacionData={item} key={item.id}/> ;
                      }else{
                        return  <CarrouselPublicacion publicacionData={item} key={item.id}/>;
                      }
                    }else{//publicacion solo texto
                      return "";
                    }
          }
                              
             
          )}        
         
         

          </div>
 
      </div>
  </main>
 

</>
  );
}
