import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const galleryEl = document.querySelector('.gallery');

const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`
  )
  .join('');

galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);

const lightbox = new SimpleLightbox('.gallery__item a', {
  captions: true,
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

galleryEl.addEventListener('keydown', event => {
  if (event.code === 'Escape') {
    lightbox.close();
  }
});
//console.log(galleryItems);
