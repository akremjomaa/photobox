import { loadResource } from './photoloader.js';

export async function load(url) {
  const response = await loadResource(url);
  const gallery = await response;
  return gallery;
}

export async function next(data) {
  const resource = await loadResource(data.links.next.href);
  return resource;
}
export async function prev(data) {
  const resource = await loadResource(data.links.prev.href);
  return resource;
}
