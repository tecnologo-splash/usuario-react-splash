import {METHOD} from '../config/api/settings';
import {API_ROUTES} from '../config/api/routes';
import {request} from './GeneralApi';

  export function Login({data}) {
   return request(API_ROUTES.login,METHOD.POST,data);
  }
  export function UserInfo(){
    return request(API_ROUTES.userInfo,METHOD.GET);
  }
  export function ActivateLogin({data}) {
    return request({url:'',method:'POST',data});
  }

  export function Register({data}) {
    return request({url:'',method:'POST',data});
  }

  export function ForgotPassword({data}) {
    return request({url:'',method:'POST',data});
  }
  