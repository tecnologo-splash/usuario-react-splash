import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {MenuHeader} from '../components/Menu/MenuHeader';
import {VisualizarPerfil} from '../components/Home/Perfil/VisualizarPerfil';
import { PublicacionHeader } from '../components/Home/Publicaciones/PublicacionHeader';
import { Acciones } from '../components/Home/Publicaciones/Acciones/Acciones';
import {Publicaciones} from '../components/Home/Publicaciones/ListarMuro';
import {useInfoUserHook} from '../hooks/useInfoUserHook';
import Card from "@material-ui/core/Card";
import { useParams } from 'react-router';

import {Publicacion } from '../services/MuroApi';

const useStyles = makeStyles(theme => ({
  content: {
      padding: theme.spacing(3),
      backgroundColor:'#ecf0f1'
  },
}));

export default function NotificacionPublicacion() {
//Publicacion
    const { id } = useParams();
  const classes = useStyles();
  const { userInfo, loading,getDatos } = useInfoUserHook();
  const [item,setPublicacionData]=useState([]);
  const [error,setError]=useState(false);

  useEffect(()=>{
    getDatos();
    getDatosPublicacion();
    },[id])
  
    const getDatosPublicacion=async()=>{
        console.log("--->",id);
        const response=await  Publicacion({publicacionId:id});
        console.log(response);
      
        if(response.status===404){
          setError(true)
        }else{
          setPublicacionData(response);
       
        }
       
     
    }
  
    const eliminarPublicacion=()=>{

    }
    const editarPublicacion=()=>{

    }
  
    return (
      <>
      <MenuHeader/>
    <main className={classes.content}>
          
          <div className="row">
      
            <VisualizarPerfil/>
          
      
          <div className="col-md-9">
          <div className="col-md-8 offset-md-2 mb-4">
              {!loading && !error?
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
               <Publicaciones item={item} />

               <Acciones resumen_reaccion={item.resumen_reaccion} publicacionId={item.id} 
               comentarios={item.comentarios}  userInfo={userInfo}
               idOtroUsuario={item.usuario_comun.id}
               />

             </Card>
             :
             error ?"Error publicación no existe" :
             null
            
            }
             

            </div>
      
          </div>
 
      </div>
  </main>
 

</>
  );

}

