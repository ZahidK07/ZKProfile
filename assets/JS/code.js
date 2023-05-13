
// -------------- Type Effect --------------
let typeEffect = new Typed(".multiText",{
    strings: ["Developer.", "Coder."],
    loop : true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1500
});

// -------------- Transparent Mobile Menu --------------

const menuBtn = document.querySelector('.MenuBtn');

const navBar = document.querySelector('.navLinks');

menuBtn.addEventListener('click',()=>{

    let navVisible = navBar.getAttribute('data-visible');
    console.log(navVisible)

    if(navVisible === "false"){
        navBar.setAttribute("data-visible", true);
        menuBtn.setAttribute("aria-expanded", true);
    } else{
        navBar.setAttribute("data-visible", false);
        menuBtn.setAttribute("aria-expanded", false);
    }
});






