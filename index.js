var drumSet = document.querySelectorAll(".drum");

for (let i = 0; i<drumSet.length; i++) {

    drumSet[i].addEventListener("click" , function () {
        var audio = new Audio("./sounds/tom-1.mp3");
        audio.play();
    });
}
