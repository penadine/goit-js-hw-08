// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

galleryItems.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.classList.add('gallery__item');
  
    listItem.innerHTML = `
      <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" data-source="${item.original}">
      </a>
    `;
  
    galleryEl.appendChild(listItem);
  });


  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
  });