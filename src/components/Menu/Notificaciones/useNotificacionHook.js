import {useState,useEffect} from 'react';
import {ObtenerNotificaciones} from '../../../services/Notificacion';

const INITAL_PAGE=0;
export function useNotificacionHook(){
    const [data,setData]=useState([]);
    const [cantNotis,setCantNotis]=useState(0);
    const [page,setPage]=useState(INITAL_PAGE);

    useEffect(()=>{
        getDatos();
    },[page])

    const getDatos=async ()=>{
        const response=await ObtenerNotificaciones({page});
        const {cant_notifiaciones_sin_leer}=response;
        const {notis}=response;
        console.log(response);
        setData(data.concat(notis));
        setCantNotis(cant_notifiaciones_sin_leer);

    }
    const verMasNotis=()=>{
        setPage(prev=>prev+1);
    }

    return {getDatos,data,verMasNotis,cantNotis}
}