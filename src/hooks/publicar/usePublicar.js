import  {useState} from 'react';
import {useFuncionesDelMuro} from '../../hooks/useMuroHook';

export function usePublicar(){
  const {
    publicarEnlaceExterno,
    upLoadMultimedia,
    publicarEncuesta,
    publicarSoloTexto}=useFuncionesDelMuro();

    const [visible, setVisible] = useState(false);
    const [url, setUrl] = useState("");

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
  
    const [textoPublicacion,setTextoPublicacion]=useState("");
    const [tipoPublicacion,setTipooPublicacion]=useState('texto');
    const [multimedia,setMultimedia]=useState(null);
    const [cantFotos, setCantFotos] = useState(0);
    const [opcionesEncuesta,setOpcionesEncuesta]=useState(null);
    const [mensajeError,setMensajeError]=useState('');

    const refresh=()=>{
      setTipooPublicacion("texto");
    }
  

    const handlePopoverClose = () => {
      setAnchorEl(null);
    };
  
    const handleClickPublicar=()=>{
        if(textoPublicacion!==""){        
          if(tipoPublicacion==="link_externo"){
            if(url===""){
              setMensajeError('Error debe ingresar el link externo');
            }else{
              publicarEnlaceExterno(url,textoPublicacion);
              setMensajeError('');
              setTipooPublicacion('texto');
              setTextoPublicacion('');
              setUrl('');
            }
           
          }else if(tipoPublicacion==="texto"){
            //publicar(textoPublicacion);
            publicarSoloTexto(textoPublicacion);
            setTipooPublicacion('texto');
            setTextoPublicacion('');
          }else if(tipoPublicacion==="multimedia"){
            if(cantFotos>4 && cantFotos<1){
              setMensajeError('Error, Debe ingresar al menos un elemento de multimedia');
            }else{
              upLoadMultimedia(multimedia,textoPublicacion,cantFotos);
              setMensajeError('');
              setTipooPublicacion('texto');
              setTextoPublicacion('');
              setCantFotos(0);
            }
          }else if(tipoPublicacion==="encuesta"){
            if(opcionesEncuesta!==null){
              validacionEncuesta();
            }else{
              setMensajeError('Error, Debe ingresar opciones');

            }
         
          }

        }else{
          setMensajeError('Error, Debe ingresar al menos un texto');

        }
    }
    const handlePopoverOpen=(e)=>{
      setAnchorEl(e.currentTarget)
    }

    const validacionEncuesta=()=>{
      if(opcionesEncuesta['opcion_1']==='' || opcionesEncuesta['opcion_2']==='' || opcionesEncuesta['fecha_cierre_encuesta']===''){
        setMensajeError('Error, Debe ingresar datos Obligatorios');
      }else if(new Date(opcionesEncuesta['fecha_cierre_encuesta'])>new Date()){
        let diffInMilliSeconds = Math.abs(new Date(opcionesEncuesta['fecha_cierre_encuesta'])- new Date()) / 1000;
        const days = Math.floor(diffInMilliSeconds / 86400);
        diffInMilliSeconds -= days * 86400;
      //  console.log('calculated days', days);

        
        const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
        diffInMilliSeconds -= hours * 3600;
        //console.log('calculated hours', hours);

        
        const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
        diffInMilliSeconds -= minutes * 60;
        //console.log('minutes', minutes);//MINUTES
          const opciones=[];
          for (var key in opcionesEncuesta) {
            if (opcionesEncuesta[key] !== "" && key!=='fecha_cierre_encuesta'){
                opciones.push({texto:opcionesEncuesta[key]});
            } 
          }
          const valorMinutoTotal=minutes+(hours*60)+(days*24*60);
        //  console.log(valorMinutoTotal);
          publicarEncuesta(textoPublicacion,opciones,valorMinutoTotal);
          setMensajeError('');
          setTipooPublicacion('texto');
          setTextoPublicacion("");
          setOpcionesEncuesta(null);
      }else{
        setMensajeError('Error, Fecha Hora de cierre anterior a la actual');
      }
    }

    return {
        refresh,
        handleClickPublicar,
        handlePopoverClose,
        tipoPublicacion,
        setTipooPublicacion,
        open,
        anchorEl,
        visible, 
        setVisible,
        setTextoPublicacion,
        textoPublicacion,
        setUrl,
        setAnchorEl,
        url,
        multimedia,
        setMultimedia,
        cantFotos,
        setCantFotos,
        opcionesEncuesta,
        setOpcionesEncuesta,
        mensajeError,
        handlePopoverOpen
    }
  
}