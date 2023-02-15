
for(var i=0 ; i<document.querySelectorAll(".drum").length ; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click"  , function() 
{  
            var keys = this.innerHTML;
            makesound(keys);
            btn_animation(keys)


});
}


document.addEventListener("keydown" , function (event) {
            makesound(event.key);
            btn_animation(event.key)
});

function  makesound(key)
{
    switch(key)
            {
            case "w":
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
                break;
            

            case "a":
                 var au = new Audio('sounds/tom-2.mp3');
                au.play();
                break;

            case"s":
             var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
                break;

            case "d":
                 var audio = new Audio('sounds/tom-4.mp3');
                audio.play();
                break;

            case "j":
                 var audio = new Audio('sounds/snare.mp3');
                audio.play();
                break;

            case "k":
                 var audio = new Audio('sounds/crash.mp3');
                audio.play();
                break;
            
            case "l":
             var audio = new Audio('sounds/kick-bass.mp3');
                audio.play();
                break;

            default:
                alert("wrong key Pressed");
                break;
            
            }     

}




function btn_animation(current_key)
{
    var active_btn = document.querySelector("."+current_key)
    active_btn.classList.add("pressed");

    setTimeout(function() {
        active_btn.classList.remove("pressed");
    } , 500)
}



