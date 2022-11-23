import { loadResource } from './photoloader.js';
import { display_lightbox } from './lightbox_ui.js';
import {display_galerie} from "./gallery_ui.js";
//import {data as dataGlobal} from  "./photobox.js"
import {dataGlobal, setDataGlobal} from  "./photobox.js"
import {next as nextGalery, prev as prevGalery} from "./gallery.js"

//let dataForLightbox = undefined

let currentElement = null;

const sendComment = document.getElementById('valid-comment');
const formPseudo = document.getElementById('pseudo');
const formTitre = document.getElementById('titre');
const formMessage = document.getElementById('message');

//https://webetu.iutnc.univ-lorraine.fr/www/canals5/phox/api/photos/6/comments/?&size=100
export async function load(node){
    currentElement = node.parentElement;
    const dataImg = await loadResource(node.dataset.uri);
    const commentsImg = await loadResource(`${node.dataset.uri}/comments`)
    const allCommentsImg = await loadResource(`${node.dataset.uri}/comments/?&size=${commentsImg.count}`)
    const data = {
        img: dataImg,
        comments: allCommentsImg.comments
    }

    const idImg = dataImg.photo.id

    sendComment.addEventListener('click',()=>{
        addComment(idImg,formPseudo.value,formTitre.value,formMessage.value)
    })

    display_lightbox(data)
}

export async function addComment(id,pseudo,title,message){
    console.log(id,pseudo,title,message)
    postData(`https://webetu.iutnc.univ-lorraine.fr/www/canals5/phox/api/photos/${id}/comments`, {
        "titre"       : title,
        "content"     : message,
        "pseudo"      : pseudo
    })
        .then((data) => {
            console.log(data); // JSON data parsed by `data.json()` call
        }).catch(console.log);
}

async function postData(url = '', data = {}) {

    const response = await fetch(url, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    });
    return response.json();
}

export async function next() {
  if (currentElement.nextElementSibling === null) {

      let nextDataGlobal = await nextGalery(dataGlobal)

      if(dataGlobal.links.next.href === nextDataGlobal.links.next.href && dataGlobal.links.prev.href === nextDataGlobal.links.prev.href) {
          console.log("Il n'y a rien après")
      } else {
          setDataGlobal(nextDataGlobal)
          display_galerie(dataGlobal.photos);
          const tr = document.getElementById("gallery_container");
          const firstVignette = tr.firstChild;
          load(firstVignette.lastElementChild);
      }


  } else {
    load(currentElement.nextElementSibling.firstElementChild);
  }
}
export async function prev() {
  if (currentElement.previousElementSibling === null) {

      let nextDataGlobal = await prevGalery(dataGlobal)

      if(dataGlobal.links.prev.href === nextDataGlobal.links.prev.href && dataGlobal.links.next.href === nextDataGlobal.links.next.href){
          console.log("Il n'y a rien avant")
      } else {
          setDataGlobal(nextDataGlobal)
          display_galerie(dataGlobal.photos);
          const tr = document.getElementById("gallery_container");
          const lastVignette = tr.lastChild;
          load(lastVignette.lastElementChild);
      }

  }else{
      load(currentElement.previousElementSibling.firstElementChild);
  }
}

