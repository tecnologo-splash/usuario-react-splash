import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { PerfilAvatar } from '../../Perfil/PerfilAvatar';
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import NearMeIcon from '@material-ui/icons/NearMe';
import CachedIcon from '@material-ui/icons/Cached';
import {EnlaceExterno,EnlaceExternoInput} from './EnlaceExterno';
import {Multimedia,Encuesta} from './ButtonsPublicacion';
import{OpcionesEncuesta} from './OpcionesEncuesta';
import {InputPublicacion} from '../InputPublicacion';
import {usePublicar} from '../../../../hooks/publicar/usePublicar';

export default function CrearPublicacion({publicar,userInfo}) {

  const {  refresh,
    handleClickPublicar,
    handlePopoverClose,
    tipoPublicacion,
    setTipooPublicacion,
    anchorEl,
    setUrl,
    setTextoPublicacion,
    textoPublicacion,
    cantFotos,
    setMultimedia,
    setCantFotos,
    opcionesEncuesta,
    setOpcionesEncuesta,
    mensajeError,
    handlePopoverOpen
  }=usePublicar();
  
  

  return (
    <div className="col-md-8 offset-md-2 mb-4 ">
      <Card >
 
        <div className="d-flex flex-row mt-3">
          <div className="align-self-center col-md-1">
          <PerfilAvatar img={userInfo.url_perfil} />
          </div>
          <div className="col-md-11 align-self-center pl-0 ">
          <InputPublicacion setTexto={setTextoPublicacion}
          textoPublicacion={textoPublicacion}
          handlePopoverOpen={handlePopoverOpen}
          />
          </div>
        </div>


        <CardContent>
             
          {/* <Emoji emoji=':santa:' size={32} />*/}
           
           <center>
            <Typography variant="button" display="block" gutterBottom  color="secondary">
             {mensajeError}
            </Typography>
          </center>
          <Divider className="mb-3" />


 
          <div className="d-flex bd-highlight">
          <Multimedia  activarButtons={setTipooPublicacion} setCantFotos={setCantFotos} setMultimedia={setMultimedia}>
            Foto/Video
            </Multimedia>
        
            <Encuesta activarButtons={setTipooPublicacion}/>

            <EnlaceExterno  activarButtons={setTipooPublicacion}/>

            <Button className="flex-fill bd-highlight" onClick={handleClickPublicar} >
              <NearMeIcon className="mr-2" style={{ color: "#2980b9" }} />
              <Typography style={{ textTransform: "none", color: "grey" }}>
                Publicar
              </Typography>
            </Button>


            
            <CachedIcon fontSize="small" className="mt-1 ml-2" onClick={refresh}/>

          </div>
  
          <EnlaceExternoInput link_externo={tipoPublicacion}
           setUrl={setUrl}
           />
           {tipoPublicacion==='multimedia'?
          "Cantidad multimedia: "+ cantFotos:null}
          {tipoPublicacion==='encuesta'?
            <OpcionesEncuesta  opcionesEncuesta={opcionesEncuesta}  setOpcionesEncuesta={setOpcionesEncuesta}/>:null
          }



          <Popover
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={handlePopoverClose}
            disableScrollLock 
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
          >
            <Picker
              set="facebook"
              emoji="point_up"
             onSelect={emoji => setTextoPublicacion(textoPublicacion + emoji.native)}
            />
          </Popover>
 
        </CardContent>
      </Card>


    </div>
  );
}


