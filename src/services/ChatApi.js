import {METHOD} from '../config/api/settings';
import {request} from './GeneralApi';

  export function ExisteChat(usuarioIdDos) {
   return request(`chat/obtener-chat?usuarioIdDos=${usuarioIdDos}`, METHOD.GET);
  }
 