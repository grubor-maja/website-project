function toggleMenu() {
    var navbar = document.querySelector('.nav-bar__list');
    navbar.classList.toggle('mobile-active')
}

const collapsibles = document.querySelectorAll(".collapsible");

if(window.innerWidth<=768) {
collapsibles.forEach((item) =>{
    item.addEventListener("click", function() {
        this.classList.toggle("collapsible--expanded");
    })
})
}