// icons got from font awesome website

let songindex;
console.log('Welcome to Spotify')
let audioelement = new Audio('Duaa.mp3');
let myplayicon = document.getElementById('myplayicon');
let myprogressbar = document.getElementById('progressBar');
let mygif2 = document.getElementById('gif2');
let songitems = Array.from(document.getElementsByClassName('songItem'));
let playsongname = document.getElementById('playsongname');
let songs=[
      {songname:'Duaa' , filepath:'Duaa.mp3' , coverpath:'arijit.jpg'},
      {songname:'Tera Naam Liya' , filepath:'teranaamliya.mp3' , coverpath:'arijit.jpg'},
      {songname:'All is Well' , filepath:'All Izz Well.mp3' , coverpath:'All is Well.jpg'},
      {songname:'Aarambh hai Prachand' , filepath:'Aarambh.mp3' , coverpath:'arijit.jpg'},
      {songname:'Aisa Damru Bajaya' , filepath:'All Izz Well.mp3' , coverpath:'arijit.jpg'},
      {songname:'Zindagi ki yahi reet hai' , filepath:'All Izz Well.mp3' , coverpath:'arijit.jpg'},
      {songname:'Ek pyaar ka nagma' , filepath:'All Izz Well.mp3' , coverpath:'arijit.jpg'},
      {songname:'Kya hua tera wada' , filepath:'All Izz Well.mp3' , coverpath:'arijit.jpg'},
      {songname:'Tujh mai rab dikhta hai' , filepath:'All Izz Well.mp3' , coverpath:'arijit.jpg'},
      {songname:'Aye Mere Humsafar ' , filepath:'All Izz Well.mp3' , coverpath:'arijit.jpg'}
]
// audioelement play
//on click paly button changes to pause button 

myplayicon.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
       audioelement.play();  //playing Song
       myplayicon.classList.remove('fa-circle-play');
       myplayicon.classList.add('fa-circle-pause');
      mygif2.style.opacity = 1;
    }
    else{
        audioelement.pause();
        myplayicon.classList.remove('fa-circle-pause');
        myplayicon.classList.add('fa-circle-play');
        mygif2.style.opacity = 0;
    }
})
audioelement.addEventListener('timeupdate' ,()=>{
console.log('timeupdate');
//update seekbar
let progress = ((audioelement.currentTime/audioelement.duration)*100);
// console.log(progress);
myprogressbar.value=progress;
})  
myprogressbar.addEventListener('change', ()=>{
    audioelement.currentTime = (myprogressbar.value*audioelement.duration)/100;
})

songitems.forEach((element , i)=>{
    // console.log(element , i);
    element.getElementsByTagName('img')[0].src = songs[i].coverpath;
    element.getElementsByClassName('songname')[0].innerText = songs[i].songname;
    audioelement.src=`song${i}.mp3`;
    // element.getElementsByClassName('timestamp')[0].innerText = formatDuration(audioelement.duration);

})
makeallplays = ()=>{
    Array.from(document.getElementsByClassName('miniplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play'); 
    });
    }
let miniplays = Array.from(document.getElementsByClassName('miniplay'));
miniplays.forEach((element)=>{
    element.addEventListener('click',(e)=>{
// console.log(e.target);  
makeallplays();
e.target.classList.remove('fa-circle-play');
e.target.classList.add('fa-circle-pause');
songindex=parseInt(e.target.id);
audioelement.src=`song${songindex}.mp3`;
audioelement.currentTime=0;
playsongname.innerText=songs[songindex-1].songname;
if(audioelement.paused || audioelement.currentTime<=0){
audioelement.play();
myplayicon.classList.remove('fa-circle-play');
myplayicon.classList.add('fa-circle-pause');
mygif2.style.opacity = 1;
}
else{
    audioelement.pause();
    myplayicon.classList.remove('fa-circle-pause');
    myplayicon.classList.add('fa-circle-play');
    mygif2.style.opacity = 0;  
}
})
})
document.getElementById('previous').addEventListener('click' , ()=>{
    if(songindex>0){
    songindex -=1;
    }
    else{
        songindex = 10;
    }
    audioelement.src=`song${songindex}.mp3`;
audioelement.currentTime=0;
playsongname.innerText=songs[songindex-1].songname;
if(audioelement.paused || audioelement.currentTime<=0){
audioelement.play();
myplayicon.classList.remove('fa-circle-play');
myplayicon.classList.add('fa-circle-pause');
mygif2.style.opacity = 1;
}
else{
    audioelement.pause();
    myplayicon.classList.remove('fa-circle-pause');
    myplayicon.classList.add('fa-circle-play');
    mygif2.style.opacity = 0;  
}
})
document.getElementById('forward').addEventListener('click' , ()=>{
    if(songindex<9){
    songindex +=1;
    }
    else{
        songindex = 0;
    }
    audioelement.src=`song${songindex}.mp3`;
audioelement.currentTime=0;
playsongname.innerText=songs[songindex-1].songname;
if(audioelement.paused || audioelement.currentTime<=0){
audioelement.play();
myplayicon.classList.remove('fa-circle-play');
myplayicon.classList.add('fa-circle-pause');
mygif2.style.opacity = 1;
}
else{
    audioelement.pause();
    myplayicon.classList.remove('fa-circle-pause');
    myplayicon.classList.add('fa-circle-play');
    mygif2.style.opacity = 0;  
}
})
