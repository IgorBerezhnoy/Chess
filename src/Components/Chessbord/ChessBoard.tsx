import React from 'react';
import s from './ChessBoard.module.css';
import t from './Tile/Tile.module.css';
import {Tile} from './Tile/Tile';

const horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const verticalAxis = ['1', '2', '3', '4', '5', '6', '7', '8'];

interface Piece {
    image: string;
    x: number;
    y: number;
}

const pieces: Piece[] = [];

for (let p = 0; p < 2; p++) {
    const type = (p === 0) ? 'b' : 'w';
    const y = (p === 0) ? 7 : 0;
    pieces.push({image: `imgChess/rook_${type}.png`, x: 7, y: y});
    pieces.push({image: `imgChess/rook_${type}.png`, x: 0, y: y});
    pieces.push({image: `imgChess/knight_${type}.png`, x: 1, y: y});
    pieces.push({image: `imgChess/knight_${type}.png`, x: 6, y: y});
    pieces.push({image: `imgChess/bishop_${type}.png`, x: 2, y: y});
    pieces.push({image: `imgChess/bishop_${type}.png`, x: 5, y: y});
    pieces.push({image: `imgChess/queen_${type}.png`, x: 3, y: y});
    pieces.push({image: `imgChess/king_${type}.png`, x: 4, y: y});
}
for (let i = 0; i < verticalAxis.length; i++) {
    pieces.push({image: 'imgChess/pawn_w.png', x: i, y: 1});
    pieces.push({image: 'imgChess/pawn_b.png', x: i, y: 6});
}


let activePiece: HTMLElement | null = null;

const grabPiece = (e: React.MouseEvent) => {
    const element = e.target as HTMLElement;
    if (element.classList.contains(t.chessPiece)) {

        const x = e.clientX - 50;
        const y = e.clientY - 50;
        element.style.position = 'absolute';
        element.style.left = `${x}px`;
        element.style.top = `${y}px`;
        activePiece = element;
    }
};
const movePiece = (e: React.MouseEvent) => {
    if (activePiece) {

        const x = e.clientX - 50;
        const y = e.clientY - 50;
        activePiece.style.position = 'absolute';
        activePiece.style.left = `${x}px`;
        activePiece.style.top = `${y}px`;
    }
};
const dropPiece = (e: React.MouseEvent) => {
    if (activePiece) {
activePiece=null

    }
};


export const ChessBoard = () => {
    let board = [];
    for (let j = verticalAxis.length - 1; j >= 0; j--) {
        for (let i = 0; i < horizontalAxis.length; i++) {
            const number = j + i + 2;
            let image = undefined;
            pieces.forEach(p => {
                if (p.x === i && p.y === j) {
                    image = p.image;
                }
            });
            board.push(<Tile key={`${i},${j}`} number={number} image={image}/>);
        }
    }
    return (
        <div onMouseMove={movePiece} onMouseDown={grabPiece} onMouseUp={dropPiece} className={s.chessboard}>
            {board}
        </div>
    );
};

