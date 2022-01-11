const headers = document.querySelectorAll('[data-name="accordeon-title"]');
const hrestik = document.querySelector('.close-adv');
const allAdv = document.querySelector('.advertising');

headers.forEach((item) => {
    item.addEventListener('click', headerClick);
});

function headerClick() {
    this.nextElementSibling.classList.toggle("accordeon-hid");
}   

hrestik.onclick = function() {
     allAdv.classList.add('del');
}
