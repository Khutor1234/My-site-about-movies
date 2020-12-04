/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};



let adv = document.querySelectorAll('.promo__adv img');
let genre = document.querySelector('.promo__genre');
let promoBG = document.querySelector('.promo__bg');
let int = document.querySelectorAll('.promo__interactive-item');

adv.forEach(item =>{
   item.remove();
});

genre.textContent = 'драма';
promoBG.style.backgroundImage = "url('img/bg.jpg')";

movieDB.movies.sort();

movieDB.movies.forEach((item,i) => {
 int[i].textContent = (i + 1 + '.') + movieDB.movies[i];
});