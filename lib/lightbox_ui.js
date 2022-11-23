const lightboxContainer = document.getElementById("lightbox_container");
const lightboxClose = document.getElementById("lightbox_close");
const lightboxTitle = document.getElementById("lightbox_title");
const lightboxFullImg = document.getElementById("lightbox_full_img");
const lightboxResol = document.getElementById("lightbox_resol");
const lightboxDesc = document.getElementById("lightbox_desc");
const lightboxComments = document.getElementById("lightbox-comments");

const lightboxView = {
    hide() {
        lightboxContainer.classList.remove('lightbox_container--visible');
        lightboxContainer.classList.add('lightbox_container--hidden');
    },
    show() {
        lightboxContainer.classList.remove('lightbox_container--hidden');
        lightboxContainer.classList.add('lightbox_container--visible');
    },
}

lightboxClose.addEventListener('click',() => {
    lightboxView.hide()
})

export function display_lightbox( data ){

    let htmlComments = "";
    data.comments.forEach( comment =>{
            htmlComments += `
                <div class="commentaire">
                    <div>
                       <h4><span class="bold">${comment.titre}</span></h4>
                        <span>De ${comment.pseudo}</span>
                    </div>
                    <p>${comment.content}</p>
                </div>`;
        }
    )
    lightboxComments.innerHTML = htmlComments;
    lightboxTitle.innerHTML = data.img.photo.titre;
    lightboxFullImg.src = `https://webetu.iutnc.univ-lorraine.fr${data.img.photo.url.href}`;
    lightboxResol.innerHTML = `Format: ${data.img.photo.format} ,Résolution: ${data.img.photo.width}*${data.img.photo.width}`;
    lightboxDesc.innerHTML = data.img.photo.descr;
    lightboxView.show()
}