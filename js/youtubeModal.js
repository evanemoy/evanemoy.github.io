const watchTrailer = document.querySelector('.watchTrailer');
const youtubeContainer = document.querySelector('.youtubeContainer');
const iframe = document.querySelector('.youtubeContainer > iframe')
watchTrailer.addEventListener('click',()=>{
    youtubeContainer.classList.remove("closed");
})
youtubeContainer.addEventListener('click',(e)=>{
    if (e.target != iframe){
        youtubeContainer.classList.add('closed');
    }
})