import { loadResource } from './photoloader.js';
import { display_lightbox } from './lightbox_ui.js';
import { load, next } from './gallery.js';
// import { load } from './gallery.js';

let currentElement = null;
let data = await load();
export async function load_lightBox(node) {
  console.log(node);
  currentElement = node.parentElement;
  const response = await loadResource(node.dataset.uri);

  display_lightbox(response);
}
export async function next_lightBox() {
  data = await next(data);
  console.log(data.photos);
  if (currentElement.nextElementSibling === null) {
    let parent = currentElement.parentElement;

    load_lightBox(parent.firstElementChild.firstElementChild);
  } else {
    load_lightBox(currentElement.nextElementSibling.firstElementChild);
  }
}
export async function prev_lightBox() {
  if (currentElement.previousElementSibling === null) {
    let parent = currentElement.parentElement;
    load_lightBox(parent.lastElementChild.firstElementChild);
  }
  load_lightBox(currentElement.previousElementSibling.firstElementChild);
}
