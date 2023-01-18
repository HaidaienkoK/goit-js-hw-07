import { galleryItems } from "./gallery-items.js";

// Change code below this line

const imagesContainer = document.querySelector(".gallery");

const cardsImage = createImageCards(galleryItems);
imagesContainer.insertAdjacentHTML("beforeend", cardsImage);

imagesContainer.addEventListener("click", onClickContainerImage);

function createImageCards(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `     
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
  </a>
</div>
    `;
    })
    .join("");
}

function onClickContainerImage(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`);
  instance.show();

  imagesContainer.addEventListener(
    "keydown",
    (event) => {
      if (event.code === "Escape") {
        instance.close();
      }
    },
    { once: true }
  );
}
