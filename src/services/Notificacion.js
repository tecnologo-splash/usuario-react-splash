
import {METHOD,SIZE_NOTIFICACIONES} from '../config/api/settings';
import {request} from './GeneralApi';


  export function ObtenerNotificaciones({page=0,size=SIZE_NOTIFICACIONES}) {
   return request(`notificacion/obtener?page=${page}&size=${size}`, METHOD.GET);
  }
 

