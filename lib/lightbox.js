import {loadResource} from './photoloader.js'
import {display_lightbox} from './lightbox_ui.js'

export async function load(node){
    const response = await loadResource(node.dataset.uri);
    display_lightbox(response)
}