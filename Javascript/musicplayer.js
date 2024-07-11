const music = new Audio('song1.mp3')
// music.play();

const songs = [
    {
        id: 1,
        songname:'Blank Space <br> <div class="subtitle">Taylor Swift</div>',
        poster: "img1.jpg"
    },
    {
        id: 2,
        songname:'Ranjha<br> <div class="subtitle">B Praak</div> ',
        poster: "img2.jpg"
    },
    {
        id: 3,
        songname:'Perfect <br> <div class="subtitle">Ed Sheeran</div> </div>',
        poster: "img3.jpg"
    },
    {
        id: 4,
        songname:'Shape of You <br> <div class="subtitle">Ed Sheeran</div>',
        poster: "img4.jpg"
    },
    {
        id: 5,
        songname:'Sugar <br> <div class="subtitle">Maroon 5</div> ',
        poster: "img7.jpg"
    },
    
    {
        id: 6,
        songname:'Maniac<br> <div class="subtitle">Conan Gray</div> ',
        poster: "img8.jpg"
    },
    {
        id: 7,
        songname:'Kabhi Kabhi Aditi<br> <div class="subtitle">Rashid Ali</div>',
        poster: "img9.jpg"
    },
    {
        id: 8,
        songname:'Summer High<br> <div class="subtitle">AP dhillon</div> ',
        poster: "img5.jpg"
    },
    {
        id: 9,
        songname:'Sanak<br> <div class="subtitle">Badshah</div> ',
        poster: "img11.jpg"
    },
    {
        id: 10,
        songname:'Tu aake dekh le<br> <div class="subtitle">King</div>',
        poster: "img10.jpeg"
    },
]

Array.from(document.getElementsByClassName('songitem')).forEach((e,i) =>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songname;

});

let masterplay = document.getElementById('masterplay');
let wave = document.getElementById('wave');


masterplay.addEventListener('click',() => {
    if (music.paused || music.currentTime <= 0){
        music.play();
        // wave.classList.add('active1');
    }
    else{
        music.pause();
    }
})


