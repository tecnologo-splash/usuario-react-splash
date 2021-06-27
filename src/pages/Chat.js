import React, { useEffect, useCallback, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { MenuHeader } from '../components/Menu/MenuHeader';
import Typography from '@material-ui/core/Typography';

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

          <div className="col-md-9 offset-md-2 row">
         <div className="col-md-3">
          <center>Conversaciones</center>
          </div>
          <div className="col-md-9">
            <center>chats</center>
          </div>
          </div>

      </main>


    </>
  );

}

