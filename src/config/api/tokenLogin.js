
const NOMBRE_TOKEN="splashToken";

export const saveTokenSplash=({token})=>{
    window.localStorage.setItem(NOMBRE_TOKEN, token);
}
export const getTokenSplash=()=>{
  return  localStorage.getItem(NOMBRE_TOKEN);
}

export const logoutSplash=()=>{
  localStorage.removeItem(NOMBRE_TOKEN);
}