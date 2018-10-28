var Movie = (function(){
    //constructor
    function Movie(name, url, duration){
        Media.call(this, name, duration);
        this.url = url;
    }

    Movie.prototype = Object.create(Media.prototype);
    Movie.prototype.constructor = Movie;

    Movie.prototype.toHtml = function(){
        return `<div class="row py-3 ${this.isPlay ? 'current': ''}">
        <div class="col-sm-3">${this.name}</div>
        <div class="col-sm-6"><a href="${this.url}">${this.name}</a></div>
        <div class="col-sm-3">${this.duration}</div>
    </div>`
    }
    
    return Movie;
})();


