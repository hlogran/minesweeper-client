import React from 'react';

export default function Cell(props){
    const {cell: {state, hasBomb, adjacentBombs}} = props;
    return (
        <div style={{
            width: '50px',
            height: '50px',
            backgroundColor: 'darkgray',
            border: 'solid thin',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }}>
            {adjacentBombs}
        </div>
    )
}