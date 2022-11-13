import { url } from './config.js';

export async function loadResource(uri) {
  try {
    let picData = null;

    let resp = await fetch(url + uri, {
      credentials: 'include',
    });
    if (resp.ok) {
      picData = await resp.json();

      return picData;
    } else {
      return Promise.reject(new Error(resp.statusText));
    }
  } catch (err) {
    console.log(err);
  }
}
