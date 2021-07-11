const ACTIONS = {
    REACCIONAR:'reaccionar',

}
const initialStateCuenta = {

    reacciones: []
};
const AccionesReducer = (state, action) => {

    switch (action.type) {
        case ACTIONS.REACCIONAR:
            return{
                ...state,
                reacciones:action.payload,

            }
     
        default:
            return new Error(`Accion ${action.type} no definida`);
    }
}
export { ACTIONS, AccionesReducer, initialStateCuenta }
