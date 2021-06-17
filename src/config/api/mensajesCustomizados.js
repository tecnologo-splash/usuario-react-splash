export function mensajesCustomizados(mensaje_api){
   
const MENSAJES_CUSTOM={
   CREDENCIALES_INVALIDAS:'Usuario y/o Contraseña incorrecta',
   PARAMETRO_INAVALIDO:'Error, datos inválidos',
   CAMPOS_OBLIGATORIOS:'Error, debe ingresar campos obligatorios',
   USUARIO_PENDIENTE_ACTIVACION:"Ingresar codigo de verificacion para poder continuar",
   CORREO_YA_EXISTE:"El correo ya esta en uso",
   CODIGO_INVALIDO:'Codigo de Activacion Invalido'
}

const DEFAULT_ERROR="Error desconocido";

return MENSAJES_CUSTOM[mensaje_api] || DEFAULT_ERROR;

}