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
export let data = undefined;
document.querySelector('#load_gallery').addEventListener('click', async () => {
  data = await load();
  display_galerie(data.photos);
});
nextButton.addEventListener('click', async () => {
  data = await next(data);
  display_galerie(data.photos);
});

prevButton.addEventListener('click', async () => {
  data = await prev(data);
  display_galerie(data.photos);
});
firstButton.addEventListener('click', async () => {
  data = await load();
  data = await loadResource(data.links.first.href);
  display_galerie(data.photos);
});
lastButton.addEventListener('click', async () => {
  data = await load();
  data = await loadResource(data.links.last.href);
  display_galerie(data.photos);
});


