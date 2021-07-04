const ACTIONS = {
    LISTAMENSAJES:'lista-mensajes',
    CONVERSACIONES:'conversaciones',
    CHATID:'chat-id',
    CONVHEADER:'conv-header',

}
const initialState = {

    conversaciones: [],
    lstMensajes:[],
    chatIdSelected:null,
    convHeader:{}

};
const ChatReducer = (state, action) => {

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
        case ACTIONS.CONVERSACIONHEADER:
            return{
                ...state,
                convHeader:action.payload,
            }
                   
                
        default:
            return new Error(`Accion ${action.type} no definida`);
    }
}
export { ACTIONS, ChatReducer, initialState }
