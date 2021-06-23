import {METHOD,SIZE_SUGERENCIAS_AMIGOS_MURO,SIZE_SEARCH_AMIGOS} from '../config/api/settings';
import {request} from './GeneralApi';


  export function SegurenciasDeSeguidores({page=0}) {
   return request(`seguidores/recomendados?page=${page}&size=${SIZE_SUGERENCIAS_AMIGOS_MURO}`,METHOD.GET);
  }
 
  export function ComenzarASeguir({usuario_id}) {
    return request(`seguidores/seguir/${usuario_id}`,METHOD.PUT);
  }

  export function DejarDeSeguir({usuario_id}) {
    return request(`seguidores/dejardeseguir/${usuario_id}`,METHOD.DELETE);
  }

  export function ListarUsuarioQueYoSigo({page=0}) {
    return request(`yo-sigo?page=${page}&size=${SIZE_SEARCH_AMIGOS}`,METHOD.GET);
  }

  export function ListarUsuarioQueMeSiguen({page=0}) {
    return request(`me-siguen?page=${page}&size=${SIZE_SEARCH_AMIGOS}`,METHOD.GET);
  }