import {loadResource} from './photoloader.js'
import {display_galerie} from './gallery_ui.js'
export async function load(url){
    const response = await loadResource(url);
    const gallery = await response.photos;
    display_galerie(gallery)
}

