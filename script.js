let menuIcon = document.querySelector("#menu");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section"); 
let navlinks = document.querySelectorAll(".navbar a"); 

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach(link => { 
        link.classList.remove("active");
        document.querySelector("header .navbar a[href='#" + id + "']").classList.add("active"); // Fixed query selector
      });
    }
  });
  
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
  menuIcon.classList.remove("fa-xmark");
  navbar.classList.remove("active");
};


ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.home-content, .header', { origin: 'top' });
ScrollReveal().reveal('.Home-imag , .languages_class, .services-cintainer, .protfolio-box, .contact form', { origin: 'buttom' });
ScrollReveal().reveal('.home-content h1 ,.about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p,.about-content', { origin: 'right' });
