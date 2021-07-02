import React from 'react';
import Typography from '@material-ui/core/Typography';
import {InputMensaje} from './InputMensaje';
import {ButtonChatGrupal} from '../ButtonChatGrupal';

import {HeaderChat} from '../HeaderChat';
import {PerfilAvatar} from '../../Home/Perfil/PerfilAvatar';
import {Mensaje} from './Mensaje';

export function ListaMensajes({chatIdSelected,idMe,dataMensajes}){
console.log(dataMensajes.from_usuario_id ===idMe);
    return(
        <>
    <div className="col-md-6 border p-0 ">
    <HeaderChat>
    <div className="col-md-2">  
                  <PerfilAvatar/>
                            
                </div>

                <div className="d-flex align-items-center">
                    <b> Marcelo Tizzi  @pepe rompe</b>
                </div>
      </HeaderChat>          
    <div className="message-list sidebar  custom-scrollbar border">
  <div className="col-md-12 mb-3"></div>

        <div className="srcoll">  
               
        {
                [...new Array(2)].map((item,i)=>(
                  <Mensaje key={i}
                  chatIdSelected={chatIdSelected} 
                  idMe={idMe}
                  dataMensajes={dataMensajes}
                  />

                ))
            }
 
             
 {
                [...new Array(2)].map((item,i)=>(
                  <div className={' message  start mb-4 d-flex justify-content-start  d-inline-flex col-md-12   ml-2 '}>
                     <div className="bubble-container ">
                      <div className="bubble " style={{  wordBreak:"break-all",maxWidth:'70%' }}>
                      { "pepe asdssssssssss "}
                      </div>
                      <div className="d-flex flex-row ml-2">
                      <Typography variant="caption" display="block" gutterBottom>
                      2020/03/2021 15:30
      </Typography>
                        
                        </div>

                    </div>
                  </div>

                ))
            }
 
      
     </div>
     
      
      </div>
    </div>
    
    <ButtonChatGrupal/>
    <InputMensaje/>
    </>
    )
}