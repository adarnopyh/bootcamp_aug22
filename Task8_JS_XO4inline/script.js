
const totalColumn =100;
createBoard()

let celElements = document.querySelectorAll('.squares');
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
        if(findWinner(event,player_x)){
            alert('win')
            document.getElementById('result').innerHTML ="win!"
        }
    }else{
        event.target.classList.add(player_o);
        player_0 = true;
        findWinner(event,player_o)
        // if(findWinner(player_x)){
        //     endGame(false,player_x)
        // }
    }
}

// const winningCombination = [
//     [0,1,2,3],[1,2,3,4],[2,3,4,5],[3,4,5,6],[4,5,6,7],[5,6,7,8],[6,7,8,9],
//     [10,11,12,13],[11,12,13,14],[12,13,14,15],[13,14,15,16],[14,15,16,17],[15,16,17,18],[16,17,18,19],
   
//     [0,10,20,30], [10,20,30,40]
// 
// 00,01,02,03,04,05,06,07,08,09
// 10,11,12,13,14,15,16,17,18,19
// 20,21,22,23,24,25,26,27,28,29
// 30,31,32,33,34,35,36,37,38,39
// 40,41,42,43,44,45,46,47,48,49
// 50,51,52,53,54,55,56,57,58,59
// 60,61,62,63,64,65,66,67,68,69
// 70,71,72,73,74,75,76,77,78,79
// 80,81,82,83,84,85,86,87,88,89
// 90,91,92,93,94,95,96,97,98,99
// 

function endGame(status, className){
    if(!status){
        document.getElementById('result').innerHTML ="win!"
    }
}

function findWinner (event, className) {
    console.log(event.target)
    const targetNumber = Number(event.target.getAttribute('data-id'))
    const nextElement = celElements[targetNumber + 1]
    const prevElement = celElements[targetNumber - 1]
    console.log(className,event.target, nextElement)
   
   console.log(nextElement.classList.contains(className))
   console.log(prevElement.classList.contains(className))
//    //element.classList.contains(className);
//     //
//     let checkedElement = element.classList.contains(className);
//     console.log(checkedElement);
    
    
//     //
    
//     for(i= 0; i<winningCombination.length; i++){
        
//         let isWin = 0;
   
//            if(celElements[j].classList.contains(className)){
//             isWin ++;
//            }
        
//         console.log(isWin);
//         if(isWin === 4){
//             return true
//         }
//     }
//     return false;
}

function createBoard(){
    const outerDiv = document.getElementById('main-div')

    for(i=0; i < totalColumn ; i++){
        const div = document.createElement('div');
        div.className ='squares';
        div.setAttribute('data-id',i)
        outerDiv.appendChild(div)
    }
}



