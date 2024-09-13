let numbersOfFilms;
while (true) {
	numbersOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
	if (numbersOfFilms.length == 0) {
		alert('Давай попробуем еще раз');
		continue;
	}
	break;
}
let personalMovieDB = {
	count: numbersOfFilms,
	movies: {},
};
for (let i = 0; i < 2; i++) {
	let title;
	let rating;
	while (true) {
		title = prompt('Один из последних просмотренных фильмов?');
		if (title.length == 0 || title.length > 50) {
			alert('Давай попробуем еще раз');
			continue;
		}
		if (title in personalMovieDB.movies) {
			alert('Повторяться нельзя');
			continue;
		}
		break;
	}
	while (true) {
		rating = prompt('Насколько оцените его?');
		if (rating.length == 0) {
			alert('Давай попробуем еще раз');
			continue;
		}
		break;
	}
	personalMovieDB.movies[title] = rating;
}
console.log(personalMovieDB);
