import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery")

const galleryMarkup = galleryItems.map(({preview, original, description}) =>
`<div class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</div>`).join('')

galleryEl.innerHTML = galleryMarkup;

// console.log(galleryMarkup);


// console.log(galleryItems);
