import React from 'react';
import{PerfilAvatar} from '../../Perfil/PerfilAvatar';

export function InputComentario({urlPerfil,children}){


    return (

      <div className="col-md-12 row mb-3">
      <div className='col-md-1 align-self-center'>
    
      <PerfilAvatar img={urlPerfil} size='small'/>
      </div>
      <div className='col-md-11'>
  

      {children}
  
   
          </div>      
  </div>
    )
}