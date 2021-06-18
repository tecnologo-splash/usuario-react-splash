import React from 'react';
import { emojis } from '../../../util/emojis';
import { Tooltip } from '@material-ui/core';
export function PublicacionReaccionada({ resumen_reaccion }) {
    return (
        <>
            {resumen_reaccion.cantidad_me_gusta !== 0 ?
                <Imagen emoji={emojis[0].img}
                    cantidad={resumen_reaccion.cantidad_me_gusta} /> : ""}

            {resumen_reaccion.cantidad_me_enoja !== 0 ? <Imagen emoji={emojis[3].img}
                cantidad={resumen_reaccion.cantidad_me_enoja} /> : ""}

            {resumen_reaccion.cantidad_no_me_gusta !== 0 ?
                <Imagen emoji={emojis[1].img}
                    cantidad={resumen_reaccion.cantidad_no_me_gusta} />

                : ""}
            {resumen_reaccion.cantidad_me_divierte !== 0 ?

                <Imagen emoji={emojis[2].img}
                    cantidad={resumen_reaccion.cantidad_me_divierte} />

                : ""}
            {resumen_reaccion.cantidad_no_me_interesa !== 0 ?
                <Imagen emoji={emojis[4].img}
                    cantidad={resumen_reaccion.cantidad_no_me_interesa} />

                : ""}
        </>
    )
}

export function Imagen({ emoji, cantidad }) {
    return (
        <>
        <Tooltip title={cantidad} >
            <img src={emoji} alt="img" height="25px"  className="mt-3 mb-1 mr-2"/>
        </Tooltip>
        </>
    )
}