import React from 'react';

export default function SquareCell(props) { // calls individual cells
    return (
        <div className="cell" onClick={props.onClick}>
            {props.value}
        </div>
    )
}