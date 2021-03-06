import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { Register } from "../Register/Register";
import { ForgotPassword } from "../ForgotPassword/ForgotPassword";
import { withStyles } from "@material-ui/core/styles";
import {useLoginHook} from '../../../hooks/useLoginHook';
import {ActivarCuentaModal} from './ActivarCuentaModal';


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
const mensajeError=css`
  color:#F44336;
`;
const WhiteTextTypography = withStyles({root: { color: "#FFFFFF"} })(Typography);

const {usuario,passwd,mensaje,handleChange,onClickLogin,modalActivarCuenta, loading,handleKeyPress}=useLoginHook();

return (
        <div className="col-md-5">
        <WhiteTextTypography variant="h4" gutterBottom>
          <center>Inicio de Sesión</center>
        </WhiteTextTypography>
        <div css={loginFormStyles}>
      
          <CampoTexto Label="Usuario o Correo"
            Icon={<AccountCircle />}
            foco={true}
            Type="text"
            nombre="usuario"
            handleChange={handleChange}
            activo={loading}
            valor={usuario}
           />
    

          <CampoTexto Label="Contraseña" 
            Icon={<VpnKeyIcon />}
            Type="password"
            nombre="passwd"
            handleChange={handleChange}
            activo={loading}
            valor={passwd}
            handleKeyPress={handleKeyPress}
           />

           <div className="col-md-12" css={mensajeError}><center><b>{mensaje}</b></center></div>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            className="mt-4"
            disabled={loading}
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
        {modalActivarCuenta ?<ActivarCuentaModal/> : ""}

      </div>
    )
}



export function CampoTexto({Label,Icon,Type="text",handleChange,valor,nombre,errorCredeintials,activo,handleKeyPress,foco=false}){
  return (
    <div className="mb-3">
    <TextField
      error={errorCredeintials}
      autoFocus={foco}
      /*helperText={errorCredeintials ? "Campos Obligatorios" : ""}*/
      fullWidth
      className="mt-4"
      disabled={activo}
      label={Label}
      variant="outlined"
      required
      name={nombre}
      css={inputStyles}
      type={Type}
      value={valor}
      onChange={handleChange}
      onKeyDown={handleKeyPress || null}
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