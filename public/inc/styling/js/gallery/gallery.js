let toggleGalleryCategory = (elem, category) =>  {
    let par = document.querySelector('.category');
    let children = par.children;
    for(let i = 0; i < children.length; i++) {
        children[i].classList.remove('active');
    }

    elem.classList.add('active');

    switch(category) {
        case 1:
            document.querySelector('.videos').classList.add('hidden');
            document.querySelector('.images').classList.remove('hidden');
            break;
        case 2:
            document.querySelector('.images').classList.add('hidden');
            document.querySelector('.videos').classList.remove('hidden');
            break;
    }
}