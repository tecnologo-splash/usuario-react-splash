const ACTIONS = {
    ACTIVAR_CUENTA: 'activar_cuenta',
    MENSAJE_ACTIVAR_CUENTA: 'mensaje_activar_cuenta',
    MENSAJE_FORGOT_PASSWD: 'mensaje_forgot_passwd',
    REENVAR_CODIGO: 'reenviar_codigo_activacion',
    SET_DATA: 'actualizar_perfil',
    LAODING: 'cargando',
    ACTIVAR_CUENTA_MODAL: 'activar_cuenta_modal',
    SET_FORGOT_PASSWD:'set-forgot-passwd',
    ATUALIZACION_PASSWD_EXITO:'actualizacion-passwd-exito',
}
const initialStateCuenta = {
    modalActivarCuenta: false,
    forgotPasswd: {
        correo: '',
        codigo: '',
        new_passwd: ''
    },
    codigo_activacion: '',
    mensajeForgotPasswd: {
        mensaje: '',
        tipo_mensaje: ''
    },
    mensajeActivarCuenta: {
        mensaje: '',
        tipo_mensaje: '',
        buttonReenviar:false,
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
        id: "",
    }
};
const storeReducerCuenta = (state, action) => {

    switch (action.type) {
        case ACTIONS.ATUALIZACION_PASSWD_EXITO:
            return{
                ...state,
                forgotPasswd:[],
                mensajeForgotPasswd:[]

            }
        case ACTIONS.ACTIVAR_CUENTA:
            return{
                ...state,
                codigo_activacion:action.payload
            }

        case ACTIONS.SET_FORGOT_PASSWD:
            return{
                ...state,
                forgotPasswd:action.payload
            }

        case ACTIONS.MENSAJE_ACTIVAR_CUENTA:
            return {
                ...state,
                mensajeActivarCuenta: action.payload,
            }

        case ACTIONS.MENSAJE_FORGOT_PASSWD:
            return {
                ...state,
                mensajeForgotPasswd: action.payload,
            }
        case ACTIONS.REENVAR_CODIGO:
            return {
                ...state,
                  mensajeActivarCuenta: action.payload,
            }
            
        case ACTIONS.ACTIVAR_CUENTA_MODAL:
            return {
                ...state,
                modalActivarCuenta: action.payload,
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
