 export class Column {
    constructor(){
        this.currentCol = 0;//let's make sure to revisit this, it is currently hard-coded
    }
    add (playerNumber){//playerNumber === 1/2
       for (let i = currentCol.length - 1; i > -1; i--){
        if (this.getTokenAt(i) === null){
            document.getElementById(`square-${i}-${currentCol}`).value = playerNumber;
            i = 0;
         }
          // assign the space value to playerNumber
            //drop token here if (game.currentPlayer === 1){
    //     clickTargets.classList.remove("red");
    //     clickTargets.classList.add("black");
    // } else {
    //     clickTargets.classList.remove("black");
    //     clickTargets.classList.add("red");
    // }

        
       }
    }
    getTokenAt(rowIndexNumber){
   

        //Number.parseInt(event.target.id.slice(-1), 10)
     
        let temp = document.getElementById(`square-${rowIndexNumber}-${currentCol}`).value; // 1/2/null
        return temp // STOPPED THURSDAY
        //return 1/2/null
    }
}
