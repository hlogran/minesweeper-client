import React from 'react';

export default function Board(props){
    const {game} = props;

    const rows = game ? game.rows : 10;
    const cols = game ? game.cols : 10;
    const cells = game ? game.cells : new Array(100);

    return (
        <div style={{
            width: '30px',
            height: '30px',
            backgroundColor: 'darkgray',
            border: 'solid thin'
        }}>

        </div>
    )
}

function Row(props){
    const {children} = props;
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row'
        }}>
            {children}
        </div>
    )
}