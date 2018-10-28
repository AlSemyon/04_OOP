var Media = (function(){
    //constructor
    function Media(name, duration){
        this.name = name;
        this.duration = duration;
        this.isPlay = false;
    }
    
    Media.prototype.play = function(){
        this.isPlay = true;
    }
    Media.prototype.stop = function(){
        this.isPlay = false;
    }
    
    Media.prototype.toHtml = function(){
        return `<div class="row py-3 ${this.isPlay ? 'current': ''}">
        <div class="col-sm-9">${this.name}</div>
        <div class="col-sm-3">${this.duration}</div>
    </div>`
    }
    
    return Media;
})();
