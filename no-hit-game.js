var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function gatNewHit() {
    hitrn = Math.floor(Math.random() * 10)
    document.querySelector("#Hitval").textContent = hitrn;
}

function makeBubble() {
    var clutter = "";

    for (var i = 1; i <= 96; i++) {
        var nm = Math.floor(Math.random() * 10)
        clutter += `<div class="bublle">${nm}</div>`;
    }
    document.querySelector("#pbottom").innerHTML = clutter;
}


function runTimer() {
    var timerint = setInterval(function() {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timerint);
            document.querySelector("#pbottom").innerHTML = `<h1>GAME IS OVER <h1> <h1>JAY SHREE RAM <h1>`;
        }
    }, 1000);
}

document.querySelector("#pbottom")
    .addEventListener("click", function(dets) {
        var clickednum = Number(dets.target.textContent);
        if (clickednum === hitrn) {
            increaseScore();
            makeBubble();
            gatNewHit();
        }
       else{
            alert("please paress right key");
          }
    });
 
runTimer();
makeBubble();
gatNewHit();