let not = document.querySelector('h1');
let button = document.getElementsByClassName('preview__btn-produto');

for (but of button){
    but.addEventListener('click', (e) =>{
        let add = Number(not.getAttribute('data-count') || 0);
        not.setAttribute('data-count', add +1);
        not.classList.add('zero');
    })
}