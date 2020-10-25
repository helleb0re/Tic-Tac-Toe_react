import React from 'react';
import './restart.css';

const Restart = ({restart, clickOnRestart}) => {
    const visible = restart ? 'visible' : 'no-visible';

    return (
        <div className={'restart ' + visible}
             onClick={clickOnRestart}/>
    )
}

export default Restart