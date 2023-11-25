//more films
const moreFilms = document.querySelector(".watchMoreFilms");
let currentHidden = 0;
const hiddenFilms = Array.from(document.querySelectorAll('.film.hidden'));
moreFilms.addEventListener('click', ()=>{
    if(hiddenFilms.length-1-currentHidden!=0){
        for(let i = currentHidden;i<currentHidden+3;i++){
            hiddenFilms[i].classList.remove("hidden");
        }
        currentHidden+=3;
        if(currentHidden==6){
            moreFilms.classList.add("hidden");
        }
    }
})


// directors

const directors = Array.from(document.querySelectorAll(".director"));
directors.forEach(director=>{
    director.addEventListener("click",()=>{
        director.classList.toggle("active")
    })
})
