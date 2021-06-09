import {METHOD} from '../config/api/settings';
import {request} from './GeneralApi';

  export function Login({data}) {
   return request('users/auth',METHOD.POST,data);
  }
  export function UserInfo(){
    return request('users/info',METHOD.GET);
  }
  export function ActivateLogin({data}) {
    return request('users/activation',METHOD.POST,data);
  }
  export function Register({data}) {
    return request('/users/sign-up',METHOD.POST,data);
  }

  export function ForgotPassword({data}) {
    return request({url:'',method:'POST',data});
  }
  