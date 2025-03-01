const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open")

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line")
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".about_container .section_header", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".about_container .section_description", {
    ...scrollRevealOption,
    delay:500,
    interval:500
});
ScrollReveal().reveal(".about_container img", {
    ...scrollRevealOption,
    delay:1500,
});

ScrollReveal().reveal(".service_container .section_header", {
    ...scrollRevealOption,
});
ScrollReveal().reveal("service_container .section_description", {
    ...scrollRevealOption,
    delay:500,
});
ScrollReveal().reveal("service-card",{
    duration:1000,
    delay:1000,
    interval:500,
});

const swiper = new Swiper (".swiper", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    },
});

ScrollReveal().reveal(".blog_content .section_header", {
    ...scrollRevealOption,
    
})
ScrollReveal().reveal(".blog_content h4", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".blog_content p", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".blog_content .blog_btn", {
    ...scrollRevealOption,
    delay: 1500,
});

const instagram = document.querySelector(".instagram_flex");

Array.from(instagram.children).forEach((item) => {
    const duplicateNode = item.cloneNode(true);
    duplicateNode.setAttribute("aria-hidden", true);
    instagram.appendChild(duplicateNode);
});