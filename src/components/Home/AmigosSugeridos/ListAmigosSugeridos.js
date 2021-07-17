import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import Link from "@material-ui/core/Link";
import {PerfilAvatar} from '../Perfil/PerfilAvatar';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {useAmigosSugeridosHook} from '../../../hooks/useAmigosSugeridosHook';
import {SIZE_SUGERENCIAS_AMIGOS_MURO} from '../../../config/api/settings';
import { useHistory } from "react-router-dom";
//import Skeleton from '@material-ui/lab/Skeleton';
const divStyle=css`
background-color: white;
border-radius: 20px;
&:hover {
  cursor:pointer;
  transform: scale(1.03);
  transition: transform .1s;
}
`;
export function ListAmigosSugeridos() {

  const {amigos,seguirUsuario}=useAmigosSugeridosHook();
  const cantidad=Object.keys(amigos).length;

  let history = useHistory();

  const handleClick=()=>{
    history.push("/home/amigos-sugeridos");
  }
const handleClickGoToPerfil=(userId)=>{
  history.push("/home/perfil/"+userId);

}

 return (

  <div className="col-md-3">
  <div className="sticky-top" style={{ top:'80px' }}>
        
  <Typography variant="h5" className="mb-3 pl-3">
    Amigos Sugeridos
  </Typography>

    {amigos.map((item, index) => (
      <div
        key={index}
        className="col-md-8 mb-4 border shadow-sm d-inline-flex p-2 offset-md-1 nav"
        css={divStyle}
      >
       <CardAmigos userData={item} seguirUsuario={seguirUsuario}  clickPerfil={handleClickGoToPerfil}/>
      </div>
    ))}
{/*    <div className="col-md-8">
          <Skeleton height={150 }width={220} />
    </div>
    */}

        {                         
            cantidad===SIZE_SUGERENCIAS_AMIGOS_MURO
            ?
    <div
      className="col-md-8 mb-4 border shadow-sm d-flex justify-content-center offset-md-1"
      css={divStyle}
    >
      <Link component="button" variant="body2" onClick={handleClick}>
        Ver Más
      </Link>
      </div>
      : ""
      }
  


  </div>
  </div>
  );
}

export function CardAmigos({userData,seguirUsuario,clickPerfil}){

  return(
    <>
    <PerfilAvatar img={userData.url_perfil} onClick={()=>clickPerfil(userData.usuario_id)}/>

    <div className="col flex-nowrap">
    <Typography variant="body1">{userData.nombre} {userData.apellido}</Typography>
    <Typography variant="body2" color="textSecondary">
    @{userData.usuario}
    </Typography>
  </div>
  <div className="col-md-12">
    <Button
      style={{ textTransform: "none" }}
      variant="outlined"
      color="primary"
      size="small"
      className="mt-1"
      fullWidth
      onClick={()=>seguirUsuario(userData.usuario_id)}
    >
      <PersonAddIcon className="mr-2" />{" "}
      <Typography> Seguir</Typography>
    </Button>
  </div>
  </>
  )
}