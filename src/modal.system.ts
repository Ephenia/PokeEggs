const modal = document.getElementById('modal')!;
const modalMain = document.getElementById('modal-main')!
const modalTitle = document.getElementById('modal-title')!;
const modalContent = document.getElementById('modal-content')!;

//For closing the Modal
modal.addEventListener('click', () => {
    modal.style.display = 'none';
    modalContent.classList.value = '';
    disposeElement(modalContent);
});

//Prevents the Modal from closing when clicking inside of it
modalMain.addEventListener('click', (event) => {
    event.stopPropagation();
})

//Opens the Modal
function openModal(source: string) {
    if (!isHidden(modal)) return
    modal.style.display = 'flex';
    modalData[source]();
}

//Sets the Modal's title
function setModalTitle(title: string) {
    modalTitle.textContent = title;
}