import { loadResource } from './photoloader.js';

export async function load(url) {
  const response = await loadResource(url);
  const gallery = await response.photos;
  return gallery;
}
