let show = true;
const menuContent = document.querySelector('.content');
const MenuToggle = document.querySelector('.menu-toggle');

MenuToggle.addEventListener('click', () =>{
    document.body.style.overflow = show ? 'hidden' : 'initial'

    menuContent.classList.toggle('on', show)
    show = !show

})