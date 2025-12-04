let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');

let timer;
let autoplay = 0;

let index_no = 0;
let playing_song = false;

//create a audio element
let track = document.createElement('audio');

// All songs list
let All_song =[
    {
        name: "Choosi chudangane song_mp3",
        path: "music/song1.mp3",
        img: "images/picks.jpg",
        singer: "Anurag Kulkarni, Saagar Mahati"
    },
    {
        name: "Adigaa Adigaa song_mp3",
        path: "music/song2.mp3",
        img: "images/picks.jpg",
        singer: "Balakrishna, Srikanth,Jaiswal "
    },
    {
        name: "Bangaru Kodipetta Song_mp3",
        path: "music/song3.mp3",
        img: "images/picks.jpg",
        singer: "Ranjith, Shivani"
    },
    {
        name: "Banthi poola janiki song_mp3",
        path: "music/song4.mp3",
        img: "images/picks.jpg",
        singer: "Jr.NTR, Kajal-Agarwal"
    },
    {
        name: "Boss party Song_mp3",
        path: "music/song5.mp3",
        img: "images/picks.jpg",
        singer: "Nakash Aziz, DSP, Haripriya"
    },
    {
        name: "Aanandama madike Song_mp3",
        path: "music/song6.mp3",
        img: "images/picks.jpg",
        singer: "Sid Sriram, Satya Yamini"
    },
    {
        name: "bagundalamma Song_mp3",
        path: "music/song7.mp3",
        img: "images/picks.jpg",
        singer: "Ramu"
    },
    {
        name: "pournami flute_music mp3",
        path: "music/song8.mp3",
        img: "images/picks.jpg",
        singer: "Kiran and team"
    },
    {
        name: "Dhruva Dhruva song mp3",
        path: "music/song9.mp3",
        img: "images/picks.jpg",
        singer: "Amit mishra"
    },
    {
        name: "Nijamena song mp3",
        path: "music/song18.mp3",
        img: "images/picks.jpg",
        singer: "Karthik, Suchitra"
    },
    {
        name: "Kalala kadhala song mp3",
        path: "music/song10.mp3",
        img: "images/picks.jpg",
        singer: "Harini Ivaturi"
    },
    {
        name: "cheliya cheliya song mp3",
        path: "music/song11.mp3",
        img: "images/picks.jpg",
        singer: "K.K Suchitra"
    },
    {
        name: "Rubberu gajulu song mp3",
        path: "music/song12.mp3",
        img: "images/picks.jpg",
        singer: "DelerMehendi, Pranavi"
    },
    {
        name: "Samajavaragamana mp3",
        path: "music/song13.mp3",
        img: "images/picks.jpg",
        singer: "Sid Sriram"
    },
    {
        name: "Thar Maar Thakkar Maar song mp3",
        path: "music/song14.mp3",
        img: "images/picks.jpg",
        singer: "Shreya Ghosal"
    },
    {
        name: "Maaro Maaro rey song mp3",
        path: "music/song15.mp3",
        img: "images/picks.jpg",
        singer: "Rahul Nambiar, Suchitra"
    },
    {
        name: "maate vinadhuga song mp3",
        path: "music/song16.mp3",
        img: "images/picks.jpg",
        singer: "Sid Sriram"
    },
    {
        name: "vachadura song mp3",
        path: "music/song17.mp3",
        img: "images/picks.jpg",
        singer: "Koti,M.M.Keeravani,Ranjith"
    },
    {
        name: "Gore Gore song mp3",
        path: "music/song19.mp3",
        img: "images/picks.jpg",
        singer: "Karthik, Jyotsna"
    },
    {
        name: "Ninnela Ninnela Song mp3",
        path: "music/song18.mp3",
        img: "images/picks.jpg",
        singer: "Anurag kulkarni,Sherya Goshal"
    },
    {
        name: "Choosi chudangane song_mp3",
        path: "music/song19.mp3",
        img: "images/picks.jpg",
        singer: "Anurag Kulkarni, Saagar Mahati"
    },
    {
        name: "Adigaa Adigaa song_mp3",
        path: "music/song20.mp3",
        img: "images/picks.jpg",
        singer: "Balakrishna, Srikanth,Jaiswal "
    },
    {
        name: "Bangaru Kodipetta Song_mp3",
        path: "music/song21.mp3",
        img: "images/picks.jpg",
        singer: "Ranjith, Shivani"
    },
    {
        name: "Banthi poola janiki song_mp3",
        path: "music/song22.mp3",
        img: "images/picks.jpg",
        singer: "Jr.NTR, Kajal-Agarwal"
    },
    {
        name: "Boss party Song_mp3",
        path: "music/song23.mp3",
        img: "images/picks.jpg",
        singer: "Nakash Aziz, DSP, Haripriya"
    },
    {
        name: "Aanandama madike Song_mp3",
        path: "music/song24.mp3",
        img: "images/picks.jpg",
        singer: "Sid Sriram, Satya Yamini"
    },
    {
        name: "bagundalamma Song_mp3",
        path: "music/song25.mp3",
        img: "images/picks.jpg",
        singer: "Ramu"
    },
    {
        name: "pournami flute_music mp3",
        path: "music/song26.mp3",
        img: "images/picks.jpg",
        singer: "Kiran and team"
    },
    {
        name: "Dhruva Dhruva song mp3",
        path: "music/song27.mp3",
        img: "images/picks.jpg",
        singer: "Amit mishra"
    },
    {
        name: "Nijamena song mp3",
        path: "music/song28.mp3",
        img: "images/picks.jpg",
        singer: "Karthik, Suchitra"
    },
    {
        name: "maate vinadhuga song mp3",
        path: "music/song29.mp3",
        img: "images/picks.jpg",
        singer: "Sid Sriram"
    },
    {
        name: "Kalala kadhala song mp3",
        path: "music/song30.mp3",
        img: "images/picks.jpg",
        singer: "Harini Ivaturi"
    },
    {
        name: "cheliya cheliya song mp3",
        path: "music/song31.mp3",
        img: "images/picks.jpg",
        singer: "K.K Suchitra"
    },
    {
        name: "Rubberu gajulu song mp3",
        path: "music/song32.mp3",
        img: "images/picks.jpg",
        singer: "DelerMehendi, Pranavi"
    },
    {
        name: "Samajavaragamana mp3",
        path: "music/song33.mp3",
        img: "images/picks.jpg",
        singer: "Sid Sriram"
    },
    {
        name: "Thar Maar Thakkar Maar song mp3",
        path: "music/song34.mp3",
        img: "images/picks.jpg",
        singer: "Shreya Ghosal"
    },
    {
        name: "Maaro Maaro rey song mp3",
        path: "music/song35.mp3",
        img: "images/picks.jpg",
        singer: "Rahul Nambiar, Suchitra"
    },
    {
        name: "maate vinadhuga song mp3",
        path: "music/song36.mp3",
        img: "images/picks.jpg",
        singer: "Sid Sriram"
    },
    {
        name: "maate vinadhuga song mp3",
        path: "music/song37.mp3",
        img: "images/picks.jpg",
        singer: "Sid Sriram"
    },
    {
        name: "vachadura song mp3",
        path: "music/song38.mp3",
        img: "images/picks.jpg",
        singer: "Koti,M.M.Keeravani,Ranjith"
    },
    {
        name: "Gore Gore song mp3",
        path: "music/song39.mp3",
        img: "images/picks.jpg",
        singer: "Karthik, Jyotsna"
    }
];

