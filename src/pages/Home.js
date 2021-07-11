import React, { useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { MenuHeader } from '../components/Menu/MenuHeader';
import { ListAmigosSugeridos } from '../components/Home/AmigosSugeridos/ListAmigosSugeridos';
import { ListarMuro,CargandoPublicacion } from '../components/Home/Publicaciones/ListarMuro';
import CrearPublicacion from '../components/Home/Publicaciones/Creacion/CreacionPublicacion';
import { useInfoUserHook } from '../hooks/useInfoUserHook';
import { useMuroHook } from '../hooks/useMuroHook';


import Pusher from 'pusher-js';
let pusher = new Pusher('1f2a6fe63e0652eb4139', {
  cluster: 'us2'
});
const useStyles = makeStyles(theme => ({
  content: {
    padding: theme.spacing(3),
    backgroundColor: '#ecf0f1'
  }
}));

export default function Home() {
  const classes = useStyles();
  const { userInfo, getDatos } = useInfoUserHook();

  const { loading, datos, setPage, 
    eliminarPublicacion, editarPublicacion,setTipoFiltro }   = useMuroHook();

  useEffect(function () {
   getDatos();
  }, [])

  const soundMensage = new Audio(process.env.PUBLIC_URL + '/recursos/sound.mp3');

  useEffect(()=>{
    console.log(pusher);
    if(userInfo.id!==""){
    var channel = pusher.subscribe(`chat-usuario-${userInfo.id}`);
    channel.bind('nuevo-mensaje', data => {
      console.log("pusher-->")
      soundMensage.play()

    });
    }

},[userInfo.id,pusher])



console.log("muro")
  return (
    <>
      <MenuHeader />
      <main className={classes.content}>
        <div className="row">

          <ListAmigosSugeridos />


          <div className="col-md-9">
            <CrearPublicacion userInfo={userInfo}/>
    {
      !loading ? 
      <ListarMuro
      userInfo={userInfo}
      loading={loading}
       datos={datos}
      setPage={setPage} 
      eliminarPublicacion={eliminarPublicacion}
      editarPublicacion={editarPublicacion}
      setTipoFiltro={setTipoFiltro}
     />

      : <div className="col-md-8 offset-md-2 mb-4">   <>
      <CargandoPublicacion /><br/><CargandoPublicacion /></>
       </div>
    }
           
          </div>

        </div>
      </main>


    </>
  );

}

