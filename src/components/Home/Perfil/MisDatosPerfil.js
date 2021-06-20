import React from 'react';
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';
import HelpIcon from '@material-ui/icons/Help';
import Tooltip from '@material-ui/core/Tooltip';


export function MisDatosPersonales({ data }) {
    return (
        <div >
            <hr />
            <Typography variant="h6" className="d-flex justify-content-center mb-3">
                ¿Quien soy?
         </Typography>
            <div>
                {data.biografia}
            </div>
            <hr />

            <Typography variant="h6" className="d-flex justify-content-center mb-3">
                Mis Datos
          <Badge badgeContent={
                    <Tooltip title="Solo tu podrias ver estos datos">
                        <HelpIcon fontSize="small" color="disabled" />
                    </Tooltip>
                } >
                </Badge>
            </Typography>
            <div className="col-md-12 row mb-2">
                <Typography variant="body2" gutterBottom > <b>Fecha Nacimiento:</b> {data.fecha_nacimiento}
                </Typography>
            </div>
            <div className="col-md-12 row mb-2">
                <Typography variant="body2" gutterBottom>
                    <b>Email : </b> {data.correo}
                </Typography>
            </div>
            <div className="col-md-12 row mb-2">
                <Typography variant="body2" gutterBottom><b> Genero: </b> {data.genero !== null ? data.genero : "?"}</Typography>
            </div>

        </div>
    )
}

