import {METHOD, SIZE_SEARCH_AMIGOS} from '../config/api/settings';
import {request} from './GeneralApi';

export function getUsersFollow(filters) {
    let filtros = "?"
    filters.map((filter)=>filtros = filtros + filter.nombre + "=" + filter.value);
    console.log(filtros)
    return request('users'+filtros+"&activo=true&bloqueado=false&page=0&size=10",METHOD.GET);
}

export function listarUsuariosASeguir({ page = 0 }) {
    return request(`users?page=${page}&size=${SIZE_SEARCH_AMIGOS}`, METHOD.GET);
}
  