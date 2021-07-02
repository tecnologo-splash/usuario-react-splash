import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { emojis } from '../../../../util/emojis';

export function Reaccion({reaccion, user}){

  return (
    <>  
      <Grid item xs={1} className="mt-3" align="center">
        {
          reaccion ? <img src={emojis.find(e => e.enumEmoji === reaccion)?.img} alt="img" height={"35px"}  width={"35px"}/> : null
        }
      </Grid>
      <Grid item xs={5} className="mt-3" align="center">
        <Typography variant="button">
          {user?.nombre} {user?.apellido}
        </Typography>
      </Grid>
    </>
  )
}