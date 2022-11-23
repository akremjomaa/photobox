import {loadResource} from './photoloader.js'
import {display_lightbox} from './lightbox_ui.js'

const sendComment = document.getElementById('valid-comment');
const formPseudo = document.getElementById('pseudo');
const formTitre = document.getElementById('titre');
const formMessage = document.getElementById('message');

//https://webetu.iutnc.univ-lorraine.fr/www/canals5/phox/api/photos/6/comments/?&size=100
export async function load(node){
    const dataImg = await loadResource(node.dataset.uri);
    const commentsImg = await loadResource(`${node.dataset.uri}/comments`)
    const allCommentsImg = await loadResource(`${node.dataset.uri}/comments/?&size=${commentsImg.count}`)
    const data = {
        img: dataImg,
        comments: allCommentsImg.comments
    }
    console.log(dataImg)

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


