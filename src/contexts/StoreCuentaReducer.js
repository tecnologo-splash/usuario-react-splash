const ACTIONS = {
    ACTIVAR_CUENTA: 'activar_cuenta',
    MENSAJE_ACTIVAR_CUENTA: 'mensaje_activar_cuenta',
    MENSAJE_FORGOT_PASSWD: 'mensaje_forgot_passwd',
    REENVAR_CODIGO: 'reenviar_codigo_activacion',
    SET_DATA: 'actualizar_perfil',
    LAODING:'cargando',

}
const initialStateCuenta = {
    forgotPassdd: {
        correo: '',
        codigo: '',
        new_passwd: ''
    },
    activarCuenta: {
        usuario_correo: '',
        codigo_activacion: ''
    },
    mensajeForgotPasswd: {
        mensaje: '',
        tipo_mensaje: ''
    },
    mensajeActivarCuenta: {
        mensaje: '',
        tipo_mensaje: ''
    },
    userInfo: {
        apellido: "",
        biografia: "",
        correo: "",
        fecha_nacimiento: "",
        genero: "",
        nombre: "",
        url_perfil: "",
        usuario: "",
        id:"",
    }
};
const storeReducerCuenta = (state, action) => {

    switch (action.type) {
        case ACTIONS.ACTIVAR_CUENTA:
            return {
                ...state,
                //loading: action.payload,
            }
        case ACTIONS.MENSAJE_ACTIVAR_CUENTA:
            return {
                ...state,
                //mensaje: action.payload,
            }

        case ACTIONS.MENSAJE_FORGOT_PASSWD:
            return {
                ...state,
               // mensaje: action.payload,
            }
        case ACTIONS.REENVAR_CODIGO:
            return {
                ...state,
             //   mensaje: action.payload,
            }

        case ACTIONS.SET_DATA:
            return {
                ...state,
                userInfo: action.payload,
            }
            

        default:
            return new Error(`Accion ${action.type} no definida`);
    }
}
export { ACTIONS, storeReducerCuenta, initialStateCuenta }
