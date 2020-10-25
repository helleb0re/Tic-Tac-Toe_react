import React from 'react';
import './cell.css';


export default class Cell extends React.Component {

    render() {
        const {value, clickOnCell, clazz} = this.props;

        return (
            <div className={"cell" + clazz}
                 onClick={clickOnCell}>
                <div className={value}/>
            </div>
        )
    }
}