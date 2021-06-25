import {useState} from 'react';
import {GetConfigNotificaciones, PatchConfigNotificaciones, EliminarCuenta} from '../services/ConfigApi';

export function useConfigHook(){
  const [datos=[],setDatos]=useState({
    data:[],
    cantidad:0
  });

  const getConfigNotificaciones = () => { 
    (async () => {
      const response = await GetConfigNotificaciones();
      setDatos({data:response,cantidad:Object.keys(response).length});
    })()
  }

  const updateConfigNotificaciones = async (notifs) => {
    const response = await PatchConfigNotificaciones(notifs); 
    return response;   
  }
  
  const eliminarCuenta = async (userId) => {
    
    const formData = new FormData();
    formData.append("activo", false);
    
    const response = await EliminarCuenta(userId, formData);
    return response;

  }

  return {
    getConfigNotificaciones,
    updateConfigNotificaciones,
    eliminarCuenta,
    datos
  }
}