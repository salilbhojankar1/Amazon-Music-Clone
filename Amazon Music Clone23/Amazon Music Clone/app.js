const music = new Audio('on_my_way.mp3');

// create Array

const songs = [
    {
        id:'1',
        songName:'On My Way <br><div class="subtitle">Alan Walker</div>',
        poster:"img/1.jpg"
    },
    {
        id:'2',
        songName:'Alan Walker-Faded <br><div class="subtitle">Alan Walker</div>',
        poster:"img/alan_walker_faded.jpg"
    },
    {
        id:'3',
        songName:'Alan Walker-Ignite <br><div class="subtitle">Alan Walker</div>',
        poster:"img/alan_walker_ignite.jpg"
    },
    {
        id:'4',
        songName:'Alan Walker-Faded <br><div class="subtitle">Alan Walker</div>',
        poster:"img/alan_walker_faded.jpg"
    },
    {
        id:'5',
        songName:'Alan Walker-Faded <br><div class="subtitle">Alan Walker</div>',
        poster:"img/alan_walker_faded.jpg"
    },
    {
        id:'6',
        songName:'Alan Walker-Faded <br><div class="subtitle">Alan Walker</div>',
        poster:"img/alan_walker_faded.jpg"
    },
    {
        id:'7',
        songName:'Alan Walker-Faded <br><div class="subtitle">Alan Walker</div>',
        poster:"img/alan_walker_faded.jpg"
    },
    {
        id:'8',
        songName:'Alan Walker-Faded <br><div class="subtitle">Alan Walker</div>',
        poster:"img/alan_walker_faded.jpg"
    },
    {
        id:'9',
        songName:'Alan Walker-Faded <br><div class="subtitle">Alan Walker</div>',
        poster:"img/alan_walker_faded.jpg"
    },
    {
        id:'10',
        songName:'Alan Walker-Faded <br><div class="subtitle">Alan Walker</div>',
        poster:"img/alan_walker_faded.jpg"
    },
    {
        id:'11',
        songName:'Alan Walker-Faded <br><div class="subtitle">Alan Walker</div>',
        poster:"img/alan_walker_faded.jpg"
    }
    //all object type
]


Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})