import React from 'react';

export function HeaderChat({children}){

    return(
        <div className="col-md-12 toolbar">
            <div className="row d-flex justify-content-center">
               {children}
            </div>        
        </div>
    )
}