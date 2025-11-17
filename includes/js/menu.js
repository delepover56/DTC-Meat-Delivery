function menu() {
    const slidingMenu = document.querySelector('.slidingMenu');
    
    if (slidingMenu) {
        slidingMenu.classList.toggle('is-open');
        
        const menuButton = document.querySelector('.mobile-header button');
        const menuIcon = menuButton.querySelector('svg path');
        
        const isOpen = slidingMenu.classList.contains('is-open');

        if (isOpen) {
            menuIcon.setAttribute('d', 'M6.41 6L5 7.41 10.59 13 5 18.59 6.41 20 12 14.41 17.59 20 19 18.59 13.41 13 19 7.41 17.59 6 12 11.59z');
            menuButton.setAttribute('aria-expanded', 'true');
            document.body.style.overflow = 'hidden'; 
        } else {
            menuIcon.setAttribute('d', 'M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z');
            menuButton.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    }
}