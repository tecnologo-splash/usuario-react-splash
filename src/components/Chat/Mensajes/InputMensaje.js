import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import TextField from '@material-ui/core/TextField';
import NearMeIcon from '@material-ui/icons/NearMe';
import InputAdornment from '@material-ui/core/InputAdornment';
import AttachFileIcon from '@material-ui/icons/AttachFile';

export function InputMensaje({}){
    const estiloCursor=css`cursor:pointer; margin-right:20px`;

    return (
        <>
      <TextField
              style={{ margin: 8, backgroundColor:'white', border:'10px' }}
              placeholder="Ingresar mensaje"
              fullWidth
              multiline
              className="col-md-6 m-0 p-0 border"
              margin="normal"
              size="medium"
              variant="outlined"
              rowsMax="3"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" css={estiloCursor}>
                    <AttachFileIcon/>
                  </InputAdornment>
                ),
                  endAdornment: (
                    <InputAdornment position="end" css={estiloCursor}>
                      <NearMeIcon/>
                    </InputAdornment>
                  )
                }}
            />
  
</>
    )
}