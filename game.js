import { Column } from "./column.js";

export class Game{
    constructor(player1, player2){
        this.player1 = player1;
        this.player2 = player2;
        this.currentPlayer = 1;
        this.columns = [];
        for (let i = 0; i < 7; i++){
            this.columns.push(new Column());
        }
    }

    getName(){
        return `${this.player1} VS ${this.player2}`;
    }

    playInColumn(index){
        this.columns[index].add(this.currentPlayer);
        this.currentPlayer = (this.currentPlayer === 1) ? 2 : 1;
    }
    getTokenAt(rowIndex, colIndex){
        let currentColObj = this.columns[colIndex];
        return currentColObj.getTokenAt(rowIndex);

    }

}
