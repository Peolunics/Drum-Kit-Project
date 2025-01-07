var numberOfDrumButton = document.querySelectorAll(".drum").length;

for(var i = 0; i<numberOfDrumButton; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){    
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
        // console.log(this.innerHTML);
    })
}

document.addEventListener("keydown",function(e){
    // console.log(e.key);
    makeSound(e.key);
    buttonAnimation(e.key);
    
})

function makeSound(key){
    if(key==='w'){
        var mySound = new Audio('/sounds/crash.mp3');
        mySound.play();
    }
    else if(key==='a'){
        var mySound = new Audio('/sounds/kick-bass.mp3');
        mySound.play();
    }
    else if(key==='s'){
        var mySound = new Audio('/sounds/snare.mp3');
        mySound.play();
    }
    else if(key==='d'){
        var mySound = new Audio('/sounds/tom-1.mp3');
        mySound.play();
    }
    else if(key==='j'){
        var mySound = new Audio('/sounds/tom-2.mp3');
        mySound.play();
    }
    else if(key==='k'){
        var mySound = new Audio('/sounds/tom-3.mp3');
        mySound.play();
    }
    else if(key==='l'){
        var mySound = new Audio('/sounds/tom-4.mp3');
        mySound.play();
    }
    else{
        console.log(key);
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100)
}
