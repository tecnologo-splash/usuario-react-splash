
import {METHOD,SIZE_MURO} from '../config/api/settings';
import {request} from './GeneralApi';

 export function ListarPublicacionMisSegudiores({page=0,order,by}) {
   return request(`posts?page=${page}&size=${SIZE_MURO}&orders=${order}:${by}`,METHOD.GET);             
}

 export function ObtenerPublicacionesPorUsuario({usuarioId,page=0,order,by}) {
   return request(`posts/users/${usuarioId}?page=${page}&size=${SIZE_MURO}&orders=${order}:${by}`,METHOD.GET);             
 }

 export function EliminarPublicacion({data}){
  return request('posts/'+data,METHOD.DELETE);
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
    
   export function PublicarSoloTexto({data}) {
    return request(`posts/`,METHOD.POST,data);             
   }
