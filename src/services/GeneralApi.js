import {URL_BASE,URL_BASE_LINK_PREVIEW} from '../config/api/settings';
import {getTokenSplash} from '../config/api/tokenLogin';

export async function request(url, method, data) {
  const response = await fetch(`${URL_BASE.prod}${url}`, {
    method,
    headers: {
     Authorization: getTokenSplash() ?'Bearer ' +getTokenSplash() : undefined,
      Accept: "application/JSON",
      "Content-Type": "application/JSON",
    },
    body: data ? JSON.stringify(data) : undefined,
  });
 const response_json =await response.json();
 return response_json;
}


export async function requestPrevieURL(urlPreview){
  var data = {key: URL_BASE_LINK_PREVIEW.API_KEY, q: urlPreview}
 const response= await fetch(URL_BASE_LINK_PREVIEW.URL, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(data),
  })
  const response_json =await response.json();
  return response_json;

}


export async function requestFormData(url, method, data) {
  const response = await fetch(`${URL_BASE.prod}${url}`, {
    method,
    headers: {
     Authorization: getTokenSplash() ?'Bearer ' +getTokenSplash() : undefined,
     // Accept: "application/JSON",
  //    "Content-Type": "application/JSON",
    },
    body: data 
  });
 const response_json =await response.json();
 return response_json;
}
