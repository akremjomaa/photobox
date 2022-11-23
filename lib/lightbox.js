import { loadResource } from './photoloader.js';
import { display_lightbox } from './lightbox_ui.js';
let currentElement = null;
export async function load(node) {
  currentElement = node.parentElement;
  const response = await loadResource(node.dataset.uri);

  display_lightbox(response);
}
export async function next() {
  if (currentElement.nextElementSibling === null) {
    let parent = currentElement.parentElement;
    load(parent.firstElementChild.firstElementChild);
  } else {
    load(currentElement.nextElementSibling.firstElementChild);
  }
}
export async function prev() {
  if (currentElement.previousElementSibling === null) {
    let parent = currentElement.parentElement;
    load(parent.lastElementChild.firstElementChild);
  }
  load(currentElement.previousElementSibling.firstElementChild);
}
