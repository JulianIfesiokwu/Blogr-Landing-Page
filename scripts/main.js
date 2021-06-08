// Variables
const hamburgerMenu = document.querySelector('.hamburger-menu');
const closeMenu = document.querySelector('.close-menu');
const hamburgerModal = document.querySelector('.modal');
const dropdownMenu = document.querySelector('.modal-content');
const dropdownList = document.querySelector('.dropdown-btn');
let modalDropdown = document.querySelectorAll('.modal-dropdown')




// Functions
function showDropdown() {
    hamburgerMenu.style.display = 'none';
    closeMenu.style.display = 'block';
    hamburgerModal.style.display = 'block';
    dropdownMenu.style.display = 'block';

    // disable scrolling by body when modal is open
    document.querySelector("body").style.overflow = 'hidden';
}

function closeDropdown() {
    hamburgerModal.style.display = "none";
    hamburgerMenu.style.display = 'block';
    closeMenu.style.display = 'none';

    // enable scrolling after closing hamburger
    document.querySelector("body").style.overflow = 'visible';

    // close all open dropdown lists when hamburger menu is closed
    // modalDropdown.style.display = 'none';
}

function showList(e) {
    if( e.target.classList.contains('dropdown-btn') ) {
        const targetList = e.target.nextElementSibling;
        targetList.style.display = 'flex';
    }
    // Going to delegation
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == hamburgerModal) {
      closeDropdown();
    }
}


// Event Listeners
if(hamburgerMenu) {
    hamburgerMenu.addEventListener('click', showDropdown)
}

if(closeMenu) {
    closeMenu.addEventListener('click', closeDropdown);
}

if(dropdownList) {
    dropdownList.addEventListener('click', showList);
}

if(hamburgerModal) {
    hamburgerModal.addEventListener('click', showList)
}