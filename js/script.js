// Mobile nav
const mobileNav = document.querySelector('.btn-mobile-nav');
const headerClass = document.querySelector('.header');
mobileNav.addEventListener('click', function () {
    headerClass.classList.toggle('nav-open');
});

// Smooth scrolling

// $(document).ready(function() {
//     $("a").on('click', function(event) {
//         if (this.hash !== "") {
//             event.preventDefault();
//             var hash = this.hash;
//             $('html, body').animate({
//                 scrollTop: $(hash).offset().top
//             }, 800, function() {
//                 window.location.hash = hash;
//             });
//         }
//     });
// });

// close moblie nav
const allLinks = document.querySelectorAll('a:link');
allLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {

        if (link.classList.contains("main-nav-link"))
            headerClass.classList.toggle('nav-open');
    });
});

//Sticky nav
const sectionHero = document.querySelector(".section-hero");
const obs = new IntersectionObserver(function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
        document.body.classList.add('sticky');
    }
    if (ent.isIntersecting) {
        document.body.classList.remove('sticky');
    }
}, {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
});
obs.observe(sectionHero);