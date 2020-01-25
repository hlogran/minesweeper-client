import React from 'react';
import Cell from './Cell'
export default function Board(props){
    const {game} = props;

    if(!game) return null;

    const rows = [];
    for(let i = 0; i<game.rows; i++){
        rows.push([]);
    };

    game.cells.forEach((cell, i) => {
        const row = cell.row;
        console.log('row', row);
        cell.index = i;
        rows[Number(row)].push(cell)
    });

    return (
        <div>
            {
                rows.map(r => (
                    <Row>
                        {r.map( c => <Cell cell={c}/>)}
                    </Row>
                ))
            }
        </div>
    );
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