const home = document.getElementById("center-home");
const about = document.getElementById("center-about");
const contact = document.getElementById("center-contact");

autoShow();

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
