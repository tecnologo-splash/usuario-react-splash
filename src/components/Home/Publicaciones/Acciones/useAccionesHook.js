import {useState,useEffect} from 'react';
import { ReaccionarAPublicacion,BorrarReaccionarAPublicacion,Publicacion } from '../../../../services/MuroApi';

export function useAccionesHook({resumen_reaccion = [], publicacionId,comentarios,userInfo,idOtroUsuario}){
    const [expanded, setExpanded] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [reacciones, setReacciones] = useState(resumen_reaccion);
    const [openReact, setOpenReact] = useState(false);
    const [cantidadComentarios,setCantidadComentarios]=useState(comentarios.length);
    useEffect(()=>{
        setReacciones(resumen_reaccion);
    },[resumen_reaccion])

    useEffect(()=>{
       
    },[reacciones])
    

    const open = Boolean(anchorEl);

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };
    
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

      const handleClick = () => {
        setOpenReact(true)
      }

      const openReaccion= async(e)=>{
        console.log(reacciones);
        if(reacciones.mi_reaccion!==null){
         await BorrarReaccionarAPublicacion({ publicacionId });
         reacciones.mi_reaccion=null
         console.log(reacciones);
         setReacciones(reacciones);
        }else{
          setAnchorEl(e.currentTarget) 
        }
      }
  const handleClickAgregarReaccion = async(enumEmoji) => {
    const data = { emoji: enumEmoji };
    const response=  await ReaccionarAPublicacion({ publicacionId, data })
      console.log(response);
      setReacciones(response.resumen_reaccion);
      setAnchorEl(null);
  }

      
return {
    handleClick,handleExpandClick,
    handlePopoverClose,openReaccion,
    open,expanded,openReact,setOpenReact,anchorEl,setAnchorEl,setReacciones,reacciones,
    cantidadComentarios,setCantidadComentarios,handleClickAgregarReaccion

}

}