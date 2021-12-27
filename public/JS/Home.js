let carousel_mainText = document.querySelector("#carousel-mainText");
let carousel_secondaryText = document.querySelector("carousel-secondaryText");
let carousel_id = 0;

let menuButton = document.querySelector("#menu-button");
let headerGapT = document.querySelector("#header-gap-toggle");
let headerNavigation = document.querySelector("#header-nav");
let menuToggle = false;

const mainTestimonies = [
  `“KBoa Elec-Tech is a great organization. The team really informed me about the best decision for me and they went every extra mile in the installation stage!” 01`,
  `“KBoa Elec-Tech is a great organization. The team really informed me about the best decision for me and they went every extra mile in the installation stage!” 02`,
  `“KBoa Elec-Tech is a great organization. The team really informed me about the best decision for me and they went every extra mile in the installation stage!” 03`,
];
const nameOfTestimonials = [`Akwasi Konadu`, `Brooklyn Simmons`, `Kwame Kofi`];

function ChevronLeft() {
  carousel_id--;
  if (carousel_id === -1) {
    carousel_id = 2;
  }

  switch (carousel_id) {
    case 0:
      carousel_mainText.innerText = mainTestimonies[0];
      break;
    case 1:
      carousel_mainText.innerText = mainTestimonies[1];
      break;
    case 2:
      carousel_mainText.innerText = mainTestimonies[2];
  }
  console.log(carousel_id);
}

function ChevronRight() {
  carousel_id++;
  if (carousel_id === 3) {
    carousel_id = 0;
  }

  switch (carousel_id) {
    case 0:
      carousel_mainText.innerText = mainTestimonies[0];
      break;
    case 1:
      carousel_mainText.innerText = mainTestimonies[1];
      break;
    case 2:
      carousel_mainText.innerText = mainTestimonies[2];
  }
  console.log(carousel_id);
}

function menuPressed() {
  if (menuToggle === false) {
    menuButton.innerHTML = `<span class="iconify" data-icon="ep:close-bold" style="color: #f5f3cb;" data-width="24" data-height="24"></span>`;
    if (
      !headerGapT.classList.contains("gap-y-6") &&
      headerNavigation.classList.contains("hidden")
    ) {
      headerGapT.classList.add("gap-y-6");
      headerNavigation.classList.remove("hidden");
    }
    menuToggle = true;
  } else {
    menuButton.innerHTML = `<span class="iconify" data-icon="ant-design:menu-outlined" style="color: #f5f3cb" data-width="24" data-height="24"></span>`;
    if (
      headerGapT.classList.contains("gap-y-6") &&
      !headerNavigation.classList.contains("hidden")
    ) {
      headerGapT.classList.remove("gap-y-6");
      headerNavigation.classList.add("hidden");
    }
    menuToggle = false;
  }
}
