import React,{useEffect,useRef,useCallback} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {MenuHeader} from '../components/Menu/MenuHeader';
import {FiltroPublicacion} from '../components/Home/Publicaciones/FiltroPublicaciones';
import {VisualizarPerfilOtroUsuario} from '../components/Home/Perfil/VisualizarPerfilOtroUsuario';
import { useParams } from 'react-router';
import {useInfoUserHook} from '../hooks/useInfoUserHook';
import {usePublciacionesUsuario} from '../hooks/usePublciacionesUsuario';
import useNearScreen from '../hooks/useNearScreen';
import debounce from 'just-debounce-it';
import {ListarMuro, CargandoPublicacion} from '../components/Home/Publicaciones/ListarMuro';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    content: {
        padding: theme.spacing(3),
        backgroundColor:'#ecf0f1'
    },
 }));


export default function PerfilAmigo() {
   const classes = useStyles();

   const { id } = useParams();
   const { getDatosOtroUsuario, otroUsuarioInfo, loading,userInfo } = useInfoUserHook();
  const { cargando, datos, setPage,page,INITIAL_PAGE,setTipoFiltro } = usePublciacionesUsuario({ usuarioId:id,otroUsuarioInfo });
  const externalRef = useRef();
  console.log("---userInfo",userInfo)
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
 


  useEffect(() => {
    if(INITIAL_PAGE===page){
      console.log("otro perfil")
      getDatosOtroUsuario(id);
    }
  
   }, [id])

   console.log(otroUsuarioInfo)
   console.log("carngado " + loading)
  return (
      <>
      <MenuHeader/>
    <main className={classes.content}>
          <div className="row">
            <VisualizarPerfilOtroUsuario 
            otroUsuarioInfo={otroUsuarioInfo} loading={loading}
            />
          <div className="col-md-9">

    {otroUsuarioInfo.lo_sigo && !loading?
    <>
              <ListarMuro 
              setTipoFiltro={setTipoFiltro}
              datos={datos} 
              loading={cargando} 
              externalRef={externalRef}
               userInfo={otroUsuarioInfo} 
               userUrlMe={userInfo.url_perfil}
               />
      </>
  :   loading ?
  <div className="col-md-8 offset-md-2 mb-4"> 
<CargandoPublicacion/><br/>
<CargandoPublicacion/>
  </div>
     
      :
      <div className="col-md-8 offset-md-2 mb-4"> 
      <Typography variant="h4" gutterBottom>
       Debes seguir al usuario para ver sus publicaciones
     </Typography>
     </div>
  }

          </div>
 
      </div>
  </main>
 

</>
  );

}

