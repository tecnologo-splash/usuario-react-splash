import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

import { SetpComponent } from "./SetpComponent";
import { useForgotPasswdHook } from "./useForgotPasswdHook";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function ForgotPassword() {
  const {correo,codigo,new_passwd,handleChange,activeStep,mensajeForgotPasswd,
    handleNext,
    handleReset,
    handleBack} =useForgotPasswdHook();
  
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    handleReset();
    setOpen(false);
  };

  function getSteps() {
    return ["Ingresar email", "Codigo de verificacion", "Nueva contraseña"];
  }

  const steps = getSteps();

 const mensajeColor=css`
    color:${mensajeForgotPasswd.tipo_mensaje==='ERROR' ? '#F44336' :'#6D31BF'}
  `


  return (
    <div>
      <Link component="button" variant="body2" onClick={handleClickOpen}>
        ¿Olvidaste tu contraseña?
      </Link>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Reseteo de Contraseña</DialogTitle>
        <DialogContent>


          <Stepper activeStep={activeStep} alternativeLabel >
            {steps.map((label) => (
              <Step key={label} >
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <div>
            {activeStep === steps.length ? (
              <div>
                <Typography className="d-flex justify-content-center align-items-center">
                  <CheckCircleOutlineIcon
                    style={{ fontSize: 40 }}
                    color="primary"
                  />
                  Proceso finalizado con exito
                </Typography>
                {/*<Button onClick={handleReset}>Reset</Button>*/}
              </div>
            ) : (
              <div>
                  <SetpComponent stepIndex={activeStep}  
                  correo={correo}
                  codigo={codigo}
                  new_passwd={new_passwd}
                  handleChange={handleChange}
                  />
      <center><div css={mensajeColor} className="mb-1">{mensajeForgotPasswd.mensaje}</div></center>

                <div className="col-md-12 d-flex justify-content-between ">
                  <div>
                  <Button disabled={activeStep === 0} onClick={handleBack}>
                    Atras
                  </Button>
                  </div>
              
                  <div>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    disabled={correo===''? true : false}
                  >
                    {activeStep === steps.length - 1 ? "Finalizar" : "Siguiente"}
                  </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
        <DialogActions className="pb-4 mr-4">
          <Button onClick={handleClose} color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
