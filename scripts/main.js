// Variables
const hamburgerMenu = document.querySelector('.hamburger-menu');
const closeMenu = document.querySelector('.close-menu');
const hamburgerModal = document.querySelector('.modal');
const dropdownMenu = document.querySelector('.modal-content');
const dropdownList = document.querySelector('.dropdown-btn');




// Functions
function showDropdown() {
    hamburgerMenu.style.display = 'none';
    closeMenu.style.display = 'block';
    hamburgerModal.style.display = 'block';
    dropdownMenu.style.display = 'block';
}

function closeDropdown() {
    hamburgerModal.style.display = "none";
    hamburgerMenu.style.display = 'block';
    closeMenu.style.display = 'none';
}

function showList() {
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