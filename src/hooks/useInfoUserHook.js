import {useState} from 'react';
import {UserInfo,ActualizarDatosPerfilUsuario,UserInfoOtroUsuario, PostDenuncia} from '../services/LoginApi';
import { ListarSeguidores } from '../services/SeguidoresApi';
import { useStoreCuenta,useDispatchCuenta } from "../contexts/LoginContext";
import { ACTIONS as ACTIONS_CUENTA} from "../contexts/StoreCuentaReducer";
import {mensajesCustomizados} from '../config/api/mensajesCustomizados';

export function useInfoUserHook(){

    const {userInfo, otroUsuarioInfo, mensajeActualizarDatos} = useStoreCuenta();
    const dispatch=useDispatchCuenta();
    const [loading,setLoading]=useState(true);

  //  const [actualizado, setActualizado]=useState(false);
    
    const actualizarDatosUsuario= async (datosActualizar)=>{
        let response = {};
        if(!datosActualizar.nombre || !datosActualizar.apellido){
            dispatch({ type: ACTIONS_CUENTA.MENSAJE_ACTUALIZAR_DATOS, payload: "Debe Ingresar los Campos Obligatorios" });
            response.status = 400;
          }else{
            dispatch({ type: ACTIONS_CUENTA.MENSAJE_ACTUALIZAR_DATOS, payload: '' });
 

            //nombre,apellido,fecha_nacimiento, correo,biografia,id

              const fd = new FormData();
              fd.append('nombre', datosActualizar.nombre);
              fd.append('apellido', datosActualizar.apellido);
              if (datosActualizar.biografia) fd.append('biografia', datosActualizar.biografia);
              else fd.append('biografia', "\u200b");

              response= await ActualizarDatosPerfilUsuario(datosActualizar.id, fd);
              if(response.status >=200 && response.status<=226){
                dispatch({ type: ACTIONS_CUENTA.MENSAJE_ACTUALIZAR_DATOS, payload: 'Editado correctamente' });
                setTimeout(() => {dispatch({ type: ACTIONS_CUENTA.MENSAJE_ACTUALIZAR_DATOS, payload: '' })}, 2000)
              }else{
                dispatch({ type: ACTIONS_CUENTA.MENSAJE_ACTUALIZAR_DATOS, payload: mensajesCustomizados(response.error_code) });
              }
                
          }
          return response;
    }

    const actualizarFotoUsuario = async (id, foto) => {
      let response = {};


        if (/image\/(png|gif|jpg|jpeg)/g.test(foto.type)) {
          const fd = new FormData();
          fd.append('fotoDePerfil', foto);


          response= await ActualizarDatosPerfilUsuario(id, fd);
          if(response.status >=200 && response.status<=226){
            dispatch({ type: ACTIONS_CUENTA.MENSAJE_ACTUALIZAR_DATOS, payload: 'Editado correctamente' });
            setTimeout(() => {dispatch({ type: ACTIONS_CUENTA.MENSAJE_ACTUALIZAR_DATOS, payload: '' })}, 2000)
          } else {
            dispatch({ type: ACTIONS_CUENTA.MENSAJE_ACTUALIZAR_DATOS, payload: mensajesCustomizados(response.error_code) });
            setTimeout(() => {dispatch({ type: ACTIONS_CUENTA.MENSAJE_ACTUALIZAR_DATOS, payload: '' })}, 2000)
          }
        } else {
          response.status = 400;
          dispatch({ type: ACTIONS_CUENTA.MENSAJE_ACTUALIZAR_DATOS, payload: 'Tipo de archivo no soportado' });
          setTimeout(() => {dispatch({ type: ACTIONS_CUENTA.MENSAJE_ACTUALIZAR_DATOS, payload: '' })}, 2000)
        }

      return response;
    }

    const eliminarFotoUsuario = async (id) => {

        const fd = new FormData();
        fd.append('borrarFotoActual', true);

        const response=await ActualizarDatosPerfilUsuario(id, fd);
        if(response.status >=200 && response.status<=226){
          dispatch({ type: ACTIONS_CUENTA.MENSAJE_ACTUALIZAR_DATOS, payload: 'Editado correctamente' });
          setTimeout(() => {dispatch({ type: ACTIONS_CUENTA.MENSAJE_ACTUALIZAR_DATOS, payload: '' })}, 2000)
        } else {
          dispatch({ type: ACTIONS_CUENTA.MENSAJE_ACTUALIZAR_DATOS, payload: mensajesCustomizados(response.error_code) });
        }
        return response;
    }

    const getDatos=()=>{
      setLoading(true);

            (async () => {
                const response=await  UserInfo ();
                 dispatch({type:ACTIONS_CUENTA.SET_DATA, payload:response});
                 setLoading(false);
            })()


       
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

  const getSeguidores = async (tipo, page, params) => {
    let query = ''
    console.log(1111111, params)
    if (params.filtro && params.keywords) {
      query = `filtro=${params.filtro}&keywords=${params.keywords}`;}

    const response = await ListarSeguidores(tipo, page, query);
    return response;
  }

    return {
        getDatos,
        userInfo,
        actualizarFotoUsuario,
        eliminarFotoUsuario,
        actualizarDatosUsuario,
        mensajeActualizarDatos,
        getDatosOtroUsuario,
        crearDenunciaUsuario,
        otroUsuarioInfo,
        getSeguidores,
        loading,
        setLoading
    }

}
