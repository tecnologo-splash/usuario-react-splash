
const NOMBRE_TOKEN="splashToken";

export const saveTokenSplash=({token})=>{
    window.sessionStorage.setItem(NOMBRE_TOKEN, token);
}
export const getTokenSplash=()=>{
  return  sessionStorage.getItem(NOMBRE_TOKEN);
}

export const logoutSplash=()=>{
  sessionStorage.removeItem(NOMBRE_TOKEN);
}