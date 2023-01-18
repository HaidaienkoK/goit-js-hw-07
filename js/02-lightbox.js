import { galleryItems } from './gallery-items.js';

// Change code below this line

const imagesContainer = document.querySelector(".gallery");

const cardsImage = createImageCards(galleryItems);
imagesContainer.insertAdjacentHTML("beforeend", cardsImage);

// imagesContainer.addEventListener("click", onClickContainerImage);

function createImageCards(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
        return `  
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
    `;
    })
    .join("");
}

    (function () {
        var $gallery = new SimpleLightbox(".gallery a", {
          captionType: "attr",
          captionsData: "alt",
          captionPosition: "bottom",
          captionDelay:250,
        });
    })();

