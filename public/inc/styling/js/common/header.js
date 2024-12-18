window.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if (window.scrollY > 0) {
        header.classList.add('headerOnScroll');
    } else {
        header.classList.remove('headerOnScroll');
    }
});

let toggleMobileNavigation = () => {
    let modal = document.getElementById('mobileModal');
    modal.open ? modal.close() : modal.showModal();
}