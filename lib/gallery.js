import { loadResource } from './photoloader.js';
export async function load() {
  let gallery = await loadResource(`/api/photos/`);
  return gallery;
}
