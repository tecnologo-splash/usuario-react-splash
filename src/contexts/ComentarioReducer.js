const ACTIONS = {
    COMENTARIOS:'comentarios',

}
const initialStateCuenta = {

    coments: []
};
const ComentarioReducer = (state, action) => {

    switch (action.type) {
        case ACTIONS.COMENTARIOS:
            return{
                ...state,
                coments:action.payload,

            }
     
        default:
            return new Error(`Accion ${action.type} no definida`);
    }
}
export { ACTIONS, ComentarioReducer, initialStateCuenta }
