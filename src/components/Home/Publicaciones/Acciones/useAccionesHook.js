import {useState,useEffect,useReducer} from 'react';
import { ReaccionarAPublicacion,BorrarReaccionarAPublicacion } from '../../../../services/MuroApi';
import { ACTIONS, AccionesReducer, initialStateCuenta } from '../../../../contexts/AccionesReducer';

export function useAccionesHook({resumen_reaccion = [], publicacionId,comentarios,userInfo,idOtroUsuario}){
    const [expanded, setExpanded] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    //const [reacciones, setReacciones] = useState(resumen_reaccion);
    const [openModalCompartir,setOpenModalCompartir]=useState(false);
    const [opeReacciones, setOpenModalReacciones] = useState(false);
    const [cantidadComentarios,setCantidadComentarios]=useState(0);
    const [store,dispatch]=useReducer(AccionesReducer,initialStateCuenta);
    const {reacciones}=store;

    useEffect(()=>{
        setCantidadComentarios(comentarios.length);
        dispatch({ type: ACTIONS.REACCIONAR, payload: resumen_reaccion});
    },[resumen_reaccion,publicacionId])

    const open = Boolean(anchorEl);

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };
    
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

      const handleClick = () => {
        setOpenModalReacciones(true)
      }

      const openReaccion= async(e)=>{
        console.log(reacciones.mi_reaccion);
        if(reacciones.mi_reaccion!==null){
         await BorrarReaccionarAPublicacion({ publicacionId });
         reacciones.mi_reaccion=null
         console.log(reacciones);
         dispatch({ type: ACTIONS.REACCIONAR, payload: resumen_reaccion});
        }else{
          setAnchorEl(e.currentTarget) 
        }
      }
  const handleClickAgregarReaccion = async(enumEmoji) => {
    const data = { emoji: enumEmoji };
    const response=  await ReaccionarAPublicacion({ publicacionId, data })
      console.log(response);
      dispatch({ type: ACTIONS.REACCIONAR, payload: response.resumen_reaccion});
      setAnchorEl(null);
  }

  const handleClickCompartir=()=>{
    setOpenModalCompartir(true);
  }

return {
    handleClick,handleExpandClick,
    handlePopoverClose,openReaccion,
    open,expanded,opeReacciones,setOpenModalReacciones,anchorEl,setAnchorEl,reacciones,
    cantidadComentarios,setCantidadComentarios,handleClickAgregarReaccion,
    openModalCompartir,setOpenModalCompartir,handleClickCompartir

}

}