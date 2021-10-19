const modalToggle = document
    .querySelector('.fund')
    .addEventListener('click', toggleModals);
const modals = document.querySelector('.modals');

function toggleModals() {
    modals.style.display = 'block';
}

window.onclick = function (e) {
    if (e.target == modals) {
        modals.style.display = 'none';
    }
};
