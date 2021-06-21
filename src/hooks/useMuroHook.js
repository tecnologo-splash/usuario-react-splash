import {useState,useEffect} from 'react';
import {ListarPublicacionMisSegudiores} from '../services/MuroApi';
import {INITIAL_PAGE} from '../config/api/settings';

export function useMuroHook ({ tipo_filtro=''}) {

    const [loading, setLoading] = useState(false)
    const [loadingNextPage, setLoadingNextPage] = useState(false)
    const [page, setPage] = useState(INITIAL_PAGE)
 //   const {gifs, setGifs} = useContext(GifsContext)
      const [datos,setDatos]=useState([]);
      const [ultimaPeticion,setUltimaPeticion]=useState([]);

   
 useEffect(()=>{
  setLoading(true);
  console.log("1 useeffect");
  (async()=>{
    const response=await ListarPublicacionMisSegudiores({page,order:"fechaCreado",by:"desc"});
      const {content}=response;
    setDatos(content)
    setUltimaPeticion(content);
    console.log(content);
    setLoading(false)
  })();
},[tipo_filtro,setDatos])

    useEffect(() =>{
      console.log("2do useeffect");
      console.log(ultimaPeticion.length);
      if(ultimaPeticion.length>0){
        if (page === INITIAL_PAGE) return
        setLoadingNextPage(true);
     (async()=>{
          const response=await ListarPublicacionMisSegudiores({page,order:"fechaCreado",by:"desc"});
            const {content}=response;
            console.log(content.length);
              setDatos(prevData => prevData.concat(content))
              setUltimaPeticion(content);
          setLoading(false)
        })();
      }
 
      
   
    }, [tipo_filtro, page,setDatos])
  
    return {loading, loadingNextPage, datos, setPage, hayDatos:ultimaPeticion.length}
  }