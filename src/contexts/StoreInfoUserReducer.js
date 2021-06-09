const ACTIONS = {
    GET_DATA: 'obtener_datos',
    SET_DATA: 'setear_datos',
    CLEAN_DATA: 'borrar_datos',
}
const initialState = {
    datos: {
        apellido: "",
        biografia: "",
        correo: "",
        fecha_nacimiento: "",
        genero: "",
        nombre: "",
        url_perfil: "",
        usuario: "",
    }
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
        default:
            return new Error(`Accion ${action.type} no definida`);
    }
}
export { ACTIONS, storeReducer, initialState }
