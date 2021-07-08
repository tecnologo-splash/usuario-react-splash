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
        if(reacciones.mi_reaccion!==null){
          console.log("here");
         await BorrarReaccionarAPublicacion({ publicacionId });
         console.log("accaaaa")
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
   //   setMiReaccion(enumEmoji);
      setAnchorEl(null);
  }

      
return {
    handleClick,handleExpandClick,
    handlePopoverClose,openReaccion,
    open,expanded,openReact,setOpenReact,anchorEl,setAnchorEl,setReacciones,reacciones,
    cantidadComentarios,setCantidadComentarios,handleClickAgregarReaccion

}

}