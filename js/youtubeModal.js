const watchTrailer = document.querySelector('.watchTrailer');
const html = document.querySelector('html');
const youtubeContainer = document.querySelector('.youtubeContainer');
const iframe = document.querySelector('.youtubeContainer > iframe')
watchTrailer.addEventListener('click',()=>{
    youtubeContainer.classList.remove("closed");
    html.classList.add('scrollDisabled');
})
youtubeContainer.addEventListener('click',(e)=>{
    if (e.target != iframe){
        youtubeContainer.classList.add('closed');
        html.classList.remove('scrollDisabled');
    }
})