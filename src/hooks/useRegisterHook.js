import {useState} from 'react';
import {Register} from '../services/LoginApi';
import {mensajesCustomizados} from '../config/api/mensajesCustomizados';
import { useDispatch, useStore } from "../contexts/LoginContext";
import { ACTIONS} from "../contexts/StoreLoginReducer";
import {userOrEmail} from '../util/validarCorreo';
import {isEmptyInputs} from '../util/validarCamposVacios';


export function useRegisterHook(){
  const data = useStore();
  const dispatch = useDispatch();
  const {registro}=data;
  const [openModalRegister, setOpenModalRegister] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [disabledButton, setButton] = useState(false);

  const handleChangeRegister=(e)=>{
    dispatch({ type: ACTIONS.REGISTRO, payload: {...data.registro,[e.target.name]: e.target.value} });
  }

  const onClickRegister=()=>{
    console.log(registro);
    if(isEmptyInputs(registro)){
      dispatch({ type: ACTIONS.MENSAJE_ERROR_REGISTRO, payload: "Debe Ingresar los Campos Obligatorios" });
    }else if(!userOrEmail(registro.correo)){
      dispatch({ type: ACTIONS.MENSAJE_ERROR_REGISTRO, payload: "Error, correo invalido" });
    }else{
      setButton(true);
      dispatch({ type: ACTIONS.MENSAJE_ERROR_REGISTRO, payload:'' });
      (async () => {
        const response=await Register({data:registro});
        console.log(response);
        if(response.status >=200 && response.status<=226){
          dispatch({ type: ACTIONS.REGISTRO_EXITOSO, payload: '' });
          handleModalRegister();
          handleCloseAlertExito();
        }else{
          dispatch({ type: ACTIONS.MENSAJE_ERROR_REGISTRO, payload: mensajesCustomizados(response.error_code) });
        }
        setButton(false);
      })()
    }
   }


  const handleModalRegister=()=>{
    setOpenModalRegister(!openModalRegister);
  }
   
  const handleCloseAlertExito = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlert(!openAlert);
  };


    return {
      handleCloseAlertExito,
      openAlert,
      handleModalRegister,
      openModalRegister,
      valueCombo:registro.genero,
      mensaje:data.mensajeErrorRegistro,
      handleChangeRegister,
      onClickRegister,
      disabledButton
    }

}