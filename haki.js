

var typed = new Typed("#make", {
    strings: ["We Make The Law Known"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
var typed = new Typed("#know", {
    strings: ["Knownafrique Legal Services"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
var modal = document.getElementById('login');
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
var modal = document.getElementById('create');
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
