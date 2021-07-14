import React,{useState} from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import TextField from '@material-ui/core/TextField';
import NearMeIcon from '@material-ui/icons/NearMe';
import InputAdornment from '@material-ui/core/InputAdornment';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import Popover from "@material-ui/core/Popover";

export function InputMensaje({chatIdSelected,sendMensajeDesdeChat,setEnviado}){
  const estiloCursor=css`cursor:pointer; margin-right:20px`;
  const [texto,setTexto]=useState('');
  const [anchorEl, setAnchorEl] = useState(null);

  const handleChange=(e)=>{
    setTexto(e.target.value);
  }
  
  const onClickSendMensaje=()=>{
    const dataToSend={mensaje:texto,tipo_mensaje:'TEXTO',chat_id:chatIdSelected};
    sendMensajeDesdeChat({dataToSend});
    setTexto('');
    setEnviado(true);
  }
  
  const handleKeyPress=(e)=>{
    if (e.key === 'Enter') {
      onClickSendMensaje();
    }
  }
  return (
        <>
      <TextField
              style={{ margin: 8, backgroundColor:'white', border:'10px' }}
              placeholder="Ingresar mensaje"
              fullWidth
              //multiline
              className="col-md-6 m-0 p-0 border"
              margin="normal"
              size="medium"
              variant="outlined"
              onKeyDown={handleKeyPress}
              //rowsMax="3"
              value={texto}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" css={estiloCursor} onClick={(e)=> setAnchorEl(e.currentTarget)}>
                    <InsertEmoticonIcon />
                  </InputAdornment>
                ),
                  endAdornment: (
                    <InputAdornment position="end" css={estiloCursor} onClick={onClickSendMensaje}>
                      <NearMeIcon/>
                    </InputAdornment>
                  )
                }}
            />

            
          <Popover
            open={ Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={()=> setAnchorEl(null)}
            disableScrollLock 
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
          >
            <Picker
              set="facebook"
             onSelect={emoji => setTexto(texto + emoji.native)}
            />
          </Popover>
  
</>
    )
}