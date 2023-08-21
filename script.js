console.log("Welcome to Spotify");

//intialize the variables
let songindex=0;
let audioElement= new Audio('songs/1.mp3');
let masterplay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let mastersongName=document.getElementById('mastersongName');
let songItems=Array.from(document.getElementsByClassName('songitem'));

let songs=[
    {songName:"Let me love you-Justin Bieber", filepath:"songs/1.mp3",coverpath: "covers/1.jpg"},
    {songName:"Still Rollin-Shubh", filepath:"songs/2.mp3",coverpath: "covers/2.jpg"},
    {songName:"Dope Shope-yo yo honey singh", filepath:"songs/3.mp3",coverpath: "covers/3.jpg"},
    {songName:"295-Sidhu Moosewala", filepath:"songs/4.mp3",coverpath: "covers/4.jpg"},
    {songName:"Gabbroo-Jassi Gill", filepath:"songs/5.mp3",coverpath: "covers/5.jpg"},
    {songName:"Gangland-Mankirt Aulakh", filepath:"songs/6.mp3",coverpath: "covers/6.jpg"},
    {songName:"Putt Jatt Da-Diljit Dosanjh", filepath:"songs/7.mp3",coverpath: "covers/7.jpg"},
    {songName:"Asi Gabru Punjabi-Amrinder Gill", filepath:"songs/8.mp3",coverpath: "covers/8.jpg"},
    {songName:"Laembadgini-Diljit Dosanjh", filepath:"songs/9.mp3",coverpath: "covers/9.jpg"},
    {songName:"Tere Vaaste-Amitabh Bhattacharya", filepath:"songs/10.mp3",coverpath: "covers/10.jpg"},
]
songItems.forEach((element,i) =>{
   element.getElementsByTagName('img')[0].src=songs[i].coverpath;
   element.getElementsByClassName('songName')[0].innerText=songs[i].songName; 
});

//Handle play/pause click
masterplay.addEventListener('click',()=>{
  if(audioElement.paused||audioElement<=0){
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    gif.style.opacity=1;
  }
  else{
    audioElement.pause();
    masterplay.classList.add('fa-play-circle');
    masterplay.classList.remove('fa-pause-circle');
    gif.style.opacity=0;
  } 
})
//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
    progress =parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})
//when we click in at any point in middle it plays that part of song
myProgressBar.addEventListener('change' , ()=>{
    audioElement.currentTime= myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays= ()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songindex= parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songindex+1}.mp3`;
        mastersongName.innerText=songs[songindex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=9){
        songindex=0;
    }
    else{
        songindex+=1;
    }
    audioElement.src=`songs/${songindex+1}.mp3`;
    mastersongName.innerText=songs[songindex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=0;
    }
    else{
        songindex-=1;
    }
    audioElement.src=`songs/${songindex+1}.mp3`;
    mastersongName.innerText=songs[songindex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})
