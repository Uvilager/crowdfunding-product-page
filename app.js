// Modals
const singleModal = document.querySelectorAll('.modal');
const modalToggle = document
    .querySelector('.fund')
    .addEventListener('click', toggleModals);
const modals = document.querySelector('.modals');
const exactModalToggle = document.querySelectorAll('.in-stock');
const modalsHolder = document.querySelector('.modals-holder');
const thankYou = document.querySelector('.thank-you');
const enterBtn = document.querySelectorAll('.enter');
const thanksBtn = document
    .querySelector('.thanks')
    .addEventListener('click', closeEverything);

// Form
const inputPledge = document.querySelectorAll('.inputPledge');
const form = document.querySelectorAll('.form');
const toggleForm = document.querySelectorAll('.toggleForm');

// Menu
const nav = document.querySelector('.nav');
const mobileMenu = document.querySelector('.mobile-menu');
const hamburger = document
    .querySelector('.hamburger-menu')
    .addEventListener('click', toggleMenu);

// Toggle modal and menu on
function toggleModals() {
    modals.style.display = 'block';
    modalsHolder.style.display = 'block';
    thankYou.style.display = 'none';
}

enterBtn.forEach((button) => {
    button.addEventListener('click', function toggleThankYou() {
        modals.style.display = 'block';
        modalsHolder.style.display = 'none';
        thankYou.style.display = 'flex';
    });
});

exactModalToggle.forEach((button, i) => {
    button.addEventListener('click', (openModalPledge) => {
        form[i].style.display = 'block';
        toggleModals();
        toggleSingleForm(toggleForm[i + 1], i + 1);
    });
});

function toggleMenu() {
    mobileMenu.classList.toggle('opacity');
    if (mobileMenu.classList.contains('opacity')) {
        document.querySelector('.hamburger-menu').src =
            '/assets/images/icon-close-menu.svg';
        nav.style.display = 'block';
        document.body.classList.toggle('bodyOverflow');
    } else {
        closeMenu();
    }
}

// Close Menu and Modal on click
function closeEverything() {
    modals.style.display = 'none';
    modalsHolder.style.display = 'none';
    thankYou.style.display = 'none';
    closeMenu();
}

window.onclick = function (e) {
    if (e.target == modals || e.target == mobileMenu) {
        modals.style.display = 'none';
        closeMenu();
    }
};

function closeMenu() {
    nav.style.display = 'none';
    document.body.classList.remove('bodyOverflow');
    document.querySelector('.hamburger-menu').src =
        '/assets/images/icon-hamburger.svg';
    mobileMenu.classList.remove('opacity');
}

// Toggle Form on modal view
toggleForm.forEach((circle, i) => {
    circle.addEventListener('click', function checkCircle() {
        toggleSingleForm(circle, i);
    });
});

function toggleSingleForm(circle, i) {
    form.forEach((single) => {
        inputPledge.forEach((input) => {
            input.classList.remove('borderGreenInput');
        });
        inputPledge[i].classList.toggle('borderGreenInput');
        singleModal.forEach((border) => {
            border.classList.remove('borderGreenModal');
        });
        singleModal[i].classList.toggle('borderGreenModal');
        circle.checked = true;
        single.style.display = 'none';
        form[i].style.display = 'block';
    });
}
