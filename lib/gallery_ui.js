import { load_lightBox } from './lightbox.js';

const galleryContainer = document.getElementById('gallery_container');

export async function display_galerie(galerie) {
  let html = '';
  galerie.forEach((photo) => {
    html += `<div class="vignette">
        <img data-uri="${photo.links.self.href}"
             src="https://webetu.iutnc.univ-lorraine.fr${photo.photo.thumbnail.href}">
        </div>`;
  });
  galleryContainer.innerHTML = html;

  const domArray = document.querySelectorAll('div.vignette');
  domArray.forEach((img) => {
    img.addEventListener('click', () => {
      load_lightBox(img.lastElementChild);
    });
  });
}
