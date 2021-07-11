const ACTIONS = {
    AMIGOS:'amigos',
    CARGANDO:'carando',
    PAGINACION:'pagiancion',
    FOLLOW:'follow'

}
const initialStateAmigos = {

    amigos: [],
    paginacion:0,
    cargando:true,
    lo_sigo:null
};
const SugerenciasAmigosReducer = (state, action) => {

    switch (action.type) {
        case ACTIONS.AMIGOS:
            return{
                ...state,
                amigos:action.payload,
                cargando:false
            }
            case ACTIONS.PAGINACION:
            return{
                ...state,
                paginacion:action.payload,
                cargando:false
            }
            case ACTIONS.CARGANDO:
                return{
                    ...state,
                    cargando:action.payload,
                }
              case ACTIONS.FOLLOW:
                    return{
                        ...state,
                        lo_sigo:action.payload,
             }
        default:
            return new Error(`Accion ${action.type} no definida`);
    }
}
export { ACTIONS, SugerenciasAmigosReducer, initialStateAmigos }
