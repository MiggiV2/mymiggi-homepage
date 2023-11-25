const home = document.getElementById("center-home");
const about = document.getElementById("center-about");
const contact = document.getElementById("center-contact");
const aboutLink = document.getElementById("about-link");
const homeLink = document.getElementById("home-link");
const contactLink = document.getElementById("contact-link");

init();

function init() {
  autoShow();

  aboutLink.addEventListener("click", showAbout);
  homeLink.addEventListener("click", showHome);
  contactLink.addEventListener("click", showContact);
}

function autoShow() {
  var page = window.location.hash.substring(1);

  switch (page) {
    case "about":
      showAbout();
      break;
    case "contact":
      showContact();
      break;
    default:
      showHome();
  }
}

function showAbout() {
  home.style = "display:none";
  about.style = "display:block";
  contact.style = "display:none";
}

function showHome() {
  home.style = "display:flex";
  about.style = "display:none";
  contact.style = "display:none";
}

function showContact() {
  home.style = "display:none";
  about.style = "display:none";
  contact.style = "display:block";
}
