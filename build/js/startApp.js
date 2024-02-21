export function startApp() {
  createGallery();

  let yearSpan = document.getElementById("year");

  let currentYear = new Date().getFullYear();

  yearSpan.textContent = currentYear;
}

function createGallery() {
  const gallery = document.querySelector(".img-gallery");

  for (let i = 1; i <= 8; i++) {
    const image = document.createElement("picture");
    image.innerHTML = `
            <source srcset="build/imgs/thumb/${i}.webp" type="image/webp">
            <img loading="lazy" width="250" height="250" src="build/imgs/thumb/${i}.jpg">
            `;

    image.onclick = function () {
      showImage(i);
    };

    gallery.appendChild(image);
  }
}

function showImage(id) {
  const image = document.createElement("picture");
  image.innerHTML = `
            <source srcset="build/imgs/big/${id}.webp" type="image/webp">
            <img loading="lazy" src="build/imgs/big/${id}.jpg">
            `;

  // Crear el modal
  const modalImg = document.createElement("div");
  modalImg.appendChild(image);
  modalImg.classList.add("modal-img");

  modalImg.onclick = function () {
    const body = document.querySelector("body");
    body.classList.remove("body-fixed");
    modalImg.remove();
  };

  // Contenedor para botones de control
  const controlBtns = document.createElement("div");
  controlBtns.classList.add("control-btn");

  // Botón para cerrar el modal
  const closeModalBtn = document.createElement("button");
  closeModalBtn.textContent = "x";
  closeModalBtn.classList.add("close-btn", "modal-btn");

  closeModalBtn.onclick = function () {
    const body = document.querySelector("body");
    body.classList.remove("body-fixed");
    modalImg.remove();
  };

  // Botón imagen previa
  const prevButton = document.createElement("button");
  prevButton.innerHTML = '<';
  prevButton.classList.add("modal-btn");

  prevButton.onclick = function () {
    showPrevImage(id);
  };

  // Botón imagen siguiente
  const nextButton = document.createElement("button");
  nextButton.innerHTML = '>';
  nextButton.classList.add("modal-btn");

  nextButton.onclick = function () {
    showNextImage(id);
  };

  modalImg.appendChild(controlBtns);
  controlBtns.appendChild(prevButton);
  controlBtns.appendChild(closeModalBtn);
  controlBtns.appendChild(nextButton);

  // Añadir al HTML
  const body = document.querySelector("body");
  body.appendChild(modalImg);
  body.classList.add("body-fixed");

  // Funciones para carrusel
  function showNextImage(currentId) {
    const nextId = (currentId % 8) + 1;
    showImage(nextId);
  }

  function showPrevImage(currentId) {
    const prevId = ((currentId - 2 + 8) % 8) + 1;
    showImage(prevId);
  }
}