var PlayList = (function() {
    //constructor
    function PlayList(){
        this.arraySongs = [];
        this.current = 0;
    }
    
    function currentSong(){
        return this.arraySongs[this.current];
    }
    
    PlayList.prototype.add = function(song){
        this.arraySongs.push(song)
    }
    
    PlayList.prototype.play = function(){
        currentSong.call(this).play()
    }
    
    PlayList.prototype.stop = function(){
        currentSong.call(this).stop();
    }
    
    PlayList.prototype.next = function(){
        this.stop();
        this.current += 1;
        if (this.current > this.arraySongs.length - 1) {
            this.current = 0
        }
        this.play();
    }
    
    PlayList.prototype.render = function(){
        var list = '';
        this.arraySongs.forEach(function(song){
            list += song.toHtml();
        })
        return list;
    }


    return PlayList;
})();


