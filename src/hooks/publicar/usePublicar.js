import  {useState} from 'react';

export function usePublicar({publicar,publicarEnlaceExterno,SubirMultimedia}){
    
    const [visible, setVisible] = useState(false);
    const [url, setUrl] = useState("");

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
  
    const [textoPublicacion,setTextoPublicacion]=useState("");
    const [tipoPublicacion,setTipooPublicacion]=useState('texto');
    const [multimedia,setMultimedia]=useState(null);
    const [cantFotos, setCantFotos] = useState(0);

    const refresh=()=>{
    setTipooPublicacion("texto");
  }
  
    const pepe = (emoji, e) => {
      console.log(emoji, e);
    };
  
    const handlePopoverClose = () => {
      setAnchorEl(null);
    };
  
    const handleClickPublicar=()=>{
      console.log(tipoPublicacion);

      if(tipoPublicacion==="link_externo"){
        console.log(url,textoPublicacion);
        publicarEnlaceExterno(url,textoPublicacion);
      }else if(tipoPublicacion==="texto"){
        publicar(textoPublicacion);
      }else if(tipoPublicacion==="multimedia"){
        console.log("multimedia")
        console.log(multimedia);
        SubirMultimedia(multimedia,textoPublicacion);
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
        pepe,
        setTextoPublicacion,
        textoPublicacion,
        setUrl,
        url,
        multimedia,
        setMultimedia,
        cantFotos,
        setCantFotos
    }
  
}