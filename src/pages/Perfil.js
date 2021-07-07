import React,{useEffect,useRef,useCallback} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {MenuHeader} from '../components/Menu/MenuHeader';
import CrearPublicacion from '../components/Home/Publicaciones/Creacion/CreacionPublicacion';
import {MisAmigos} from '../components/Home/Perfil/MisAmigos';
import {VisualizarPerfil} from '../components/Home/Perfil/VisualizarPerfil';
import { useLocation } from 'react-router-dom'
import {ListarMuro} from '../components/Home/Publicaciones/ListarMuro';
import useNearScreen from '../hooks/useNearScreen';
import {useInfoUserHook} from '../hooks/useInfoUserHook';
import  {usePublciacionesUsuario} from '../hooks/usePublciacionesUsuario';
import debounce from 'just-debounce-it';

const useStyles = makeStyles(theme => ({
  content: {
      padding: theme.spacing(3),
      backgroundColor:'#ecf0f1'
  },
}));

export default function Perfil() {


  const classes = useStyles();
const location = useLocation();
const { userInfo, loading } = useInfoUserHook();
const { cargando, datos, setPage,setTipoFiltro,editarPublicacion,eliminarPublicacion } = usePublciacionesUsuario({usuarioId:userInfo.id });

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
                <CrearPublicacion/>
                <ListarMuro 
                setTipoFiltro={setTipoFiltro}
                datos={datos} 
                loading={cargando} 
                externalRef={externalRef}
                userInfo={userInfo} 
                eliminarPublicacion={eliminarPublicacion}
                editarPublicacion={editarPublicacion}
                 />

              </>
            }
      
          </div>
 
      </div>
  </main>
 

</>
  );

}

