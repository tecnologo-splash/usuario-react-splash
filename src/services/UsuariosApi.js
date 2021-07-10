import {METHOD, SIZE_SEARCH_AMIGOS} from '../config/api/settings';
import {request} from './GeneralApi';


export function getUsersFollow(filters) {
    let filtros = "?"
    filters.map((filter)=>filtros = filtros + filter.nombre + "=" + filter.value);
    console.log(filtros)
    return request('users'+filtros+"&activo=true&bloqueado=false&page=0&size=10",METHOD.GET);
}

export function listarUsuariosASeguir({ page = 0 ,cadena, filtro}) {
    let url = `users?page=${page}&size=${SIZE_SEARCH_AMIGOS}&activo=true&bloqueado=false`
    if (filtro === "nombre" && cadena && cadena !== ""){
        url = url + `&nombre=${cadena}`
    }
    if (filtro === "apellido" && cadena && cadena !== ""){
        url = url + `&apellido=${cadena}`
    }
    return request(url, METHOD.GET);
}
  