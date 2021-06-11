import {useState} from 'react';
import {UserInfo} from '../services/LoginApi';
import { useStoreCuenta,useDispatchCuenta } from "../contexts/LoginContext";
import { ACTIONS as ACTIONS_CUENTA} from "../contexts/StoreCuentaReducer";

export function useInfoUserHook(){

    const {userInfo} = useStoreCuenta();
    const dispatch=useDispatchCuenta();

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
    return {
        getDatos,
        userInfo
    }

}