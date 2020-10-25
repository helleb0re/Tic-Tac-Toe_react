import React from 'react';
import './text-winner.css';

const TextWinner = ({textWinner}) => {
    const visible = ['hide', 'hide', 'hide'];

    if (textWinner === 'x') {
        visible[0] = 'show';
    } else if (textWinner === 'o') {
        visible[1] = 'show';
    } else if (textWinner === 'draw') {
        visible[2] = 'show';
    }

    return (
        <div className="text_winner">
            <div className={'variant ' + visible[0]} id="1">Player <span>x</span> wins Player <span>o</span></div>
            <div className={'variant ' + visible[1]} id="2">Player <span>o</span> wins Player <span>x</span></div>
            <div className={'variant ' + visible[2]} id="3">Draw</div>
        </div>
    )
}

export default TextWinner;