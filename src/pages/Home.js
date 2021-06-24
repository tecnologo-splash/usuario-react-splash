import React, { useEffect, useCallback, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { MenuHeader } from '../components/Menu/MenuHeader';
import { ListAmigosSugeridos } from '../components/Home/AmigosSugeridos/ListAmigosSugeridos';
import { ListarMuro } from '../components/Home/Publicaciones/ListarMuro';
import useNearScreen from '../hooks/useNearScreen';
import { useMuroHook } from '../hooks/useMuroHook';
import debounce from 'just-debounce-it';
import CrearPublicacion from '../components/Home/Publicaciones/Creacion/CreacionPublicacion';
import { useInfoUserHook } from '../hooks/useInfoUserHook';
const useStyles = makeStyles(theme => ({
  content: {
    padding: theme.spacing(3),
    backgroundColor: '#ecf0f1'
  }
}));

export default function Home() {

  const classes = useStyles();


  const { loading, datos, setPage, publicarSoloTexto, eliminarPublicacion, editarPublicacion,publicarEnlaceExterno,SubirMultimedia } = useMuroHook({ tipo_filtro: '' });
  const { userInfo, getDatos } = useInfoUserHook();

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
    if (isNearScreen) debounceHandleNextPage()
  }, [debounceHandleNextPage, isNearScreen])

  useEffect(function () {
    getDatos();
  }, [])


  return (
    <>
      <MenuHeader />
      <main className={classes.content}>

        <div className="row">

          <ListAmigosSugeridos />


          <div className="col-md-9">
            <CrearPublicacion publicar={publicarSoloTexto} publicarEnlaceExterno={publicarEnlaceExterno} SubirMultimedia={SubirMultimedia}/>

            <ListarMuro
             userInfo={userInfo}
              datos={datos}
              loading={loading}
              externalRef={externalRef}
              eliminarPublicacion={eliminarPublicacion}
              editarPublicacion={editarPublicacion}
            />

          </div>

        </div>
      </main>


    </>
  );

}

