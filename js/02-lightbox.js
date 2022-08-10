import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');


galleryContainer.insertAdjacentHTML('beforeend', createGalleryCardsItems(galleryItems))


function createGalleryCardsItems(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
   return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    })
    .join('');
}

let lightbox = new SimpleLightbox(".gallery a", {
 captionsData: "alt",
 captionDelay: 250,
});



