import React,{useState} from 'react';
import Chip from '@material-ui/core/Chip';
import DateRangeIcon from '@material-ui/icons/DateRange';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import Typography from "@material-ui/core/Typography";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandMiddleFinger } from '@fortawesome/free-solid-svg-icons';
import { faMehRollingEyes } from '@fortawesome/free-solid-svg-icons';

export function FiltroPublicacion({setTipoFiltro}){
  const [show,setShow]=useState(false);
  const [selected,setSelected]=useState('');

  const handleClick=(tipo)=>{
    setTipoFiltro(tipo);
    setShow(!show);
    setSelected('');
  }
  const handleClickReaccopmes=(tipo)=>{
    setTipoFiltro(tipo);
    setSelected(tipo);
  }

  return (
        <div className="col-md-8 offset-md-2 mb-4 ">

        <div className="col mt-3">
        <Typography display="inline" variant="body2" color="textSecondary">
          Muro Ordenado por
      </Typography>
        <Chip color={!show ? "primary" : "default"} size="small"
         label="Fecha" className="ml-4 mr-2" icon={<DateRangeIcon />} onClick={()=>handleClick('fechaCreado')} />
       { !show ? 
       <Chip color="default" 
       size="small" label="Reacciones"
        className="ml-2 mr-2" icon={<DynamicFeedIcon />} onClick={()=>setShow(true)} />
        
      :null}    {
          show ?
<>
<Chip color="primary"  variant={selected==="resumenReaccion.cantidadMeGusta" ? "default" :"outlined"}size="small" label="Me Gusta" className="ml-2 mr-2" icon={<ThumbUpAltIcon />}
 onClick={()=>handleClickReaccopmes('resumenReaccion.cantidadMeGusta')}/>

<Chip color="primary"  variant={selected==="resumenReaccion.cantidadNoMeGusta" ? "default" :"outlined"}  size="small" label="No Me Gusta" className="ml-2 mr-2" icon={<ThumbDownIcon />} 
onClick={()=>handleClickReaccopmes('resumenReaccion.cantidadNoMeGusta')}/>

<Chip color="primary"  variant={selected==="resumenReaccion.cantidadMeDivierte" ? "default" :"outlined"}  size="small" label="Me Divierte" className="ml-2 mr-2" icon={<EmojiEmotionsIcon />} 
 onClick={()=>handleClickReaccopmes('resumenReaccion.cantidadMeDivierte')}/>

<Chip color="primary"  variant={selected==="resumenReaccion.cantidadMeEnoja" ? "default" :"outlined"}  size="small" label="Me Enoja" className="ml-2 mr-2" icon={ <FontAwesomeIcon icon={faHandMiddleFinger} />}
 onClick={()=>handleClickReaccopmes('resumenReaccion.cantidadMeEnoja')}/>

<Chip color="primary" variant={selected==="resumenReaccion.cantidadNoMeInteresa" ? "default" :"outlined"}  size="small" label="No Me Interesa" className="ml-2 mr-2" icon={<FontAwesomeIcon icon={faMehRollingEyes} />}
 onClick={()=>handleClickReaccopmes('resumenReaccion.cantidadNoMeInteresa')}/>

</>
:
null
        }



        </div>
      </div>
    )
}