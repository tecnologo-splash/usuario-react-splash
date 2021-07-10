import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom';

export function NotLogin(){

    const bodyStyles = css`
    background: #6d31bf; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to top,
      #3c1053,
      #6d31bf
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to top,
      #3c1053,
      #6d31bf
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  `;
  const WhiteTextTypography = withStyles({
    root: {
      color: "#FFFFFF",
    },
  })(Typography);

  let history= useHistory();
  const irInicio=()=>{
    history.push("/")

  }
    return (
        <div css={bodyStyles}>   
            <div className="container">
        <div className="row align-items-center justify-content-center vh-100">
            <div className="col-md-12 d-flex justify-content-center">
            <WhiteTextTypography variant="h5">No puede acceder si no está logeado</WhiteTextTypography>
                </div>
                <div className="col-md-12 d-flex justify-content-center">  <img src={process.env.PUBLIC_URL + '/recursos/notloged.png'} alt="not loged"/>        </div>
             <div className="col-md-12 d-flex justify-content-center">
                 <WhiteTextTypography variant="h6">Por favor iniciar sesión en el sistema para poder continuar.
                </WhiteTextTypography>

                 </div>
                 <div className="col-md-12 d-flex justify-content-center">
                 <div className="col-md-12 d-flex justify-content-center">
           
                 <Button variant="contained" size="large"  className="mb-5" onClick={irInicio}>
                 Volver al Inicio
                </Button>

                 </div>
                 </div>

             </div>
        </div>
        </div>
    )
}