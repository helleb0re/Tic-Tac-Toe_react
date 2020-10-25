import React from 'react';
import Cell from '../cell/cell';
import Restart from "../restart/restart";

import './board.css';


export default class Board extends React.Component {

    render() {
        const {clickOnCell, board, restart, clickOnRestart, textEndGame} = this.props;
        let cells = board.map((item) => {
            let clazz = '';
            if (item.id < 4) {
                clazz += ' top';
            } else if (item.id > 6) {
                clazz += ' bottom';
            }

            if (item.id === 1 || item.id === 4 || item.id === 7) {
                clazz += ' left';
            } else if (item.id % 3 === 0) {
                clazz += ' right';
            }

            clazz += item.win ? ' win' : '';

            return (
                <Cell
                    key={item.id}
                    value={item.value}
                    clazz={clazz}
                    clickOnCell={() => {clickOnCell(item.id)}}/>
            )
        });

        return (
            <div className={'board' + textEndGame}>
                {cells}
                <Restart
                    restart={restart}
                    clickOnRestart={clickOnRestart}/>
            </div>
        )
    }
}
