const buttons = document.querySelectorAll('.drum');

let audio;
buttons.forEach((button)=>{
    button.addEventListener("click", ()=> {

        let valueButton = button.innerHTML;
      
        playAudio(valueButton);
        animationKey(valueButton);
        
    })
})

document.addEventListener('keypress', (event)=>{
    
    playAudio(event.key);
    animationKey(event.key);
    
})

function playAudio(key){
    switch (key) {
        case 'w':
            audio = new Audio("./sounds/crash.mp3");
            break;
        case 'a':
            audio = new Audio("./sounds/kick-bass.mp3");
            break;
        case 's':
            audio = new Audio("./sounds/snare.mp3");
            break;
        case 'j':
            audio = new Audio("./sounds/tom-1.mp3");
            break;
        case 'k':
            audio = new Audio("./sounds/tom-2.mp3");
            break;
        case 'l':
            audio = new Audio("./sounds/tom-3.mp3");
            break;
        case 'd':
            audio = new Audio("./sounds/tom-4.mp3");
            break;
        default:
            break;
    }
    audio.play();
}


function animationKey(keyPressed){

    let keyPress = document.querySelector(`.${keyPressed}`);
    keyPress.classList.add('pressed');

    setInterval(function(){
        keyPress.classList.remove('pressed');
    },100);
}
 

