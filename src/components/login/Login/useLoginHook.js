import {useState} from 'react';
import {Login as LoginApi,UserInfo} from '../../../services/LoginApi';
import {mensajesCustomizados} from '../../../config/api/mensajesCustomizados';
import {saveTokenSplash} from '../../../config/api/tokenLogin';

export function useLoginHook(){

  const [datosUsuario,setDatosUsuario]=useState({
      usuario:"",
      passwd:"",
    });
  const [mensaje,setMensaje]=useState('');
  const [openModal, setModalActivarCuentan] = useState(false);

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

      let newObject={clave:datosUsuario.passwd}
      if(userOrEmail(datosUsuario.usuario)){//si es true entonces es mail
        newObject["correo"]=datosUsuario.usuario;
      }else{//es usuario
        newObject["usuario"]=datosUsuario.usuario;
      }
   
      (async () => {

        const response=await  LoginApi ({data:newObject});
        if(response.status!==200){
          setMensaje(mensajesCustomizados(response.error_code));
        }else{
          handleValidateLogin(response.token);
         setMensaje("");
        }
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
            if(dataUserLogin.pendiente_activacion){
              setModalActivarCuentan(true);
            }else{//Login
              setMensaje(mensaje);
            }
            
          }
    })()
   }

   const validarClaveActivacion=()=>{

   }

  const userOrEmail=(data)=>{
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(data);
    
  }
    return {datosUsuario,handleChange,onClickLogin,mensaje,openModal, setModalActivarCuentan}
}