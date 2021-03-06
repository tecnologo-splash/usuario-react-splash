import React,{useEffect,useRef,useCallback} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {MenuHeader} from '../components/Menu/MenuHeader';
import {VisualizarPerfilOtroUsuario} from '../components/Home/Perfil/VisualizarPerfilOtroUsuario';
import { useParams } from 'react-router';
import {useInfoUserHook} from '../hooks/useInfoUserHook';
import {FuncionesAmigos} from '../hooks/useAmigosSugeridosHook';

import {usePublciacionesUsuario} from '../hooks/usePublciacionesUsuario';
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
  const { cargando, datos,setTipoFiltro,setPage,obtenerPublicacionesAmigo,tipoFiltro } = usePublciacionesUsuario({ usuarioId:id,tipo:'amigo' });
  const { dejarDeSeguir, comensarASeguir,lo_sigo } = FuncionesAmigos();
  useEffect(() => {
      getDatosOtroUsuario(id);
   }, [id])

   useEffect(()=>{
     if(typeof  datos==="undefined" && lo_sigo){
      obtenerPublicacionesAmigo();
     }
   },[lo_sigo,datos])

  return (
      <>
      <MenuHeader/>
    <main className={classes.content}>
          <div className="row">
            <VisualizarPerfilOtroUsuario 
            otroUsuarioInfo={otroUsuarioInfo} loading={loading}
            dejarDeSeguir={dejarDeSeguir} comensarASeguir={comensarASeguir}
            />
          <div className="col-md-9">


        <DevolucionMuro loading={loading}
        lo_sigo={lo_sigo}
        otroUsuarioInfo={otroUsuarioInfo}
        setTipoFiltro={setTipoFiltro}
        datos={datos}
        cargando={cargando}
        userInfo={userInfo}
        setPage={setPage}
        tipoFiltro={tipoFiltro}
        />

          </div>
 
      </div>
  </main>
 

</>
  );

}

export function DevolucionMuro({loading,lo_sigo,otroUsuarioInfo,setTipoFiltro,datos,cargando,userInfo,setPage,tipoFiltro}){
  console.log("-->",lo_sigo);
  if(loading ){
  return   <div className="col-md-8 offset-md-2 mb-4"> 
    <CargandoPublicacion/><br/>
    <CargandoPublicacion/>
      </div>
  }else if(otroUsuarioInfo.lo_sigo && lo_sigo==null  && !loading){
    return    <ListarMuro 
    setTipoFiltro={setTipoFiltro}
    datos={datos} 
    loading={cargando} 
     userInfo={userInfo} 
     setPage={setPage}
     tipoFiltro={tipoFiltro}
     />
  }else if(lo_sigo===true && !loading && typeof  datos!=="undefined"){
    return    <ListarMuro 
    setTipoFiltro={setTipoFiltro}
    datos={datos} 
    loading={cargando} 
     userInfo={userInfo} 
     setPage={setPage}
     tipoFiltro={tipoFiltro}
     />
  }else if(lo_sigo===false || lo_sigo===null){
    return    <div className="col-md-8 offset-md-2 mb-4"> 
    <Typography variant="h4" gutterBottom>
     Debes seguir al usuario para ver sus publicaciones
     <br/>
     <img src={process.env.PUBLIC_URL+"/recursos/404_2.png"} className="img-fluid" alt="Error "/>

   </Typography>
   </div>
  }else{
    return <div className="col-md-8 offset-md-2 mb-4"> 
    <CargandoPublicacion /><br/><CargandoPublicacion />
     </div>
  }
} 

