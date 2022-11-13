import { load } from './gallery.js';
import { display_galerie } from './gallery_ui';

document.querySelector('#load_gallery').addEventListener('click', async (e) => {
  const gallery = await load();
  display_galerie(gallery);
});
