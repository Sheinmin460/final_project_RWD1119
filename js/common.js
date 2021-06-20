console.log('common.js is actived')//to check connect or not

//for overlay menu nav
function menuToggle(){
    let overlay = document.getElementById('menu_overlay');
    overlay.classList.toggle('active');
    let nav = document.getElementById('toggleIcons');
    nav.classList.toggle('active');
}


