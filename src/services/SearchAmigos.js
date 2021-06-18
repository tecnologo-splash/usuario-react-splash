import {METHOD,SIZE_SEARCH_AMIGOS} from '../config/api/settings';
import {request} from './GeneralApi';


  export function BuscadorAmigos() {
   return request(`users?page=0&size=2&orders=usuario:desc&orders=nombre:desc&orders=apellido:asc&nombre=Mauro&apellido=Bandera&activo=true&bloqueado=false
   `,METHOD.GET);

  }

