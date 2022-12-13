const modalData: any = {
    //For viewing the changelog
    changelog() {
        createChangelog();
    },
    //For testing the Modal system
    modaltest() {
        console.log('opening')
    }
}

function createChangelog() {
    fetch('./changelog.txt')
        .then(response => response.text())
        .then((data) => {
            modalContent.innerHTML = `${data}`;
        })
    modalContent.classList.add('modal-changelog');
}