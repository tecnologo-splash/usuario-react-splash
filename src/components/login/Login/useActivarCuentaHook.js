import {useStoreCuenta, useStore,useDispatchCuenta } from "../../../contexts/LoginContext";
import { ACTIONS as ACTIONS_CUENTA} from "../../../contexts/StoreCuentaReducer";
import {EnviarCodigoActivacion,ActivateCuenta} from '../../../services/LoginApi';
import {mensajesCustomizados} from '../../../config/api/mensajesCustomizados';

export function useActivarCuentaHook(){
    const {credenciales} = useStore();
    const storeCuenta = useStoreCuenta();
    const {mensajeActivarCuenta}=storeCuenta;

    const dispatchCuenta=useDispatchCuenta();
    const {codigo_activacion}=useStoreCuenta();

    const handleClicReEnviarCodigo=()=>{
        (async()=>{
            const data={id:credenciales.usuario}
            const response=await EnviarCodigoActivacion({data});
            if(response.status!==200){
                dispatchCuenta({ type: ACTIONS_CUENTA.REENVAR_CODIGO, payload:{
                    mensaje: mensajesCustomizados(response.error_code),
                    tipo_mensaje: 'ERROR',
                    buttonReenviar:false
                } });
            }else{
                dispatchCuenta({ type: ACTIONS_CUENTA.REENVAR_CODIGO, payload:{
                    mensaje: 'Te enviamos un mail con el nuevo codigo',
                    tipo_mensaje: 'OK',
                    buttonReenviar:true
                } });
            }

        })()

    }

    const handleActivarCuenta=()=>{
        (async()=>{
            const data={correo:credenciales.usuario,codigo:codigo_activacion}

            const response=await ActivateCuenta({data});
            console.log(response);
            if(response.status!==200){
                dispatchCuenta({ type: ACTIONS_CUENTA.MENSAJE_ACTIVAR_CUENTA, payload:
                    {
                        mensaje: mensajesCustomizados(response.error_code),
                        tipo_mensaje: 'ERROR',
                        buttonReenviar:false
                    }
                    });
            }else{
                dispatchCuenta({ type: ACTIONS_CUENTA.REENVAR_CODIGO, payload:{
                    mensaje: '',
                    tipo_mensaje: '',
                    buttonReenviar:false
                } });
                handleCloseActivarCuenta();
                
            }
        })()
    }
    const handleChangeCodigoActivacion=(e)=>{
        dispatchCuenta({ type: ACTIONS_CUENTA.ACTIVAR_CUENTA, payload: e.target.value });
      }


    const handleCloseActivarCuenta = () => {

        dispatchCuenta({ type: ACTIONS_CUENTA.ACTIVAR_CUENTA_MODAL, payload: false });
      };


    return {
        handleClicReEnviarCodigo,
        credenciales,
        codigo_activacion:codigo_activacion,
        reEnviarButton:mensajeActivarCuenta.buttonReenviar,
        mensajeActivacion:mensajeActivarCuenta,
        handleCloseActivarCuenta,
        handleActivarCuenta,
        handleChangeCodigoActivacion
    }

}