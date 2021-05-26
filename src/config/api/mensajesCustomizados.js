export function mensajesCustomizados(mensaje_api){
const MNESAJES_CUSTOM={
   CREDENCIALES_INVALIDAS:'Error Usuario y/o Contraseña',
   PARAMETRO_INAVALIDO:'Error, datos invalidos'
}

const DEFAULT_ERROR="Error desconocido";

return MNESAJES_CUSTOM[mensaje_api] || DEFAULT_ERROR;

}