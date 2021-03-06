import React,{useEffect,useRef,useCallback} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {MenuHeader} from '../components/Menu/MenuHeader';
import CrearPublicacion from '../components/Home/Publicaciones/Creacion/CreacionPublicacion';
import {MisAmigos} from '../components/Home/Perfil/MisAmigos';
import {VisualizarPerfil} from '../components/Home/Perfil/VisualizarPerfil';
import { useLocation } from 'react-router-dom'
import {ListarMuro,CargandoPublicacion} from '../components/Home/Publicaciones/ListarMuro';
import {useInfoUserHook} from '../hooks/useInfoUserHook';
import { usePublciacionesUsuario } from '../hooks/usePublciacionesUsuario';

const useStyles = makeStyles(theme => ({
  content: {
      padding: theme.spacing(3),
      backgroundColor:'#ecf0f1'
  },
}));

export default function Perfil() {


 const classes = useStyles();
const location = useLocation();
const { userInfo, loading,getDatos } = useInfoUserHook();
const {  datos, setPage,setTipoFiltro,editarPublicacion,eliminarPublicacion,tipoFiltro } 
  = usePublciacionesUsuario({usuarioId:userInfo.id,tipo:'yo'});

useEffect(function () {
  getDatos();
 }, [])

  return (
      <>
      <MenuHeader/>
    <main className={classes.content}>
          
          <div className="row">
      
            <VisualizarPerfil/>
          
      
          <div className="col-md-9">
            {
              location.pathname==="/home/mi-perfil/amigos"
              ?
              <MisAmigos/>
              :
              <>
                <CrearPublicacion  userInfo={userInfo}/>
                {!loading ?
                  <ListarMuro 
                  userInfo={userInfo} 
                loading={loading}
                  datos={datos}
                setPage={setPage} 
                eliminarPublicacion={eliminarPublicacion}
                editarPublicacion={editarPublicacion}
                setTipoFiltro={setTipoFiltro}
                tipoFiltro={tipoFiltro}
                    />
                    : <div className="col-md-8 offset-md-2 mb-4">   <>
                    <CargandoPublicacion /><br/><CargandoPublicacion /></>
                     </div>
                }
              

              </>
            }
      
          </div>
 
      </div>
  </main>
 

</>
  );

}

