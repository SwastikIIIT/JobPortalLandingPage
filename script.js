// const scrollRevealOption = {
//     distance: "50px",
//     origin: "bottom",
//     duration: 1000,
//   };


  
// ScrollReveal().reveal(".header_container h1", {
//   ...scrollRevealOption,
// });
// ScrollReveal().reveal("header h1");
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
 // Function to check if element is in the viewport
 function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


document.addEventListener("DOMContentLoaded", function () {
    const exploreCards = document.querySelectorAll(".explore_card");
    const exploreBtn = document.querySelector(".explore_btn");
    // const joinDetail = document.querySelector(".join_detail");
    // const joinButton = document.querySelector(".join_button");
    const jobCards = document.querySelectorAll(".job_card");
   
    // Add scroll event listener
    window.addEventListener("scroll", function () {
        exploreCards.forEach((card) => {
            if (isInViewport(card)) {
                card.classList.add("animate");
            }
        });

        jobCards.forEach((card) => {
            if (isInViewport(card)) {
                card.classList.add("animate");
            }
        });
        
        if (isInViewport(exploreBtn)) {
            exploreBtn.classList.add("animate");
        }
    });
});


$('.testimonials-container').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:6000,
    margin:30,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",
             "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:true
        },
        768:{
            items:2
        },
    }
})