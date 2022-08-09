let celElements = document.querySelectorAll(".squares");
console.log(celElements);

const player_x = 'cross';
const player_o = 'circle';

let player_0 = true;
for (i = 0; i < celElements.length; i++){
    celElements[i].addEventListener("click", clickHandler, {once : true});
}

function clickHandler(event) {
    if(player_0){
        event.target.classList.add(player_x);
        player_0 = false;
        console.log(findWinner(player_x));
        if(findWinner(player_x)){
            alert('win')
            document.getElementById('result').innerHTML ="win!"
        }
    }else{
        event.target.classList.add(player_o);
        player_0 = true;
        findWinner(player_o)
        // if(findWinner(player_x)){
        //     endGame(false,player_x)
        // }
    }
}

const winningCombination = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]

function endGame(status, className){
    if(!status){
        document.getElementById('result').innerHTML ="win!"
    }
}

function findWinner (className) {

    for(i= 0; i<winningCombination.length; i++){
        let isWin = 0;
        for(j=0; j<winningCombination[i].length; j++){
           if(celElements[j].classList.contains(className)){
            isWin ++;
           }
        }
        console.log(isWin);
        if(isWin === 3){
            return true
        }
    }
    return false;
}





