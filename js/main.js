MUSIC_TRACKS = ["01 45.mp3", "02 Spooky Girlfriend.mp3", "03 Tear off Your Own Head (It's a Do.mp3", "04 When I Was Cruel, No. 2.mp3", "05 Soul for Hire.mp3", "06 15 Petals.mp3", "07 Tart.mp3", "08 Dust 2....mp3", "09 Dissolve.mp3", "10 Alibi.mp3", "11 ...Dust.mp3", "12 Daddy Can I Turn This_.mp3", "13 My Little Blue Window.mp3", "14 Episode of Blonde.mp3", "15 Radio Silence.mp3" ];
IMAGES = ["ec_1.jpg", "ec_2.jpg", "ec_3.jpg" , "ec_4.jpg", "ec_5.jpg", "ec_6.jpg", "ec_7.jpg", "ec_8.jpg"];

MUSIC_FOLDER = "assets/music/";
IMAGE_FOLDER = "assets/images/";

window.onload = function(){

  // Setup jukebox full of a variety of songs.
  j = new Jukebox();
  loadJukebox(j);

  // create player
  player = document.getElementById('audio-player');

  initializeListeners();

}

function initializeListeners() {
  btnStart = document.getElementById('start-button');
  btnStop = document.getElementById('stop-button');
  btnVolUp = document.getElementById('vol-up-button');
  btnVolDown = document.getElementById('vol-down-button');
  trackPicker = document.getElementById('track-selector');
  btnRandom = document.getElementById('random-button');

  btnStart.addEventListener("click", function(){
    player.play();
  })

  btnStop.addEventListener("click", function(){
    player.pause();
  })

  btnVolUp.addEventListener("click", function(){
    player.volume += .1;
  })

  btnVolDown.addEventListener("click", function(){
    player.volume -= .1;
  })

  trackPicker.addEventListener("change", function(){
    var currentValue = trackPicker.value - 1;
    j.setCurrentSong(currentValue);
    player.src = j.getCurrentSongSrcInJukebox();
  })

  btnRandom.addEventListener("click", function(){
    j.selectRandomSong();
    player.src = j.getCurrentSongSrcInJukebox();
    document.getElementById('track-selector').value = j.getCurrentSong();
    var artUrl = "url('" + j.getCurrentSongArt() + "') center / cover";
    console.log(artUrl);
    document.getElementById('song').style.background = artUrl;
    player.play();
  })
}

function Jukebox(playBtn){
  this.currentSong = 0;
  this.songs = [];

  this.addSong = function(s){
    this.songs.push(s);
  }
  this.listSongs = function(){
    console.log(this.songs);
  }
  this.selectRandomSong = function(){
    var max = this.songs.length;
    this.currentSong = generateNumber(1, max);
  }
  this.setCurrentSong = function(selection){
    if (selection > this.songs.length || selection <= 0){
      alert("You can't select that");
      return true;
    } else {
      this.currentSong = selection;
    }
  }
  this.getCurrentSong = function(){
    return this.currentSong;
  }
  this.getCurrentSongSrcInJukebox = function(){
    return this.songs[this.currentSong].location;
  }
  this.getCurrentSongArt = function(){
    // console.log("img " + this.songs[this.currentSong].image);
    return this.songs[this.currentSong].image;
  }
}

function Song(location, image, type){
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
