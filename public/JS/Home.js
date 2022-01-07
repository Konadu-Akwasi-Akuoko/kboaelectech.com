let carousel_mainText = document.querySelector("#carousel-mainText");
let carousel_secondaryText = document.querySelector("carousel-secondaryText");
let carousel_id = 0;

let menuButton = document.querySelector("#menu-button");
//This toggles the header gap, otherwise it'll be always visible.
let headerGapT = document.querySelector("#header-gap-toggle");
let headerNavigation = document.querySelector("#header-nav");
let menuToggle = false;

// Social icons
let whatsappIcon = document.querySelector("#whatsapp-icon");
let gmailIcon = document.querySelector("#gmail-icon");
let callIcon = document.querySelector("#call-icon");
let instagramIcon = document.querySelector("#instagram-icon");

let windowWidth = window.innerWidth;

const mainTestimonies = [
  `“KBoa Elec-Tech is a great organization. The team really informed me about the best decision for me and they went every extra mile in the installation stage!” 01`,
  `“KBoa Elec-Tech is a great organization. The team really informed me about the best decision for me and they went every extra mile in the installation stage!” 02`,
  `“KBoa Elec-Tech is a great organization. The team really informed me about the best decision for me and they went every extra mile in the installation stage!” 03`,
];
const nameOfTestimonials = [`Akwasi Konadu`, `Brooklyn Simmons`, `Kwame Kofi`];

// When the chevron left button is pressed the carousel id is decreased
// by one and the switch statement chooses the a testimony to display.
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

// When the chevron left button is pressed the carousel id is increased
// by one and the switch statement chooses the a testimony to display.
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

// When this function is called it displays the menu or hides the menu
function menuPressed() {
  if (menuToggle === false) {
    // When the menu is pressed the menu button is changed to a cancel button
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
    // When the cancel is pressed the cancel button is changed to a menu button
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

//Change the icon sizes to 24px on small devices.
function changeIconOnSmDevice() {
  if (windowWidth < 640) {
    whatsappIcon.innerHTML = `<span
    class="iconify"
    data-icon="akar-icons:whatsapp-fill"
    style="color: white; font-size: 38px"
    ></span>`;
    gmailIcon.innerHTML = `<span
    class="iconify"
    data-icon="mdi:gmail"
    style="color: white; font-size: 38px"
    ></span>`;
    callIcon.innerHTML = `<span
    class="iconify"
    data-icon="fluent:call-32-regular"
    style="color: #fff; font-size: 38px"
    ></span>`;
    instagramIcon.innerHTML = `<span
    class="iconify"
    data-icon="ant-design:instagram-outlined"
    style="color: #fff; font-size: 38px"
    ></span>`;
  }
}
