import '../css/common.css'
import '../css/01-gallery.css'

// Описаний в документації
import SimpleLightbox from "simplelightbox";

// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
//console.log(galleryContainer);

const galleryCardMarkup = createImageCardsMarkup(galleryItems);
//console.log(galleryCardMarkup);

galleryContainer.insertAdjacentHTML('beforeend', galleryCardMarkup);

function createImageCardsMarkup(galleryItems) {
  return galleryItems.map(({ preview, original, description }) =>  {
    return `<div>
<a class="gallery__item" href='${original}'>
  <img 
  class="gallery__image"
  src='${preview}' 
  alt='${description}'
  />
</a>
  </div>`;
  })
    .join('');
};

const gallery = new SimpleLightbox('.gallery a', { 
  captionSelector: 'img',
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom'
});