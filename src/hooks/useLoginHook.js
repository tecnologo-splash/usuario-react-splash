import {useState} from 'react';
import {Login as LoginApi,UserInfo} from '../services/LoginApi';
import {mensajesCustomizados} from '../config/api/mensajesCustomizados';
import {saveTokenSplash,logoutSplash} from '../config/api/tokenLogin';
import { useHistory } from "react-router-dom";

export function useLoginHook(){
  let history = useHistory();

  const [datosUsuario,setDatosUsuario]=useState({
      usuario:"",
      passwd:"",
    });
  const [mensaje,setMensaje]=useState('');
  const [openModal, setModalActivarCuentan] = useState(false);
  const [loading, setLoading] = useState(false);

    const handleChange=(e)=>{
      setDatosUsuario({
        ...datosUsuario,
        [e.target.name]: e.target.value
      });
    }

  const onClickLogin=()=>{
    if(datosUsuario.usuario==="" || datosUsuario.passwd===""){
      setMensaje(mensajesCustomizados("CAMPOS_OBLIGATORIOS"));
    }else{
      setLoading(true);
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
          if(response.error_code==="USUARIO_PENDIENTE_ACTIVACION"){
            setModalActivarCuentan(true);
          }else{
            setMensaje(mensajesCustomizados(response.error_code));
          }
        }else{
          handleValidateLogin(response.token);  
        }
        setLoading(false);
        })()
    }

   }

   const handleValidateLogin=(token)=>{
    (async () => {
      saveTokenSplash({token});
      const dataUserLogin=await UserInfo();
          console.log(dataUserLogin);
          if(dataUserLogin.nombre_rol==="ADMINISTRADOR"){//Error no se pueden logear adminsitradores
            setMensaje(mensajesCustomizados("CREDENCIALES_INVALIDAS"));
          }else{//Es Usuairo comun
              setMensaje("");
              history.push("/home");            
          }
    })()
   }

   const logOut=()=>{
    logoutSplash();
    history.push("/");         
   }

   const handleKeyPress=(e)=> {
    if (e.key === 'Enter') {
      onClickLogin();
    }
  }
  const userOrEmail=(data)=>{
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(data);
    
  }
    return {datosUsuario,handleChange,onClickLogin,mensaje,openModal,loading, setModalActivarCuentan,logOut,handleKeyPress}

}