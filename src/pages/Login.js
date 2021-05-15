/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { Register } from "../components/login/Register";
import { ForgotPassword } from "../components/login/ForgotPassword";
import { withStyles } from "@material-ui/core/styles";

export function Login() {
  const loginFormStyles = css`
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    padding: 25px;
  `;
  const inputStyles = css`
    background-color: white;
  `;
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

  return (
    <div css={bodyStyles}>
      <div className="container">
        <div className="row align-items-center justify-content-center vh-100">
          <div className="col-md-6">
            <img
              src={process.env.PUBLIC_URL + "/recursos/svg/logo_dark.svg"}
              className="w-50"
              alt=""
            />
            <WhiteTextTypography variant="h6" gutterBottom color="secondary">
              Bienvenido a Splash
            </WhiteTextTypography>
            <WhiteTextTypography variant="body1" gutterBottom className="mt-1">
              Una red social para disfrutar plenamente diviritiendote con tus
              amigos y los nuevos por conocer.
            </WhiteTextTypography>
          </div>
          <div className="col-md-5">
            <WhiteTextTypography variant="h4" gutterBottom>
              <center>Inicio de Sesión</center>
            </WhiteTextTypography>
            <div css={loginFormStyles}>
              <div className="mb-3">
                <TextField
                  fullWidth
                  className="mt-4"
                  label="Usuario"
                  autoFocus={true}
                  variant="outlined"
                  required
                  css={inputStyles}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div className="mb-3">
                <TextField
                  fullWidth
                  className="mt-4"
                  variant="outlined"
                  css={inputStyles}
                  label="Contraseña"
                  color="primary"
                  type="password"
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <VpnKeyIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                className="mt-2"
                size="large"
              >
                Iniciar Sesión
              </Button>{" "}
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
        </div>
      </div>
    </div>
  );
}
