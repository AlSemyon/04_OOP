var Song = (function(){
    //constructor
    function Song(name, author, duration){
        Media.call(this, name, duration);
        this.author = author;
    }

    Song.prototype = Object.create(Media.prototype);
    Song.prototype.constructor = Song;

    Song.prototype.toHtml = function(){
        return `<div class="row py-3 ${this.isPlay ? 'current': ''}">
        <div class="col-sm-9">${this.name + ' - ' + this.author}</div>
        <div class="col-sm-3">${this.duration}</div>
    </div>`
    }
    
    return Song;
})();


