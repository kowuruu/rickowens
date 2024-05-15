let currentIndex = 0; // Индекс текущей активной кроссовки
const sneakers = document.querySelectorAll('.sneaker');

function showNext() {
    sneakers[currentIndex].classList.remove('active'); // Скрыть текущую кроссовку
    currentIndex = (currentIndex + 1) % sneakers.length; // Увеличить индекс
    sneakers[currentIndex].classList.add('active'); // Показать следующую кроссовку
}

function showPrev() {
    sneakers[currentIndex].classList.remove('active'); // Скрыть текущую кроссовку
    currentIndex = (currentIndex - 1 + sneakers.length) % sneakers.length; // Уменьшить индекс
    sneakers[currentIndex].classList.add('active'); // Показать предыдущую кроссовку
}

function highlightSize(button) {
    var buttons = document.querySelectorAll('.size'); // Получаем все кнопки размеров
    buttons.forEach(function(btn) {
        btn.classList.remove('selected'); // Удаляем класс 'selected' у всех кнопок
    });
    button.classList.add('selected'); // Добавляем класс 'selected' к нажатой кнопке
}

window.onscroll = function() {
    let vid = document.getElementById("background-video");
    let logo = document.getElementById("logo");
    let buyButton = document.getElementById("buy-button");
    let scrolled = window.scrollY;
    let opacity = 1 - scrolled / window.innerHeight;
    vid.style.opacity = opacity;
    logo.style.opacity = opacity;
    buyButton.style.opacity = opacity;
};
