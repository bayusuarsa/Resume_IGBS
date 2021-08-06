const navbar = document.querySelector('.fixed-top');
window.onscroll = () => {
    if (window.scrollY > 300) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};