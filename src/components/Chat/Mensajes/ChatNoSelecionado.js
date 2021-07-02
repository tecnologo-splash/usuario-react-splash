import React from 'react';
import {HeaderChat} from '../HeaderChat';
import {ButtonChatGrupal} from '../ButtonChatGrupal';

export function ChatNoSelecionado(){

    return(
        <>
    <div className="col-md-6 border p-0 ">
    <HeaderChat>
                <div className="d-flex align-items-center">
                    <b> Chat Splash Bienvenido</b>
                </div>
      </HeaderChat>          
    <div className="sidebar  border d-flex justify-content-center  align-items-center">
           
    <img  src={process.env.PUBLIC_URL + '/recursos/svg/icon_dark.svg'} className="rounded"alt="Logo Splash" width="300"/>
 
      
      </div>
    </div>
    
    <ButtonChatGrupal/>
    </>
    )
}