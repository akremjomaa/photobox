import {load} from "./gallery.js";

const galleryContainer = document.getElementById('gallery_container')

export async function display_galerie(galerie){

    let html =''
    galerie.forEach(photo =>{
        html +=
        `<div className="vignette">
        <img data-uri="${photo.links.self.href}"
             src="https://webetu.iutnc.univ-lorraine.fr${photo.photo.thumbnail.href}">
        </div>`
    })
    galleryContainer.innerHTML = html;
}
