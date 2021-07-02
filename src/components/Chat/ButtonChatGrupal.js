import React from 'react';

import GroupAddIcon from '@material-ui/icons/GroupAdd';
import Button from '@material-ui/core/Button';

export function ButtonChatGrupal({}){

    return (
        <>
        <div className="col-md-3 offset-md-2 border p-0 d-flex align-items-center justify-content-center">
    
        <Button
          variant="outlined"
          color="primary"
          startIcon={<GroupAddIcon />}
        >
          Crear Chat Grupal
        </Button>
  
        </div>
  
</>
    )
}