// All function


// Function load the Track 
function load_track(index_no){
    clearInterval(timer);
    reset_slider();
    track.src = All_song[index_no].path; 
    title.innerHTML = All_song[index_no].name;
    track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();


    total.innerHTML = All_song.length;
    present.innerHTML = index_no + 1;
    timer = setInterval(range_slider , 1000);
}
load_track(index_no);

// mute sound fun
function mute_sound(){
    track.volume = 0;
    volume.value = 0;
    volume_show.innerHTML = 0;
}

// reset song slider
function reset_slider(){
    slider.value = 0;
}

//checking the song is playing  or not 

function justplay(){
    if(playing_song==false){
        playsong();
    }else{
        pausesong();
    }
}

  // play song 
function playsong(){
    track.play();
    playing_song = true;
    play.innerHTML ='<i class="fa fa-pause"></i>';
}
// pause song 
function pausesong(){
    track.pause();
    playing_song = false;
    play.innerHTML = '<i class="fa fa-pause"></i>';
}


// next song
function next_song(){
    if(index_no < All_song.length - 1){
        index_no += 1;
        load_track(index_no);
        playsong();
    }else{
        index_no = 0;
        load_track(index_no);
        playsong();
    }
}
// previous song

function previous_song(){
    if(index_no > 0){
        index_no -= 1;
        load_track(index_no);
        playsong();
    }else{
        index_no = All_song.length;
        load_track(index_no);
        playsong(); 
    }
}

// Change volume
function volume_change(){
    volume_show.innerHTML = recent_volume.value;
    track.volume = recent_volume.value / 100;
}

// change slider position
function change_duration(){
    slider_position = track.duration * (slider.value / 100);
    track.currentTime = slider_position;
}

// auto play function
function autoplay_switch(){
    if (autoplay == 1){
        autoplay=0;
        auto_play.style.background = "rgba(255,255,255,0.2)";
    }else{
        autoplay = 1;
        auto_play.style.background ="#FF8A65";
    }
}

function range_slider(){
    let position = 0;

    // update slider position 
    if(!isNaN(track.duration)){
        position = track.currentTime * (100 / track.duration);
    }
// function will run when the song is over 
    if (track.ended){
        play.innerHTML = '<i class="fa fa-play"></i>';
        if(autoplay = 1){
            index_no += 1;
            load_track(index_no);
            playsong();
        }
    }
}


