const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', togglefunc);

function togglefunc() {
    navbarLinks.classList.toggle('active');

    let ul = navbarLinks.childNodes[1];
}

function submit_form() {}

function sendRequest(type, link, data) {

}