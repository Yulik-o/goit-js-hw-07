import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

function createMarkup (array) {
 const markup = array.map(({ preview, original, description }) => {
     return `<a class="gallery__item" href="${original}">
     <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>`;  
}).join("");
galleryEl.innerHTML = markup;
}
createMarkup(galleryItems);
console.log(galleryItems);
