
import {METHOD,SIZE_MURO} from '../config/api/settings';
import {request} from './GeneralApi';

  export function ListarPublicacionMisSegudiores({page=0,order,by}) {
   return request(`posts?page=${page}&size=${SIZE_MURO}&orders=${order}:${by}`,METHOD.GET);
                
  }

