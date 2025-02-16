document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    let currentIndex = 0;

    function showCard(index) {
        cards.forEach((card, i) => {
            card.classList.remove("active");
            card.style.opacity = "0";
            card.style.transform = "translateX(100%)";
        });

        cards[index].classList.add("active");
        cards[index].style.opacity = "1";
        cards[index].style.transform = "translateX(0)";
    }

    // Swapped the logic here
    document.getElementById("prev").addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % cards.length; // Clicking left moves forward
        showCard(currentIndex);
    });

    document.getElementById("next").addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length; // Clicking right moves backward
        showCard(currentIndex);
    });

    // Show the first card by default
    showCard(currentIndex);
});











/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 


