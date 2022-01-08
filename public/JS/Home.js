let carousel_mainText = document.querySelector("#carousel-mainText");
let carousel_secondaryText = document.querySelector("carousel-secondaryText");
let carousel_id = 0;

//Animation of phone-menu-button
let fullNavBar = document.querySelector("#full-nav");
let menuButton = document.querySelector("#menu-button");
let headerNavigation = document.querySelector("#header-menu-nav");
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

//Animation-sliding in of phone menu
// When this function is called it displays the menu or hides the menu
function menuPressed() {
  if (menuToggle === false) {
    // When the menu is pressed the menu button is changed to a cancel button
    menuButton.innerHTML = `<span class="iconify" data-icon="ep:close-bold" style="color: #f5f3cb;" data-width="24" data-height="24"></span>`;
    if (
      headerNavigation.classList.contains("not-showing-menu") &&
      fullNavBar.classList.contains("overflow-hidden")
    ) {
      headerNavigation.classList.remove("not-showing-menu");
      fullNavBar.classList.remove("overflow-hidden");
      headerNavigation.classList.add("showing-menu");
      fullNavBar.classList.add("overflow-visible");
    }
    menuToggle = true;
  } else {
    // When the cancel is pressed the cancel button is changed to a menu button
    menuButton.innerHTML = `<span class="iconify" data-icon="ant-design:menu-outlined" style="color: #f5f3cb" data-width="24" data-height="24"></span>`;
    if (
      headerNavigation.classList.contains("showing-menu") &&
      fullNavBar.classList.contains("overflow-visible")
    ) {
      headerNavigation.classList.remove("showing-menu");
      headerNavigation.classList.add("not-showing-menu");
      fullNavBar.classList.add("overflow-hidden");
      setTimeout(function () {
        fullNavBar.classList.remove("overflow-visible");
      }, 300);
    }
    menuToggle = false;
  }
}
