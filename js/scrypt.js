const n1 = document.querySelector('#yearly');
const n2 = document.querySelector('#monthly');
const but = document.querySelector('.scroll');
const prod = document.querySelectorAll('products');

n2.onclick = function(){
    n2.classList.toggle("active");
    n1.classList.toggle("active");
}
n1.onclick = function(){
    n2.classList.toggle("active");
    n1.classList.toggle("active");
}

