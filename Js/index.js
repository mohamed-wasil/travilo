
// to fix header
let header = document.getElementById('header');
let btnUp = document.getElementById('btnUp');

window.onscroll = function () {
    if (window.scrollY > 200) {
        header.classList.add('header-fix')
        btnUp.classList.add('show-btn');
    }
    else {
        header.classList.remove('header-fix')
        btnUp.classList.remove('show-btn');
    }
}
btnUp.addEventListener('click', function (e) {
    window.scroll({
        top: 0,
        bahaviour: "smooth"
    })
})
