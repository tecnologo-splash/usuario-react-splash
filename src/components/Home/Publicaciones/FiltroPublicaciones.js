import React from 'react';
import Chip from '@material-ui/core/Chip';
import DateRangeIcon from '@material-ui/icons/DateRange';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import Typography from "@material-ui/core/Typography";

export function FiltroPublicacion(){
    return (
        <div className="col-md-8 offset-md-2 mb-4 ">

        <div className="col mt-3">
        <Typography display="inline" variant="body2" color="textSecondary">
          Muro Ordenado por
      </Typography>
        <Chip color="primary" size="small" label="Fecha" className="ml-4 mr-2" icon={<DateRangeIcon />} />
        <Chip color="default" size="small" label="Reacciones" className="ml-2 mr-2" icon={<DynamicFeedIcon />} />

        </div>
      </div>
    )
}