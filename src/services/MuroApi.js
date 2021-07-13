
import { METHOD, SIZE_MURO } from '../config/api/settings';
import { request, requestFormData } from './GeneralApi';

export function ListarPublicacionMisSegudiores({ page = 0, order, by }) {
  return request(`posts?page=${page}&size=${SIZE_MURO}&orders=${order}:${by}`, METHOD.GET);
}

export function ObtenerPublicacionesPorUsuario({ usuarioId, page = 0, order, by }) {
  return request(`posts/users/${usuarioId}?page=${page}&size=${SIZE_MURO}&orders=${order}:${by}`, METHOD.GET);
}
export function SubirMultimedia({ publicacionId, data }) {
  return requestFormData(`posts/${publicacionId}/multimedia`, METHOD.POST, data);
}

export function EliminarPublicacion({ data }) {
  return request('posts/' + data, METHOD.DELETE);
}

export function EditarPublicacion({ publicacionId, data }) {
  return request('posts/' + publicacionId, METHOD.PATCH, data);
}

export function ReaccionarAPublicacion({ publicacionId, data }) {
  return request(`posts/${publicacionId}/reacciones`, METHOD.POST, data);
}

export function BorrarReaccionarAPublicacion({ publicacionId }) {
  return request(`posts/${publicacionId}/reacciones`, METHOD.DELETE);
}

export function Publicacion({ publicacionId }) {
  return request(`posts/${publicacionId}`, METHOD.GET);
}

export function PublicarSoloTexto({ data }) {
  return request(`posts/`, METHOD.POST, data);
}
export function PublicarEnlaceExterno({ data }) {
  return request(`posts/`, METHOD.POST, data);
}

export function VotarEncuesta({ publicacionId,opcionIdEncuesta }) {
  return request(`posts/${publicacionId}/opciones/${opcionIdEncuesta}`, METHOD.POST);
}

export function CompartirPublicacion({data}){
  return request(`posts`, METHOD.POST,data);

}

//comentarios
export function PublicarComentario({ publicacionId, data }) {
  return request(`posts/${publicacionId}/comentarios`, METHOD.POST, data);
}

export function ResponderAComentario({ publicacionId, comentarioId, data }) {
  return request(`posts/${publicacionId}/comentarios/${comentarioId}/respuestas`, METHOD.POST, data);
}

export function EliminarComentario({publicacionId,comentarioId}){
  return request(`posts/${publicacionId}/comentarios/${comentarioId}`, METHOD.DELETE);
}

export function EliminarRespuestaAComentario({publicacionId,comentarioId,respuestaId}){
  return request(`posts/${publicacionId}/comentarios/${comentarioId}/respuestas/${respuestaId}`, METHOD.DELETE);
}

export function GetReacciones(id) {
  return request(`posts/${id}/reacciones?page=0&size=100`, METHOD.GET)
}