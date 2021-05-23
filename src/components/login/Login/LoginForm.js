import React,{useState} from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { Register } from "../Register/Register";
import { ForgotPassword } from "../ForgotPassword";
import { withStyles } from "@material-ui/core/styles";
import {useLoginHook} from './useLoginHook';

const inputStyles = css`
  background-color: white;
`;

export function LoginForm (){
    const loginFormStyles = css`
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    padding: 25px;
  `;

  const WhiteTextTypography = withStyles({root: { color: "#FFFFFF"} })(Typography);

const {datosUsuario,mensaje,handleChange,onClickLogin}=useLoginHook();
    return (
        <div className="col-md-5">
        <WhiteTextTypography variant="h4" gutterBottom>
          <center>Inicio de Sesión</center>
        </WhiteTextTypography>
        <div css={loginFormStyles}>

          <CampoTexto Label="Usuario o Correo"
            Icon={<AccountCircle />}
            Type="text"
            nombre="usuario"
            handleChange={handleChange}

            valor={datosUsuario.usuario}
           />
    

          <CampoTexto Label="Contraseña" 
            Icon={<VpnKeyIcon />}
            Type="password"
            nombre="passwd"
            handleChange={handleChange}
            valor={datosUsuario.passwd}

           />

           <div className="col-md-12" style={{ color:"#e74c3c" }}><center><b>{mensaje}</b></center></div>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            className="mt-4"
            size="large"
            onClick={onClickLogin}
          >
            Iniciar Sesión
          </Button>
          <div className="text-center pt-2 pb-3">
            <ForgotPassword />
            <hr />

            <Register />
          </div>
          <div className="text-center pt-2">
            <Typography variant="caption">* Campos obligatorios</Typography>
          </div>
        </div>
      </div>
    )
}


export function CampoTexto({Label,Icon,Type="text",handleChange,valor,nombre}){
  return (
    <div className="mb-3">
    <TextField
      fullWidth
      className="mt-4"
      label={Label}
      autoFocus={true}
      variant="outlined"
      required
      name={nombre}
      css={inputStyles}
      type={Type}
      value={valor}
      onChange={handleChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            {Icon}
          </InputAdornment>
        ),
      }}
    />
  </div>

  )

}