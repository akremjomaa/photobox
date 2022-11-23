import { load, next, prev } from './gallery.js';
import { display_galerie } from './gallery_ui.js';
import { loadResource } from './photoloader.js';

const nav = document.querySelector('.nav');
const firstButton = document.createElement('button');
const firstbtnText = document.createTextNode('first');



firstButton.className = 'first';
firstButton.appendChild(firstbtnText);

nav.appendChild(firstButton);
const lastButton = document.createElement('button');
const lastbtnText = document.createTextNode('last');
lastButton.appendChild(lastbtnText);

lastButton.className = 'last';
nav.appendChild(lastButton);

const nextButton = document.getElementById('next');
const prevButton = document.getElementById('previous');

export let dataGlobal = undefined;
export function setDataGlobal(value) {
  dataGlobal = value;
}

document.querySelector('#load_gallery').addEventListener('click', async () => {
  setDataGlobal(await load())
  display_galerie(dataGlobal.photos);
});
nextButton.addEventListener('click', async () => {
  setDataGlobal(await next(dataGlobal))
  display_galerie(dataGlobal.photos);
});

prevButton.addEventListener('click', async () => {
  setDataGlobal(await prev(dataGlobal))
  display_galerie(dataGlobal.photos);
});
firstButton.addEventListener('click', async () => {
  setDataGlobal(await load())
  setDataGlobal(await loadResource(dataGlobal.links.first.href))
  display_galerie(dataGlobal.photos);
});
lastButton.addEventListener('click', async () => {
  setDataGlobal(await load())
  setDataGlobal(await loadResource(dataGlobal.links.last.href))
  display_galerie(dataGlobal.photos);
});


