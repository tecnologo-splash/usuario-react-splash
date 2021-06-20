
import {METHOD,SIZE_MURO} from '../config/api/settings';
import {request} from './GeneralApi';

  export function ListarPublicacionMisSegudiores({page=0,order,by}) {
   return request(`posts?page=${page}&size=${SIZE_MURO}&orders=${order}:${by}`,METHOD.GET);             
  }

  export function ReaccionarAPublicacion({publicacionId,data}) {
    return request(`posts/${publicacionId}/reacciones`,METHOD.POST,data);             
   }

   export function BorrarReaccionarAPublicacion({publicacionId}) {
    return request(`posts/${publicacionId}/reacciones`,METHOD.DELETE);             
   }

   export function Publicacion({publicacionId}) {
    return request(`posts/${publicacionId}`,METHOD.GET);             
   }
    
   
//   ME_ENOJA, ME_DIVIERTE, ME_GUSTA, NO_ME_GUSTA, NO_ME_INTERESA;

