'use strict'
let price=""

export function checkWinner(winner){
    // Check Horizontal
    var Horizontal=function(){
        for(let i in winner) {
            let row=1
            for (let j=0;j<winner[i].length-1;j++){
                if (winner[i][j]==winner[i][j+1] && winner[i][j]){
                    row+=1
                    price=winner[i][j]
                }
            }
            if(row==3){
                return price;
            }
        }
    }
    // Check vertical
    var vertical=function() {
        for(let i in winner){
            let column=1
            for(let j=0;j<winner[i].length-1;j++) {
                if(winner[j][i]==winner[j+1][i] && winner[j][i]){
                    column+=1
                    price=winner[j][i]
                }
            }
            
            if(column==3){
                return price
            }
        }
    }
    // Check  diameterOne
    var diameterOne=function(){
        let count=1
        for(let i=0 ; i<winner.length-1;i++){
            for(let j=0;j<winner.length-1;j++){
                if(i==j && winner[i][j]==winner[i+1][j+1]){
                    count+=1
                    price=winner[i][j]

                }
            }
        }
        if (count==3){
            return price
        }
    }
    var diameterTwo=function(){
        let count=1
        for(let i=0;i<winner.length-1;i++){
            for(let j=0;j<winner.length;j++){
                if(i+j==2 && winner[i][j]==winner[i+1][j-1] && winner[i][j]){
                    count+=1
                    price=price

                }
            }
        }
        if(count==3){
            return price;
        }
    }
    let d1=diameterOne()
    let d2=diameterTwo()
    let h=Horizontal()
    let v=vertical()
    if( d1!=undefined) {return d1}
    else if (d2!=undefined){return d2}
    else if (h!=undefined){return h}
    else if(v!=undefined){return v}
    else{return ""}
}

export function noWinner(winner) {
    let all=0   
    for(let i of winner){
        for(let j of i){
            if(j!=0){
                all+=1
            }
        }
    }
    console.log(all);
    if (all==9){
        return "No One Winner"
    }else{
        return ""
    }
}
// let ans=checkWinner()
// let notAns=noWiinner();
// if(ans){
//     console.log(ans);
// }else if (notAns){
//     console.log(notAns); 
// }

    
// export default checkWinner();
// export default noWiinner();
