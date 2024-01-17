var strike=document.getElementById('strike')

var reset=document.getElementById('reset')

var scoreTeam1=document.getElementById('score-team1')
var scoreTeam2=document.getElementById('score-team2')

var wicketTeam1=document.getElementById('wickets-team1')
var wicketTeam2=document.getElementById('wickets-team2')

reset.addEventListener('click',()=>{
    resetFn()
})
var runs= [0, 1, 2, 3, 4, 6, 'W']

var sum1=0;
var sum2=0;
var wicketSum1=0;
var wicketSum2=0;
var noOfBalls1=0;
var noOfBalls2=0;

var turns = 1;

strike.addEventListener('click',createAndAppendScore);

function createAndAppendScore(){
    let runs = randomNess()
    if(turns == 2 ){
        noOfBalls2=noOfBalls2+1;
        scoreUpdate2(runs,noOfBalls2);
        if(runs!== 'W'){
            sum2= sum2 + runs;
            scoreTeam2.innerHTML = '';
            scoreTeam2.innerText = sum2;
        } else{
            wicketSum2 = wicketSum2 + 1;
            wicketTeam2.innerHTML = '';
            wicketTeam2.innerText = wicketSum2;
        }

        if(sum2 > sum1 || noOfBalls2 == 6 || wicketSum2 == 2){
            turns = 3;
            setTimeout(()=>{
                gameOver()
            }, 20);
        }
    }

    if(turns == 1 ){
        noOfBalls1 = noOfBalls1 + 1;
        scoreUpdate1(runs , noOfBalls1 );
        if(runs!== 'W'){
            sum1 = sum1 + runs;
            scoreTeam1.innerHTML = '';
            scoreTeam1.innerText = sum1;
        } else{
            wicketSum1 = wicketSum1 + 1;
            wicketTeam1.innerHTML = '';
            wicketTeam1.innerText = wicketSum1;
        }

        if(sum2 > sum1 || noOfBalls1 == 6 || wicketSum1 == 2){
            turns = 2;
        }
    }
}

function randomNess(){
    var randomNess = Math.random();

    var valueInArray = randomNess * runs.length;

    var roundingOfValue = Math.floor(valueInArray);

    return runs[roundingOfValue];
}

function gameOver() {
    if (sum1 > sum2){
        alert('India Wins')
        window.location.reload()
    } else if (sum1 < sum2) {
        alert('Pakistan Wins')
        window.location.reload()
    } else {
        alert('Match is Draw')
        window.location.reload()
    }
}

function scoreUpdate1(runs, noOfBalls1) {
    var p = document.createElement('p');
    p.innerHTML = runs;
    var ball = document.querySelector(
        `#team1-superover>.ball:nth-child(${noOfBalls1})`
    )
    ball.appendChild(p);
}

function scoreUpdate2(runs, noOfBalls2) {
    var p = document.createElement('p');
    p.innerHTML = runs;
    var ball = document.querySelector(
        `#team2-superover>.ball:nth-child(${noOfBalls2})`
    )
    ball.appendChild(p);
}

function resetFn() {
    return window.location.reload();
}
