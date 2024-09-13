let personalMovieDB = {
	private: null,
	movies: {},
};
alert('Ну и что же ты смотрел?');
if (Math.floor(Math.random() * 2) == 0) {
	personalMovieDB.private = true;
	alert('Ах ты негодник');
} else {
	personalMovieDB.private = false;
	alert('Скучно живешь');
}
for (let i = 0; i < 3; i++) {
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
if (personalMovieDB.private == true)
	alert('Такое нельзя показывать, а то еще дети увидят');
else buildTable();

function buildTable() {
	let table = document.getElementById('table');
	let row = document.createElement('tr');
	th1 = document.createElement('th');
	th1.textContent = 'Фильм';
	row.appendChild(th1);
	th2 = document.createElement('th');
	th2.textContent = 'Оценка';
	row.appendChild(th2);
	table.appendChild(row);
	for (title in personalMovieDB.movies) {
		let row = document.createElement('tr');
		let td1 = document.createElement('td');
		td1.textContent = title;
		row.appendChild(td1);
		let td2 = document.createElement('td');
		td2.textContent = personalMovieDB.movies[title];
		row.appendChild(td2);
		table.appendChild(row);
	}
}
