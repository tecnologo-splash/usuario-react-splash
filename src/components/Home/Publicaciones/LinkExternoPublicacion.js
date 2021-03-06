import React, { useEffect } from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import LinkIcon from '@material-ui/icons/Link';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
export default function LinkExternoPublicacion({ publicacionData }) {

  const hoverLink = css`
    &:hover {
        background-color: #ecf0f1;
        cursor:pointer;
      }
    `;
  const {enlace_externo}=publicacionData;

  const limitStrLength = (text, max_length) => {
    if (text.length > max_length - 3) {
      return text.substring(0, max_length).trimEnd() + "...";
    }
    return text;
  };

  return (

           <CardContent>
          <Typography paragraph>

            {publicacionData.texto}
          </Typography>
          <div className="col-md-12" css={hoverLink} onClick={() => window.open(enlace_externo[0].url, "_blank")}>
            <div className="row border rounded">
              <div className="col-md-4 align-self-stretch d-flex align-items-center pl-0"><img src={enlace_externo[0].imagen_url} alt="" className="img-fluid h-100 d-inline-block" /></div>
              <div className="col-md-8">
              <Typography variant="subtitle2" gutterBottom className=" mt-1"><b>{limitStrLength(enlace_externo[0].titulo, 70)}</b></Typography>
                <Typography variant="body2" gutterBottom> {limitStrLength(enlace_externo[0].descripcion, 100)}</Typography>
                <Typography variant="caption" display="block" color="textSecondary" gutterBottom>
                  <LinkIcon fontSize="small" className="mr-1" />  {enlace_externo[0].url}
                </Typography>

              </div>
            </div>
            </div>
        </CardContent>
  
  );
}