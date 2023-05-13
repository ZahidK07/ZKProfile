// -------------- Transparent Mobile Menu --------------

const menuBtn = document.querySelector('.MenuBtn');

const navBar = document.querySelector('.navLinks');

menuBtn.addEventListener('click',()=>{

    let navVisible = navBar.getAttribute('data-visible');

    if(navVisible === "false"){
        navBar.setAttribute("data-visible", true);
        menuBtn.setAttribute("aria-expanded", true);
    } else{
        navBar.setAttribute("data-visible", false);
        menuBtn.setAttribute("aria-expanded", false);
    }
});