import {URL_BASE} from '../config/api/settings';

async function request({url, method, data}) {
    const response= await fetch(`${URL_BASE.prod}${url}`, {
      method,
      headers: {
        Authorization: window.sessionStorage.getItem("token-splash"),
        Accept: "application/JSON",
        "Content-Type": "application/JSON",
      },
      body: data ? JSON.stringify(data) : undefined,
    })
    return response.json();
  }

  export function Login({data}) {
   return request({url:'users/auth',method:'POST',data});
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
  