import {checkWinner,noWinner} from './logic.js'
// 'use strict'

let winner =[
    [0,0,0],
    [0,0,0],
    [0,0,0]
]
let paragraph=document.querySelectorAll('.one p')
let playerOne=document.querySelector('span.span1')
let playerTwo=document.querySelector('span.span2')
let all1=document.querySelector('.all1')
let all2=document.querySelector('.all2')
playerOne.innerHTML=localStorage.getItem('playerOne')
playerTwo.innerHTML=localStorage.getItem('playerTwo')
playerTwo.style.color='#3F979B'
playerOne.style.color='#3F979B'

let counter=0
let x=10
let ans;
let notAns
for(let e of paragraph){
    // console.log(x!=0);
    e.onclick=function() {
        if(x!=0){
        if((e.innerHTML!=`<span class="o"></span>` )&&(e.innerHTML!=`<span class="x">X</span>`)){
            counter+=1
            let clicked=e.className.split("")
            if (counter%2==0){
                e.innerHTML=`<span class="x">X</span>`
                // console.log(e.innerHtML);
                winner[Number(clicked[0])][Number(clicked[1]),Number(clicked[2])]=localStorage.getItem('playerTwo')
            } else {
                e.innerHTML=`<span class="o"></span>`
                // console.log(e.innerHtML);
                winner[Number(clicked[0])][Number(clicked[1]),Number(clicked[2])]=localStorage.getItem('playerOne')
            }
        }
        // console.log(winner);

        ans=checkWinner(winner);
        notAns=noWinner(winner);
        console.log(notAns);
        if(ans){
            all2.innerHTML=""
            all1.innerHTML=`Congrats for ${ans} He is The Winner`
            all1.style.color="green"
            all1.style.padding="0px 10px 10px";
            x=0
            
        }else if (notAns){
            all2.innerHTML=""
            // console.log(notAns);
            all1.innerHTML=`The Game is finish and No One Win Please Refresh Page to Replay`
            all1.style.color='#C92C6D'
            all1.style.padding="0px 10px 10px";
            x=0
            // break;
        }
    }else {
        if(ans){
            alert(`The Game is finish and the Winner is: ${ans}, We will reload page to play Again 😋`)
        }else {
            alert(`The Game is finish and No One Win try Again 😅,We will reload page to play Again 😋`)
            
        }
        location.reload()
    }
}
}
// console.log(playerOne);
// console.log(playerTwo);


