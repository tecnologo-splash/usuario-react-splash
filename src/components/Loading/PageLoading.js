import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export function PageLoading(){

    return (
        <div >
        <div className="container">
        <div className="row align-items-center justify-content-center vh-100"> 
        <CircularProgress /> {"  "}
        &nbsp;   Cargando Splash...
   
      </div>
      </div>
      </div>
          )
}