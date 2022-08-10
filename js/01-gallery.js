import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');


galleryContainer.insertAdjacentHTML('beforeend', createGalleryCardsItems(galleryItems))

galleryContainer.addEventListener('click', ongalleryContainerClick)

function createGalleryCardsItems(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return`<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
  </a>
</div>`;
       })
    .join('');
}


const instance = basicLightbox.create(`
<img src="">
`, {
    onShow: (instance) => {
window.addEventListener("keydown", onCloseImg)
    
    },
    onClose: (instance) => {
        window.removeEventListener("keydown", onCloseImg)
}
})

function ongalleryContainerClick(evt) {

    evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {
        return
    }
    instance.element().querySelector('img').src = evt.target.dataset.source

    instance.show()
    
}

function onCloseImg(evt) {
    if (evt.code === "Escape") {
    instance.close()
   }
   }





