import {METHOD,SIZE_SUGERENCIAS_AMIGOS_MURO} from '../config/api/settings';
import {request} from './GeneralApi';


  export function SegurenciasDeSeguidores({page=0}) {
   return request(`seguidores/recomendados?page=${page}&size=${SIZE_SUGERENCIAS_AMIGOS_MURO}`,METHOD.GET);
  }
 
  export function ComenzarASeguir({usuario_id}) {
    return request(`seguidores/seguir/${usuario_id}`,METHOD.PUT);
   }