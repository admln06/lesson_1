"use strict";

let number0fFilms;

const personalMovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function() {
        number0fFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');  

        while (number0fFilms == '' || number0fFilms == null || isNaN(number0fFilms)) {
            number0fFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
        personalMovieDB.count = number0fFilms;
    },    
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
              personalMovieDB.movies[a] = b;
              console.log('done');
            } else {
              console.log('error');
              i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка!");
        }   
    },
    showMyDB: function(hidden) {3
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function(hidden) {
        if (!hidden) {
            personalMovieDB.privat = true;
        } else personalMovieDB.privat = false;
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
            while (genre == null || genre == '') {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
            }
            personalMovieDB.genres[i - 1] = genre;
        }
        personalMovieDB.genres.forEach( function(item, i) {
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
    }
};

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// for (let i = 0; i < 2; i++) {

         
// }

personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.toggleVisibleMyDB(personalMovieDB.privat);

personalMovieDB.showMyDB(personalMovieDB.privat);

personalMovieDB.writeYourGenres();