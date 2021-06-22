import {URL_BASE} from '../config/api/settings';
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
