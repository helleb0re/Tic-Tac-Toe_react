import React from 'react';
import Board from '../board/board';
import TextWinner from "../text-winner/text-winner";

import './app.css';

const indexOfCheck = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]];
let countGames = 0;

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: [
                {id: 1, value: '', win: false},
                {id: 2, value: '', win: false},
                {id: 3, value: '', win: false},
                {id: 4, value: '', win: false},
                {id: 5, value: '', win: false},
                {id: 6, value: '', win: false},
                {id: 7, value: '', win: false},
                {id: 8, value: '', win: false},
                {id: 9, value: '', win: false},
            ],
            counter: 0,
            restart: false,
            endGame: '',
            whoWinner: ''
        }
        this.clickOnCell = this.clickOnCell.bind(this);
        this.checkWin = this.checkWin.bind(this);
        this.clickOnRestart = this.clickOnRestart.bind(this);
    }

    clickOnCell(id) {
        const index = id - 1;
        this.setState(({board, counter, restart, endGame, whoWinner}) => {
            if (!board[index].value) {
                let newRestart = restart;
                let newCounter = counter;
                let newEndGame = endGame;
                let newWhoWinner = whoWinner;
                let newItem = {id: id, value: '', win: false};

                if (newCounter % 2) {
                    newItem.value = 'o';
                } else {
                    newItem.value = 'x';
                }

                newCounter++;
                let newArr = [...board.slice(0, index), newItem, ...board.slice(index+1)];

                let result = this.checkWin(newArr);
                if (result) {
                    countGames++;
                    newCounter = countGames % 2;
                    newRestart = true;
                    for (let i of result) {
                        newArr[i].win = true;
                    }

                    newWhoWinner = 'o';
                    if (newArr[result[0]].value === 'x') {
                        newWhoWinner = 'x';
                    }
                    newEndGame = ' win';
                }

                if ((countGames % 2 === 1 && newCounter === 10) || (countGames % 2 === 0 && newCounter === 9)) {
                    countGames++;
                    newCounter = countGames % 2 ;
                    newRestart = true;

                    newWhoWinner = 'draw';
                    newEndGame = ' tie';
                }

                return {
                    board: newArr,
                    counter: newCounter,
                    restart: newRestart,
                    endGame: newEndGame,
                    whoWinner: newWhoWinner,
                }
            }
        });
    }

    checkWin(arr) {
        for (let i of indexOfCheck) {
            if (arr[i[0]].value === arr[i[1]].value && arr[i[1]].value === arr[i[2]].value
                && arr[i[0]].value !== '' && arr[i[1]].value !== '' && arr[i[2]].value !== '') {
                return i;
            }
        }
        return false;
    }

    clickOnRestart() {
        this.setState(() => {
            const newArr = [];
            for (let i = 0; i < 9; i++) {
                newArr.push({id: i+1, value: '', win: false})
            }
            return {
                board: newArr,
                restart: false,
                endGame: '',
                whoWinner: ''
            }
        });
    }

    render() {
        let {board, restart, endGame, whoWinner} = this.state;

        return (
            <>
                <h1>Tic Tac Toe</h1>
                <TextWinner textWinner={whoWinner}/>
                <Board
                    board={board}
                    textEndGame={endGame}
                    restart={restart}
                    clickOnCell={this.clickOnCell}
                    clickOnRestart={this.clickOnRestart}/>
            </>
        )
    }
}