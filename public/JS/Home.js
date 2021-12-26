let carousel_mainText = document.querySelector("#carousel-mainText");
let carousel_secondaryText = document.querySelector("carousel-secondaryText");
let carousel_id = 0;

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
