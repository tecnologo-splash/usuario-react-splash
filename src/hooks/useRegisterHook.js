import {Register} from '../services/LoginApi';
import {mensajesCustomizados} from '../config/api/mensajesCustomizados';
import { useDispatch, useStore } from "../contexts/LoginContext";
import { ACTIONS} from "../contexts/StoreLoginReducer";


export function useRegisterHook(){
  const data = useStore();
  const dispatch = useDispatch();
  const {registro}=data;
    
  const handleChange=(e)=>{
    dispatch({ type: ACTIONS.REGISTRO, payload: {...data.registro,[e.target.name]: e.target.value} });
  }

  const onClickRegister=()=>{


   }



    return {
     
    }

}