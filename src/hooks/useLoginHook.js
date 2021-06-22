import {Login as LoginApi,UserInfo} from '../services/LoginApi';
import {mensajesCustomizados} from '../config/api/mensajesCustomizados';
import {saveTokenSplash, logoutSplash} from '../config/api/tokenLogin';
import { useHistory } from "react-router-dom";
import { useDispatch,useStoreCuenta, useStore,useDispatchCuenta } from "../contexts/LoginContext";
import { ACTIONS} from "../contexts/StoreLoginReducer";
import { ACTIONS as ACTIONS_CUENTA} from "../contexts/StoreCuentaReducer";

import {userOrEmail} from '../util/validarCorreo';

export function useLoginHook(){
  let history = useHistory();
  const data = useStore();
  const dispatch = useDispatch();
  const dispatchCuenta=useDispatchCuenta();
  const {credenciales}=data;
   const {modalActivarCuenta}=useStoreCuenta();
  
   const handleChange=(e)=>{
    dispatch({ type: ACTIONS.LOGIN, payload: {...data.credenciales,[e.target.name]: e.target.value} });
  }

  const onClickLogin=()=>{
    if(credenciales.usuario==="" || credenciales.passwd===""){
      dispatch({ type: ACTIONS.MENSAJE_ERROR, payload: mensajesCustomizados("CAMPOS_OBLIGATORIOS") });
    }else{
      logoutSplash();
      let newObject={clave:credenciales.passwd}
      //verficamos si nos manda un email o un usuario y creamos un nuevo objeto a partir de esta data
      userOrEmail(credenciales.usuario) ? newObject["correo"]=credenciales.usuario :newObject["usuario"]=credenciales.usuario;
      dispatch({ type: ACTIONS.LOADING, payload:true });    

      (async () => {
        const response=await  LoginApi ({data:newObject});
        if(response.status!==200){
          if(response.error_code==="USUARIO_PENDIENTE_ACTIVACION"){
       //     dispatch({ type: ACTIONS.ACTIVAR_CUENTA_MODAL, payload: true });
          dispatchCuenta({ type: ACTIONS_CUENTA.ACTIVAR_CUENTA_MODAL, payload: true });
      }else{
            dispatch({ type: ACTIONS.MENSAJE_ERROR, payload: mensajesCustomizados(response.error_code) });
          }
        }else{
          handleValidateLogin(response.token);  
        }
        dispatch({ type: ACTIONS.LOADING, payload: false });

        })()
    }

   }

   const handleValidateLogin=(token)=>{
    (async () => {
      saveTokenSplash({token});
      const dataUserLogin=await UserInfo();
        console.log(dataUserLogin);
        if(dataUserLogin.nombre_rol==="ADMINISTRADOR"){//Error no se pueden logear adminsitradores
            dispatch({ type: ACTIONS.MENSAJE_ERROR, payload: mensajesCustomizados("CREDENCIALES_INVALIDAS") });
         }else{//Es Usuairo comun
           // dispatch({ type: ACTIONS.LOGIN_EXITOSO,payload:'' });
            dispatchCuenta({type:ACTIONS_CUENTA.SET_DATA,payload:dataUserLogin});
            history.push("/home");            
         }
    })()
   }

 

   const handleKeyPress=(e)=> {
    if (e.key === 'Enter') {
      onClickLogin();
    }
  }

    return {
      usuario:credenciales.usuario,
      passwd:credenciales.passwd,
      handleChange,
      onClickLogin,
      modalActivarCuenta:modalActivarCuenta,
      mensaje:data.mensaje,
      loading:data.loading, 
      handleKeyPress
    }

}