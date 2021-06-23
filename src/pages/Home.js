import React,{useEffect,useCallback,useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {MenuHeader} from '../components/Menu/MenuHeader';
import {ListAmigosSugeridos} from '../components/Home/AmigosSugeridos/ListAmigosSugeridos';


import {ListarMuro} from '../components/Home/Publicaciones/ListarMuro';
import useNearScreen from '../hooks/useNearScreen';
import { useMuroHook } from '../hooks/useMuroHook';
import debounce from 'just-debounce-it';

const useStyles = makeStyles(theme => ({
  content: {
      padding: theme.spacing(3),
      backgroundColor:'#ecf0f1'
  }
}));

export default function Home() {

 const classes = useStyles();  


 const { loading, datos, setPage,publicarSoloTexto,eliminarPublicacion } = useMuroHook({ tipo_filtro: '' });
                            
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

 console.log(datos);


  return (
      <>
      <MenuHeader/>
    <main className={classes.content}>
          
          <div className="row">

            <ListAmigosSugeridos/>

    
          <div className="col-md-9">      

            <ListarMuro 
            datos={datos} 
            loading={loading} 
            externalRef={externalRef} 
            publicar={publicarSoloTexto}
            eliminarPublicacion={eliminarPublicacion}/>

        

          </div>
 
      </div>
  </main>
 

</>
  );

}

