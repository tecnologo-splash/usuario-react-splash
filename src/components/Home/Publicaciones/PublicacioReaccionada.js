import React from 'react';
import { emojis } from '../../../util/emojis';
import { Tooltip } from '@material-ui/core';
export function PublicacionReaccionada({ resumen_reaccion }) {
    const {mi_reaccion}=resumen_reaccion;
    return (
        <>
            {resumen_reaccion.cantidad_me_gusta !== 0 ?
                <Imagen emoji={emojis[0].img}
                nombre="Me Gusta"
                    cantidad={resumen_reaccion.cantidad_me_gusta}
                    mi_reaccion={mi_reaccion}
                    /> : ""}

            {resumen_reaccion.cantidad_me_enoja !== 0 ? <Imagen emoji={emojis[3].img}
                cantidad={resumen_reaccion.cantidad_me_enoja}    mi_reaccion={mi_reaccion}
                nombre="Me Enoja"
                /> : ""}

            {resumen_reaccion.cantidad_no_me_gusta !== 0 ?
                <Imagen emoji={emojis[1].img}
                nombre="No Me Gusta"
                    cantidad={resumen_reaccion.cantidad_no_me_gusta}    mi_reaccion={mi_reaccion}/>

                : ""}
            {resumen_reaccion.cantidad_me_divierte !== 0 ?

                <Imagen emoji={emojis[2].img}
                    cantidad={resumen_reaccion.cantidad_me_divierte}   mi_reaccion={mi_reaccion} 
                    nombre="Me Divierte"
                    />

                : ""}
            {resumen_reaccion.cantidad_no_me_interesa !== 0 ?
                <Imagen emoji={emojis[4].img}
                nombre="No Me Interesa"
                    cantidad={resumen_reaccion.cantidad_no_me_interesa}    mi_reaccion={mi_reaccion}/>

                : ""}
        </>
    )
}

export function Imagen({ emoji, cantidad, mi_reaccion,nombre }) {
    const claseCss=mi_reaccion!==null ? "img-thumbnail" : "";
    return (
        <>
        <Tooltip title={nombre+" "+cantidad} >
            <img src={emoji} alt="img" height="30px"  width="30px"  className={"mt-3 mb-1 mr-2 "+claseCss }/>
        </Tooltip>
        
        </>
    )
}