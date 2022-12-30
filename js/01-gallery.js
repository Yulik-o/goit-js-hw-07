import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");
galleryEl.addEventListener("click", onImageClick);

function createMarkup (array) {
const markup = array.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
    <li>
    <a class="gallery__link" href="${original}">
     <img
      class="gallery__image"
      src="${preview}"
      data-source = "${original}"
      alt="${description}"
    />
  </a>
  </li>
  </div>`;
  }).join("");
galleryEl.innerHTML = markup; 
}
createMarkup(galleryItems);

function onImageClick (event) {
  event.preventDefault();
  if (event.target.nodeNome !== "IMG") {
    return
  }
  const { source } = event.target.dataset;
  

  const instance = basicLightbox.create(`<img src="${source}">`)
  
  instance.show();
  // function onEscape(event) {
  //   if (event.code === "Escape") {
  //     instance.close();
  //   }
  // }
}



console.log(galleryItems);
