import {URL_BASE} from '../config/api/settings';

async function request({url, method, data}) {
    const response = await fetch(`${URL_BASE.local}${url}`, {
      method,
      headers: {
        Authorization: window.sessionStorage.getItem("token-splash"),
        Accept: "application/JSON",
        "Content-Type": "application/JSON",
      },
      body: data ? JSON.stringify(data) : undefined,
    });
    const jsonResponse = await response.json();
    if (!response.status === 200) {
      console.log("Error en la peticion " + response.status);
    }
    return jsonResponse;
  }

  export function Login({data}) {
    return request({url:'',method:'POST',data});
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