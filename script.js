const btnNao = document.getElementById('nao');

btnNao.addEventListener('mouseover', () => {
    const randomX = Math.random() * (window.innerWidth - btnNao.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - btnNao.offsetHeight);
    btnNao.style.position = 'absolute';
    btnNao.style.left = `${randomX}px`;
    btnNao.style.top = `${randomY}px`;
});