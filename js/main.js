MUSIC_TRACKS = ["01 45.mp3", "02 Spooky Girlfriend.mp3", "03 Tear off Your Own Head.mp3", "04 When I Was Cruel.mp3", "05 Soul for Hire.mp3", "06 15 Petals.mp3", "07 Tart.mp3", "08 Dust 2....mpg", "08 Dissolve.mp3", "10 Alibi.mp3", "...Dust.mp3", "12 Daddy Can I Turn This_.mp3", "13 My Little Blue Window.mp3", "14 Episode of Blonde.mp3", "15 Radio Silence.mp3" ];
IMAGES = ["ec_1.jpg", "ec_2.jpg", "ec_3.jpg" , "ec_4.jpg", "ec_5.jpg", "ec_6.jpg", "ec_7.jpg", "ec_8.jpg"];

window.onload = function(){

  initializeListeners();

}

function initializeListeners() {

}

function Jukebox(){
  this.songs = [];
  this.addSong = function(s){
    this.songs.push(s);
  }
  
}

function Song(title, type, image){
  this.title = title;
  this.type = type;
  this.image = image;
}
