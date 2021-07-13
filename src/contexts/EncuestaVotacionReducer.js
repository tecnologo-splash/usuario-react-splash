const ACTIONS = {
    VOTAR:'votar',
    ESTADO_ENCUESTA:'estado_encuesta',
    DATOS_ENCUESTA:'datos_encuesta',
    MENSAJE_ERROR:'mensaje_error'

}
const initialState= {

    encuesta: [],
    totalVotos:0,
    porcentaje:{},
    votada:null,
    encuestaActiva:{
        estado:null,
        fechaCierre:null
    },
    mensajeError:''
};
const EncuestaVotacionReducer = (state, action) => {
   // console.log("-->",action.payload);
    switch (action.type) {
        case ACTIONS.VOTAR:
            return{
                ...state,
                votada:action.payload,
               // totalVotos:this.totalVotos+1
            }
            case ACTIONS.ESTADO_ENCUESTA:
            return{
                ...state,
                encuestaActiva:action.payload,
            }

              case ACTIONS.DATOS_ENCUESTA:
                return{
                    ...state,
                    encuesta:action.payload,
                    mensajeError:''
             }
             case ACTIONS.MENSAJE_ERROR:
                return{
                    ...state,
                    mensajeError:action.payload,
             }
             
        default:
            return new Error(`Accion ${action.type} no definida`);
    }
}
export { ACTIONS, EncuestaVotacionReducer, initialState }
