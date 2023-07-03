import React from 'react';
import s from './ChessBoard.module.css';
import {Tile} from './Tile/Tile';

export const ChessBoard = () => {

    const horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const verticalAxis = ['1', '2', '3', '4', '5', '6', '7', '8'];

    let board = [];
    for (let j = verticalAxis.length - 1; j >= 0; j--) {
        for (let i = 0; i < horizontalAxis.length; i++) {
            board.push(<Tile className={(j + i + 2) % 2 === 0 ? s.blackTile : s.whiteTile}/>);
        }
    }
    return (
        <div className={s.chessboard}>
            {board}
        </div>
    );
};

