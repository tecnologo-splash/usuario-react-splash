const ACTIONS = {
    LOGIN: 'login',
    MENSAJE_ERROR: 'mensaje_error',
    ACTIVAR_CUENTA_MODAL: 'activar_cuenta_modal',
    LOADING: 'cargando',
    REGISTRO: 'registro',
}
const initialState = {
    credenciales: {
        usuario: '',
        passwd: ''
    },
    registro: {
        nombre: '',
        apellido: '',
        usuario: '',
        email: '',
        passwd: '',
        geneero: '',
        fechaNacimiento: ''
    },
    loading: false,
    mensaje: '',
    modalActivarCuenta: false
};
const storeReducer = (state, action) => {

    switch (action.type) {
        case ACTIONS.LOADING:
            return {
                ...state,
                loading: action.payload,
            }
        case ACTIONS.MENSAJE_ERROR:
            return {
                ...state,
                mensaje: action.payload,
            }
        case ACTIONS.ACTIVAR_CUENTA_MODAL:
            return {
                ...state,
                modalActivarCuenta: action.payload,
            }
        case ACTIONS.LOGIN:
            return {
                ...state,
                credenciales: action.payload,
            }
        case ACTIONS.REGISTRO:
            return {
                ...state,
                registro: action.payload,
            }
        default:
            return new Error(`Accion ${action.type} no definida`);
    }
}
export { ACTIONS, storeReducer, initialState }
