import {useState} from 'react';
import {useStoreCuenta, useDispatchCuenta } from "../../../contexts/LoginContext";
import { ACTIONS as ACTIONS_CUENTA} from "../../../contexts/StoreCuentaReducer";
import {enviarCorreoParaCambiodePasswd,cambiarPasswd} from '../../../services/LoginApi';
import {mensajesCustomizados} from '../../../config/api/mensajesCustomizados';
import {userOrEmail} from '../../../util/validarCorreo';

export function useForgotPasswdHook(){
    const storeCuenta = useStoreCuenta();
    const dispatchCuenta=useDispatchCuenta();
    const [activeStep, setActiveStep] = useState(0);

    const {forgotPasswd,mensajeForgotPasswd}=storeCuenta;
      
   const handleChange=(e)=>{
    //console.log(forgotPasswd);
    dispatchCuenta({ type: ACTIONS_CUENTA.SET_FORGOT_PASSWD, payload: {...forgotPasswd,[e.target.name]: e.target.value} });
  }

  const handleNext = () => {
    if(userOrEmail(forgotPasswd.correo)){
      dispatchCuenta({ type: ACTIONS_CUENTA.MENSAJE_FORGOT_PASSWD, payload:
        {
            mensaje: '',
            tipo_mensaje: ''
        } });
        validoActualizo(activeStep);
    }else{
    dispatchCuenta({ type: ACTIONS_CUENTA.MENSAJE_FORGOT_PASSWD, payload:
        {
            mensaje: 'Correo Invalido',
            tipo_mensaje: 'ERROR'
        } });

    }
  };

  const validoActualizo=(activeStep)=>{
    if(activeStep===0){//enviarEmail
        console.log("here");
      (async()=>{
        dispatchCuenta({ type: ACTIONS_CUENTA.MENSAJE_FORGOT_PASSWD, payload:
            {
                mensaje: 'Enviado Codigo al correo...',
                tipo_mensaje: 'OK'
            } });
            const data={correo:forgotPasswd.correo}
            await enviarCorreoParaCambiodePasswd({data});
            dispatchCuenta({ type: ACTIONS_CUENTA.MENSAJE_FORGOT_PASSWD, payload:
                {
                    mensaje: 'Correo Enviado, ingrese codigo',
                    tipo_mensaje: 'OK'
                } });
        })()
        setActiveStep((prevActiveStep) => prevActiveStep + 1);

    }else if(activeStep===1){
        setActiveStep((prevActiveStep) => prevActiveStep + 1);

    }else if(activeStep===2){//update contraseña
        
        (async()=>{
                const data={correo:forgotPasswd.correo,codigo:forgotPasswd.codigo,clave:forgotPasswd.new_passwd}
                const response=await cambiarPasswd({data});
                if(response.status!==200){
                    dispatchCuenta({ type: ACTIONS_CUENTA.MENSAJE_FORGOT_PASSWD, payload:
                        {
                            mensaje: mensajesCustomizados(response.error_code),
                            tipo_mensaje: 'ERROR'
                        } });
                }else{
                    console.log("here")
                    setActiveStep((prevActiveStep) => prevActiveStep + 1);
                    dispatchCuenta({ type: ACTIONS_CUENTA.ATUALIZACION_PASSWD_EXITO, payload:'' });
                }

            })()
            
    }
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };


  return {
    mensajeForgotPasswd,
        activeStep,
      correo:forgotPasswd.correo,
      codigo:forgotPasswd.codigo,
      new_passwd:forgotPasswd.new_passwd,
     handleChange,
     handleNext,
     handleReset,
     handleBack
  }
}