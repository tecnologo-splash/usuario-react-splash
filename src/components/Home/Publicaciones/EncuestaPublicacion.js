import React,{useState,useEffect} from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import { Acciones } from "./Acciones";

import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import {PublicacionHeader} from './PublicacionHeader';


export default function EncuestaPublicacion() {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);

  useEffect(() => {
    setValue(60);
    setValue2(30);
    setValue3(10);
  },[value]);
  return (
    <div className="col-md-8 offset-md-2 mb-4">
      <Card>
      <PublicacionHeader/>
        <CardContent>
          <Typography paragraph>Hola, que prefieren:</Typography>
          	

  <div className="row">
  <div className="col-md-1 align-self-center"></div>
  <div className="col-md-1 align-self-center">60% </div>
    <div className="col-md-10">

      <div className="progress position-relative border mb-1" style={{ height: "35px", backgroundColor:'#FFFFFF'}}>
        
      <div className="progress-bar" role="progressbar" style={{width: `${value}%`, backgroundColor:'#1DA1F2',   transition:' 1s ease',
  transitionDelay: '1s'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
      <div className="pl-3 justify-content-start d-flex position-absolute w-100 align-self-center">Empanadas</div>
      <div className="pr-1 justify-content-end d-flex position-absolute w-100 align-self-center"></div>

    </div>
  </div>
  <div className="col-md-1 align-self-center"><CheckCircleOutlineIcon/> </div>
  <div className="col-md-1 align-self-center">30% </div>

  <div className="col-md-10 ">

<div className="progress position-relative border mb-1" style={{ height: "35px", backgroundColor:'#FFFFFF'}}>
    <div className="progress-bar" role="progressbar" style={{width: `${value2}%`, backgroundColor:'#C4CFD6',   transition:' 1s ease',  transitionDelay: '1s'
}}></div>
    <div className="pl-3 justify-content-start d-flex position-absolute w-100 align-self-center">Milanesas</div>
    <div className="pr-1 justify-content-end d-flex position-absolute w-100 align-self-center"></div>

</div>
</div>
<div className="col-md-1 align-self-center"></div>

<div className="col-md-1 align-self-center">10% </div>

<div className="col-md-10 ">

<div className="progress position-relative border" style={{ height: "35px", backgroundColor:'#FFFFFF'}}>
    <div className="progress-bar" role="progressbar" style={{width: `${value3}%`, backgroundColor:'#C4CFD6',   transition:' 1s ease',  transitionDelay: '1s'
}}></div>
    <div className="pl-3 justify-content-start d-flex position-absolute w-100 align-self-center">Pollo</div>
    <div className="pr-1 justify-content-end d-flex position-absolute w-100 align-self-center"></div>

</div>
          </div>


  </div>
        </CardContent>

        <Acciones />
      </Card>
    </div>
  );
}