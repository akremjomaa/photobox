import { load } from './gallery.js';
import { display_galerie } from './gallery_ui.js';

let data = undefined;
document.querySelector('#load_gallery').addEventListener('click', async (e) => {
  data = await load();
  display_galerie(data.photos);
});
