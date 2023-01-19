import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const itemsMarkup = createGallery(galleryItems);

function createGallery(items) {
    return items.map(({original, preview, description}) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
        </div>`
    }).join('');
}

galleryContainer.innerHTML = itemsMarkup;