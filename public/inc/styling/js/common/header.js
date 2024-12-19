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

let changeMobileModal = (menu) => {
    let modals = document.querySelectorAll('.mobileNavigationModal');
    for(let i = 0; i < modals.length; i++) {
        modals[i].style.display = "none";
    }

    switch(menu){
        case "staff":
            document.querySelector('.staffModal').style.display = "grid";
            document.querySelector('.mobileModalBackArrow').style.visibility = "visible";
            break;
        default:
            document.querySelector('.mobileModalBackArrow').style.visibility = "hidden";
            document.querySelector('.defaultModal').style.display = "grid";
            break;
    }
}