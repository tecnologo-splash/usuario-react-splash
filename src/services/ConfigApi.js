import {METHOD} from '../config/api/settings';
import {request, requestFormData} from './GeneralApi';


  export function GetConfigNotificaciones() {
   return request(`configuracion-notificaciones`, METHOD.GET);
  }
 
  export function PatchConfigNotificaciones(notifs) {
    return request(`configuracion-notificaciones`, METHOD.PATCH, notifs);
  }

  export function EliminarCuenta(id, formData) {
    return requestFormData('users/' + id, METHOD.PUT, formData);
  }