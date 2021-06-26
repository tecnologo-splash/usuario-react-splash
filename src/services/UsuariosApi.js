import {METHOD} from '../config/api/settings';
import {request} from './GeneralApi';

    export function getUsersFollow(filters) {
        let filtros = "?"
        filters.map((filter)=>filtros = filtros + filter.nombre + "=" + filter.value);
        console.log(filtros)
        return request('users'+filtros+"&activo=true&bloqueado=false",METHOD.GET);
    }