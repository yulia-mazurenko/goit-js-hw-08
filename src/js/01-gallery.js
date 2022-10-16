import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galeryContainerRef = document.querySelector('.gallery');
const galeryMarkup = createGalleryImagesMarkup(galleryItems);

galeryContainerRef.insertAdjacentHTML('beforeend', galeryMarkup);


function createGalleryImagesMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
        `
}).join('')
             
}


let lightbox = new SimpleLightbox('.gallery a', {
    
    captionsData: "alt",
    captionDelay: 250,
})