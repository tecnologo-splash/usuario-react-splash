import {useState} from 'react';
import {UserInfo,ActualizarDatosPerfilUsuario,UserInfoOtroUsuario, PostDenuncia} from '../services/LoginApi';
import { useStoreCuenta,useDispatchCuenta } from "../contexts/LoginContext";
import { ACTIONS as ACTIONS_CUENTA} from "../contexts/StoreCuentaReducer";
import {isEmptyInputs} from '../util/validarCamposVacios';
import {userOrEmail} from '../util/validarCorreo';
import {mensajesCustomizados} from '../config/api/mensajesCustomizados';

export function useInfoUserHook(){

    const {userInfo, otroUsuarioInfo, mensajeActualizarDatos} = useStoreCuenta();
    const dispatch=useDispatchCuenta();
    const [loading,setLoading]=useState(true);

  //  const [actualizado, setActualizado]=useState(false);
    
    const actualizarDatosUsuario=(datosActualizar)=>{
        if(isEmptyInputs(datosActualizar)){
            dispatch({ type: ACTIONS_CUENTA.MENSAJE_ACTUALIZAR_DATOS, payload: "Debe Ingresar los Campos Obligatorios" });
          }else if(!userOrEmail(datosActualizar.correo)){
            dispatch({ type: ACTIONS_CUENTA.MENSAJE_ACTUALIZAR_DATOS, payload: "Error, correo inválido" });
          }else{
            dispatch({ type: ACTIONS_CUENTA.MENSAJE_ACTUALIZAR_DATOS, payload: '' });
            (async () => {

              //nombre,apellido,fecha_nacimiento, correo,biografia,id

                const fd = new FormData();
                fd.append('nombre', datosActualizar.nombre);
                fd.append('apellido', datosActualizar.apellido);
                fd.append('fecha_nacimiento', datosActualizar.fecha_nacimiento);
                fd.append('correo', datosActualizar.correo);
                fd.append('biografia', datosActualizar.biografia);

                const response=await ActualizarDatosPerfilUsuario(datosActualizar.id, fd);
                if(response.status >=200 && response.status<=226){
                  dispatch({ type: ACTIONS_CUENTA.MENSAJE_ACTUALIZAR_DATOS, payload: 'Editado correctamente' });
                  setTimeout(() => {dispatch({ type: ACTIONS_CUENTA.MENSAJE_ACTUALIZAR_DATOS, payload: '' })}, 2000)
                }else{
                  dispatch({ type: ACTIONS_CUENTA.MENSAJE_ACTUALIZAR_DATOS, payload: mensajesCustomizados(response.error_code) });
                }
              })()
          }

          console.log(222222222222, mensajeActualizarDatos)
    }

    const getDatos=()=>{
      setLoading(true);
        if(userInfo.usuario===""){
            (async () => {
                const response=await  UserInfo ();
                 dispatch({type:ACTIONS_CUENTA.SET_DATA, payload:response});
                 setLoading(false);
          
            })()
        }else{
          setLoading(false);
         return userInfo;
        }
       
    }

    const getDatosOtroUsuario=(id)=>{
      setLoading(true);
        (async () => {
          const response=await  UserInfoOtroUsuario(id);
            console.log(response);
            if(response!==200){
             dispatch({type:ACTIONS_CUENTA.SET_DATA_OTRO_USUARIO, payload:response});                
            }else{
              console.log("error url not found");
            }
            setLoading(false);
      })()
    
 
  }

  const crearDenunciaUsuario = async (data) => {
    const response = await PostDenuncia(data); 
    return response; 
  }

    return {
        getDatos,
        userInfo,
        actualizarDatosUsuario,
        mensajeActualizarDatos,
        getDatosOtroUsuario,
        crearDenunciaUsuario,
        otroUsuarioInfo,
        loading,
        setLoading
    }

}
