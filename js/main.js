MUSIC_TRACKS = ["01 45.mp3", "02 Spooky Girlfriend.mp3", "03 Tear off Your Own Head.mp3", "04 When I Was Cruel.mp3", "05 Soul for Hire.mp3", "06 15 Petals.mp3", "07 Tart.mp3", "08 Dust 2....mpg", "08 Dissolve.mp3", "10 Alibi.mp3", "...Dust.mp3", "12 Daddy Can I Turn This_.mp3", "13 My Little Blue Window.mp3", "14 Episode of Blonde.mp3", "15 Radio Silence.mp3" ];
IMAGES = ["ec_1.jpg", "ec_2.jpg", "ec_3.jpg" , "ec_4.jpg", "ec_5.jpg", "ec_6.jpg", "ec_7.jpg", "ec_8.jpg"];

MUSIC_FOLDER = "/music/";
IMAGE_FOLDER = "/images/";

window.onload = function(){

  // Setup jukebox full of a variety of songs.
  j = new Jukebox();
  loadJukebox(j);
  j.listSongs();

  // create player
  player = document.getElementById('audio-player');

  initializeListeners();

}

function initializeListeners() {
  btnStart = document.getElementById('start-button');
  btnStop = document.getElementById('stop-button');
  btnVolUp = document.getElementById('vol-up-button');
  btnVolDown = document.getElementById('vol-down-button');

  btnStart.addEventListener("click", function(){
    console.log(player);
    player.play();
  })

  btnStop.addEventListener("click", function(){
    player.pause();
  })

  btnVolUp.addEventListener("click", function(){
    player.volume += .01;
  })

  btnVolDown.addEventListener("click", function(){
    player.volume -= .01;
  })
}

function Jukebox(){
  this.songs = [];
  this.addSong = function(s){
    this.songs.push(s);
  }
  this.playSong = function(selection){
    
  }
  this.listSongs = function(){
    // console.log(this.songs);
  }
}

function Song(location, type, image){
  this.location = location;
  this.type = type;
  this.image = image;
}

function loadJukebox(jukebox){
  for(var i = 0; i < MUSIC_TRACKS.length; i++){
    var imageNum = generateNumber(0, 7);
    var track = MUSIC_FOLDER + MUSIC_TRACKS[i];
    var img = IMAGE_FOLDER + IMAGES[imageNum];
    s = new Song(track, img, "mp3");
    jukebox.addSong(s);
  }
}

function generateNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
