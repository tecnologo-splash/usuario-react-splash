import {METHOD} from '../config/api/settings';
import {request,requestFormData} from './GeneralApi';

  export function Login({data}) {
   return request('users/auth',METHOD.POST,data);
  }
  export function UserInfo(){
    return request('users/info',METHOD.GET);
  }
  export function UserInfoOtroUsuario(id){
    return request('users/info/'+id,METHOD.GET);
  }
  export function ActivateCuenta({data}) {
    return request('users/activation',METHOD.POST,data);
  }
  export function EnviarCodigoActivacion({data}) {
    return request('users/send-activation-code',METHOD.POST,data);
  }
  export function Register({data}) {
    return request('users/sign-up',METHOD.POST,data);
  }

  export function enviarCorreoParaCambiodePasswd({data}){
    return request('users/recovery-password',METHOD.POST,data);
  }
  
  export function cambiarPasswd({data}){
    return request('users/recovery-password',METHOD.POST,data);
  }

  export function ActualizarDatosPerfilUsuario(id, data){
    return requestFormData('users/'+ id , METHOD.PUT, data);
  }

  export function PostDenuncia(data){
    return request('denuncias/', METHOD.POST, data);
  }