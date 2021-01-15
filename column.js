 export class Column {
    constructor(){
        this.tokens = [null, null, null, null, null, null];
        this.currentCol = 0;//let's make sure to revisit this, it is currently hard-coded
    }
    add (playerNumber){//playerNumber === 1/2
        for (let i = 5; i > -1; i--){
            if (this.tokens[i] === null){
                //document.getElementById(`square-${i}-${currentCol}`).value = playerNumber;
                this.tokens[i] = playerNumber;
                break;
            }
        }
    }
    getTokenAt(rowIndexNumber){ // CHECK ON AGAIN
        return this.tokens[rowIndexNumber]; // 1/2/null
    }
}
