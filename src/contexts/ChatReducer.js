const ACTIONS = {
    LISTAMENSAJES:'lista-mensajes',
    CONVERSACIONES:'conversaciones',
    CHATID:'chat-id',

}
const initialStateCuenta = {

    conversaciones: [],
    lstMensajes:[],
    chatIdSelected:null

};
const ChatoReducer = (state, action) => {

    switch (action.type) {
        case ACTIONS.CONVERSACIONES:
            return{
                ...state,
                conversaciones:action.payload,
            }

        case ACTIONS.LISTAMENSAJES:
            return{
                ...state,
                lstMensajes:action.payload,
            }
            
        case ACTIONS.CHATID:
            return{
                ...state,
                chatIdSelected:action.payload,
            }
                
        default:
            return new Error(`Accion ${action.type} no definida`);
    }
}
export { ACTIONS, ChatoReducer, initialStateCuenta }
