const btn = document.querySelector('.j-btn-test');
const width = document.documentElement.clientWidth; const heigth = document.documentElement.clientHeight;
btn.addEventListener('click', () => {
    btn.classList.toggle('btn--magic');
    alert(' Размер экрана -'+width+'*'+heigth);

});