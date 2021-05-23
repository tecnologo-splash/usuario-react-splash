import {useState} from 'react';
import {Login as LoginApi} from '../../../services/LoginApi';
import {mensajesCustomizados} from '../../../config/api/mensajesCustomizados';
import {saveTokenSplash} from '../../../config/api/tokenLogin';

export function useLoginHook(){

  const [datosUsuario,setDatosUsuario]=useState({
      usuario:"",
      passwd:"",
    });
  const [mensaje,setMensaje]=useState('');
  
    const handleChange=(e)=>{
      setDatosUsuario({
        ...datosUsuario,
        [e.target.name]: e.target.value
      });
    }
  const onClickLogin=()=>{
    let newObject={clave:datosUsuario.passwd}
    if(userOrEmail(datosUsuario.usuario)){//si es true entonces es mail
      newObject["correo"]=datosUsuario.usuario;
    }else{//es usuario
      newObject["usuario"]=datosUsuario.usuario;
    }
    (async () => {
      const response=await  LoginApi ({data:newObject});
      console.log(response)
      if(response.status!==200){
        const mensaje=mensajesCustomizados(response.error_code);
        setMensaje(mensaje);
      }else{
        setMensaje("");
        saveTokenSplash({token:response.token});
      }
      })()
    
   }

  const userOrEmail=(data)=>{
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(data);
    
  }
    return {datosUsuario,handleChange,onClickLogin,mensaje}
}