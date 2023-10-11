var timer = 15;
var score = 0;
var ran =0;

function scoreIncresa(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}


function getNewHit(){

    ran = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = ran;

}

function makebubble(){
    var clutter = "";

for(var  i = 1 ; i<=90 ;i++)
{
    var num = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${num}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}

function runTime(){
    var timerint = setInterval(function(){
        if(timer > 0)
        {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h2>Game Over</h2>`;
        }

    }, 1000);
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
var clicked = Number(dets.target.textContent);
if(clicked === ran)
{
    scoreIncresa();
    makebubble();
    getNewHit();
}
});


getNewHit();
runTime();
makebubble();