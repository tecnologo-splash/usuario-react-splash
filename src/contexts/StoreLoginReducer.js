const ACTIONS = {
    LOGIN: 'login',
    MENSAJE_ERROR: 'mensaje_error',
    LOADING: 'cargando',
    REGISTRO: 'registro',
    MENSAJE_ERROR_REGISTRO: 'mensaje_error_registro',
    REGISTRO_EXITOSO: 'registro_exitoso',
    LOGIN_EXITOSO:'login-exitoso',
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
        correo: '',
        clave: '',
        genero: null,
        fecha_nacimiento: ''
    },
    loading: false,
    mensaje: '',
    mensajeErrorRegistro: ''
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
        case ACTIONS.MENSAJE_ERROR_REGISTRO:
            return {
                ...state,
                mensajeErrorRegistro: action.payload,
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
        case ACTIONS.REGISTRO_EXITOSO:
            return {
                ...state,
                registro: [],
                mensajeErrorRegistro: '',
            }
            case ACTIONS.LOGIN_EXITOSO:
                return {
                    ...state,
                    mensaje: '',
                    credenciales:[]
                }
    
        default:
            return new Error(`Accion ${action.type} no definida`);
    }
}
export { ACTIONS, storeReducer, initialState }
