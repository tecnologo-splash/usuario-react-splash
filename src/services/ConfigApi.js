import {METHOD} from '../config/api/settings';
import {request} from './GeneralApi';


  export function GetConfigNotificaciones() {
   return request(`configuracion-notificaciones`, METHOD.GET);
  }
 
  export function PatchConfigNotificaciones(notifs) {
    return request(`configuracion-notificaciones`, METHOD.PATCH, notifs);
  }

  export function EliminarCuenta({usuario_id}) {
    return request(`WIP WIP WIP WIP WIP`, METHOD.DELETE);
  }
  