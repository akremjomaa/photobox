export function createGalleryDomElement(galleryPhoto) {
  const divElement = document.createElement('div');
  divElement.className = 'vignette';
  divElement.innerHTML = `<img data-uri="${galleryPhoto.links.self.href}" src="https://webetu.iutnc.univ-lorraine.fr/${galleryPhoto.photo.thumbnail.href}">`;

  return divElement;
}
export function display_galerie(photos = []) {
  const container = document.getElementById('gallery_container');
  container.innerHTML = '';
  photos.forEach((galleryItem) => {
    const galleryCard = createGalleryDomElement(galleryItem);
    container.appendChild(galleryCard);
  });
}
