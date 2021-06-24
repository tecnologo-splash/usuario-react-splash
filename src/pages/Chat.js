import React, { useEffect, useCallback, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { MenuHeader } from '../components/Menu/MenuHeader';

const useStyles = makeStyles(theme => ({
  content: {
    padding: theme.spacing(3),
    backgroundColor: '#ecf0f1'
  }
}));

export default function Chat() {

  const classes = useStyles();


  return (
    <>
      <MenuHeader />
      <main className={classes.content}>

        <div className="row">

          <div className="col-md-3">
            
          </div>
          <div className="col-md-9">
          <div className="col-md-8 offset-md-2 mb-4 ">
    
          </div>
          </div>
        </div>
      </main>


    </>
  );

}

