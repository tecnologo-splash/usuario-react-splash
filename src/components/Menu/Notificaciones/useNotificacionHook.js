import {useState,useEffect} from 'react';
import {ObtenerNotificaciones} from '../../../services/Notificacion';

const INITAL_PAGE=0;
export function useNotificacionHook(){
    const [data,setData]=useState([]);
    const [page,setPage]=useState(INITAL_PAGE);

    useEffect(()=>{
        getDatos();
    },[page])

    const getDatos=async ()=>{
        const response=await ObtenerNotificaciones({page});
        setData(data.concat(response));
    }
    const verMasNotis=()=>{
        setPage(prev=>prev+1);
    }

    return {getDatos,data,verMasNotis}
}