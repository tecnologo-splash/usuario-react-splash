/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Typography from "@material-ui/core/Typography";
//import {StoreLoginProvider} from '../contexts/LoginContext';

import { withStyles } from "@material-ui/core/styles";
import { LoginForm } from "../components/login/Login/LoginForm";

export default function Login() {

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
              Una red social para disfrutar plenamente divirtiéndote con tus
              amigos y los nuevos por conocer.
            </WhiteTextTypography>
          </div>

            <LoginForm/>
       
        </div>
      </div>
    </div>
  );
}
