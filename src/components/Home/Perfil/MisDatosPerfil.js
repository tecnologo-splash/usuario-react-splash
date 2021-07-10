import React from 'react';
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';
import HelpIcon from '@material-ui/icons/Help';
import Tooltip from '@material-ui/core/Tooltip';
import Skeleton from '@material-ui/lab/Skeleton';


export function MisDatosPersonales({ data,loading }) {
    return (
        <div >
            <hr />
            <Typography variant="h6" className="d-flex justify-content-center mb-3">
                ¿Quién soy?
         </Typography>
            <div>
                {loading ?   <Skeleton width={350}  height={100} />:data.biografia}
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
                <Typography variant="body2" gutterBottom > <b>Fecha de nacimiento:</b> { loading ?<Skeleton width={50}  height={20} />:data.fecha_nacimiento}
                </Typography>
            </div>
            <div className="col-md-12 row mb-2">
                <Typography variant="body2" gutterBottom>
                    <b>Email : </b> {loading ? <Skeleton width={50}  height={20} />:data.correo}
                </Typography>
            </div>
            <div className="col-md-12 row mb-2">
                <Typography variant="body2" gutterBottom><b> Género: </b>
                {
                    loading ? <Skeleton width={50}  height={20} />
                    :
                    data.genero !== null ? data.genero : "?"
                }</Typography>
            </div>

        </div>
    )
}

