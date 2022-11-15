
const lightboxContainer = document.getElementById("lightbox_container");
const lightboxClose = document.getElementById("lightbox_close");
const lightboxTitle = document.getElementById("lightbox_title");
const lightboxFullImg = document.getElementById("lightbox_full_img");

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
    lightboxTitle.innerHTML = data.photo.titre
    lightboxFullImg.src = `https://webetu.iutnc.univ-lorraine.fr${data.photo.url.href}`
    lightboxView.show()
}