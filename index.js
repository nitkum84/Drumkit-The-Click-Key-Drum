var drumList = document.querySelectorAll(".drum").length;

for(var i=0;i<drumList;i++){
   
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    var btns = this.innerHTML;
    switch(btns){
        case "w":
            var t1= new Audio("sounds/tom-1.mp3");
            t1.play();  
            break; 
        case "a":
            var t1= new Audio("sounds/tom-2.mp3");
            t1.play();
            break;  
        case "s":
            var t1= new Audio("sounds/tom-3.mp3");
            t1.play();
            break; 
        case "d":
            var t1= new Audio("sounds/tom-4.mp3");
            t1.play();
            break;  
        case "j":
            var t1= new Audio("sounds/crash.mp3");
            t1.play();
            break; 
        case "k":
            var t1= new Audio("sounds/kick-bass.mp3");
            t1.play();
            break; 
        case "l":
            var t1= new Audio("sounds/snare.mp3");
            t1.play();
            break; 
        default:
            console.log("Nothing worked!");
    }    
    btnAnimation(btns); 
});


}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    btnAnimation(event.key);
});


function makeSound(key){
    switch(key){
        case "w":
            var t1= new Audio("sounds/tom-1.mp3");
            t1.play();  
            break; 
        case "a":
            var t1= new Audio("sounds/tom-2.mp3");
            t1.play();
            break;  
        case "s":
            var t1= new Audio("sounds/tom-3.mp3");
            t1.play();
            break; 
        case "d":
            var t1= new Audio("sounds/tom-4.mp3");
            t1.play();
            break;  
        case "j":
            var t1= new Audio("sounds/crash.mp3");
            t1.play();
            break; 
        case "k":
            var t1= new Audio("sounds/kick-bass.mp3");
            t1.play();
            break; 
        case "l":
            var t1= new Audio("sounds/snare.mp3");
            t1.play();
            break; 
        default:
            console.log("Nothing worked!"); 
    }
}

function btnAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}



//  var t1= new Audio("sounds/tom-1.mp3");
//  t1.play();