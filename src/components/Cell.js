import React from 'react';

export default function Cell(props){
    const {
        cell: {state, hasBomb, adjacentBombs, index},
        reveal
    } = props;

    let color = 'darkgray';
    let content = adjacentBombs;

    if(state ===  'REVEALED') {
        if(hasBomb){
            color = 'red';
            content = <b>B</b>
        } else {
            color = 'white';
        }
    };

    return (
        <div style={{
            width: '50px',
            height: '50px',
            backgroundColor: color,
            border: 'solid thin',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            }}
             onClick = {reveal.bind(this, index)}
        >
            {content}
        </div>
    )
}