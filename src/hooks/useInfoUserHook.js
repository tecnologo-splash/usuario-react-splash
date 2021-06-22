import {useState} from 'react';
import {UserInfo,ActualizarDatosPerfilUsuario,UserInfoOtroUsuario} from '../services/LoginApi';
import { useStoreCuenta,useDispatchCuenta } from "../contexts/LoginContext";
import { ACTIONS as ACTIONS_CUENTA} from "../contexts/StoreCuentaReducer";
import {isEmptyInputs} from '../util/validarCamposVacios';
import {userOrEmail} from '../util/validarCorreo';
import {mensajesCustomizados} from '../config/api/mensajesCustomizados';

export function useInfoUserHook(){

    const {userInfo,otroUsuarioInfo,mensajeActualizarDatos} = useStoreCuenta();
    const dispatch=useDispatchCuenta();
  //  const [actualizado, setActualizado]=useState(false);
    
    const actualizarDatosUsuario=(datosActualizar)=>{
        console.log(datosActualizar);
        if(isEmptyInputs(datosActualizar)){
            dispatch({ type: ACTIONS_CUENTA.MENSAJE_ACTUALIZAR_DATOS, payload: "Debe Ingresar los Campos Obligatorios" });
          }else if(!userOrEmail(datosActualizar.correo)){
            dispatch({ type: ACTIONS_CUENTA.MENSAJE_ACTUALIZAR_DATOS, payload: "Error, correo invalido" });
          }else{
            dispatch({ type: ACTIONS_CUENTA.MENSAJE_ACTUALIZAR_DATOS, payload:'' });
            (async () => {
                const response=await ActualizarDatosPerfilUsuario({data:datosActualizar});
                console.log(response);
                if(response.status >=200 && response.status<=226){
                  dispatch({ type: ACTIONS_CUENTA.MENSAJE_ACTUALIZAR_DATOS, payload: '' });
                }else{
                  dispatch({ type: ACTIONS_CUENTA.MENSAJE_ACTUALIZAR_DATOS, payload: mensajesCustomizados(response.error_code) });
                }
              })()
          }
    }

    const getDatos=()=>{
        if(userInfo.usuario===""){
            (async () => {
                const response=await  UserInfo ();
                 dispatch({type:ACTIONS_CUENTA.SET_DATA, payload:response});                
            })()
        }else{
         return userInfo;
        }
    }

    const getDatosOtroUsuario=(id)=>{
      if(id!==otroUsuarioInfo.id){
        (async () => {
          const response=await  UserInfoOtroUsuario(id);
            console.log(response);
            if(response!==200){
             dispatch({type:ACTIONS_CUENTA.SET_DATA_OTRO_USUARIO, payload:response});                
            }else{
              console.log("error url not found");
            }
      })()
      }else if(id===otroUsuarioInfo.id){
        console.log("ya tengo datos de " +id)
        return otroUsuarioInfo;
      }
 
  }


    return {
        getDatos,
        userInfo,
        actualizarDatosUsuario,
        mensajeActualizarDatos,
        getDatosOtroUsuario,
        otroUsuarioInfo
    }

}
