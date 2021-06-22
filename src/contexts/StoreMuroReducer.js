const ACTIONS_MURO = {
    CARGANDO: 'cargando',
    OBTENER_DATOS: 'obtener-datos',
    NO_HAY_MAS_DATOS:'no-hay-mas-datos'
  
}
const initialState = {
    cargando:true,
    datos:[],
    utlimosDatos:'',
    page:0,
};
const storeReducer = (state, action) => {

    switch (action.type) {
        case ACTIONS_MURO.CARGANDO:
            return {
                ...state,
                cargando: action.payload,
            }
        case ACTIONS_MURO.OBTENER_DATOS:
            return {
                ...state,
                datos: action.payload,
                cargando:false,
            }
            
        case ACTIONS_MURO.NO_HAY_MAS_DATOS:
            return {
                ...state,
                utlimosDatos: action.payload,
            }
    
        default:
            return new Error(`Accion ${action.type} no definida`);
    }
}
export { ACTIONS_MURO, storeReducer, initialState }
