var song1 = new Song('Song1', 'Denys', '01:23');
var song2 = new Song('Song1', 'Denys', '01:23');
var song3 = new Song('Song2', 'Dima', '03:51');
var movie1 = new Movie('movie1', 'https://stackoverflow.com/questions/8453887/why-is-it-necessary-to-set-the-prototype-constructor', '03:51');
var movie2 = new Movie('movie2', 'https://learn.javascript.ru/objects-more', '03:51');

var playList = new PlayList();

playList.add(song1);
playList.add(song2);
playList.add(song3);
playList.add(movie1);
playList.add(movie2);

var list = document.querySelector('#list');
var btnplay= document.querySelector('#btn-play');
var btnnext= document.querySelector('#btn-next');
var btnstop= document.querySelector('#btn-stop');

function renderPlaylist() {
    list.innerHTML = playList.render();
}

renderPlaylist();

btnplay.addEventListener('click', function() {
    playList.play();
    renderPlaylist();
})

btnnext.addEventListener('click', function() {
    playList.next();
    renderPlaylist();
})

btnstop.addEventListener('click', function() {
    playList.stop();
    renderPlaylist();
})
