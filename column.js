class Column {
    constructor(){
        this.currentCol = 0;
    }
    add (playerNumber){//playerNumber === 1/2
       for (let i = currentCol.length - 1; i > -1; i--){
        if (this.getTokenAt(i) === null){
            let temp.value = playerNumber; // assign the space value to playerNumber
            //drop token here
            //return
            //grid[row][currentCol] = 1/2

        }
       }
    }
    getTokenAt(rowIndexNumber){
        // Create a method named getTokenAt which takes a row index number
        // between 0 and 5 and returns null if there's no token there,
        // 1 if player one's token is there, or 2 if player two's token is there.

        //Number.parseInt(event.target.id.slice(-1), 10)
        // <div id="square-0-0" class="token-square"></div> First Row, Far Left
        // <div id="square-0-1" class="token-square"></div>
        // <div id="square-0-2" class="token-square"></div>
        // <div id="square-0-3" class="token-square"></div>
        // <div id="square-0-4" class="token-square"></div>
        // <div id="square-0-5" class="token-square"></div>
        // <div id="square-0-6" class="token-square"></div> First Row, Far Right
        // <div id="square-1-0" class="token-square"></div>
        // <div id="square-1-1" class="token-square"></div>
        let temp = document.getElementById(`square-${rowIndexNumber}-${currentCol}`).value; // 1/2/null
        return temp // STOPPED THURSDAY
        //return 1/2/null
    }
}
