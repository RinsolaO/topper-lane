// Get Burger


const burger = document.querySelector(".burger");

burger.addEventListener("click", handleClick)


function handleClick () {
    const navLinks = document.querySelector(".nav-links");

    navLinks.classList.toggle('active')
    burger.classList.toggle('active')
}


const sr = ScrollReveal({
    distance: "40px",
    duration: 3000,
    delay: 400,
});


sr.reveal(`.annouce-container, footer.home span`, {
    origin: "top",
    // interval: 500
});

sr.reveal(`.annouce .big-font, .about-card, footer.home .logo`, {
    origin: "bottom",
    delay: 1000,
    interval: 500
});

sr.reveal(`.about-left`, {
    origin: "left",
    distance: "80px"
});

// sr.reveal(`.home-button`, {
//     origin: "top",
// });


// /ScrollReveal

// const sr = ScrollReveal({
//   distance: "80px",
//   duration: 3000,
//   delay: 400,
//   // reset: true,
// });

// sr.reveal(`.home-header, .section__title`);
// sr.reveal(` .footer-copyright`, { origin: "top", distance: "30px" });
// sr.reveal(`.home-img, .home-footer`, {
//   origin: "top",
//   delay: 1500,
//   interval: 500,
//   distance: "30px",
// });
// sr.reveal(` .nav-items`, {
//   origin: "top",
// //   delay: 100,
// //   interval: 500,
//   distance: "30px",
// });
// sr.reveal(` .sponsor-img, .footer-container`, {
//   origin: "bottom",
//   distance: "30px",
//   interval: 1000,
// });
// sr.reveal(`.specs-content, .case-img,.discount-animate`, {
//   origin: "left",
// });
// sr.reveal(`.specs-img, .case-content, .discount-img`, {
//   origin: "right",
// });
