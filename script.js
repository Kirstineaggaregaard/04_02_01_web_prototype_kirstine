window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
    document.querySelector("#luk").addEventListener("click", toggleMenu);
}


function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#menu").classList.toggle("hidden");
    document.querySelector("main").classList.toggle("hidden");
    document.querySelector("header").classList.toggle("hidden");
}
