import React from 'react';
import s from './ChessBoard.module.css';
import {Tile} from './Tile/Tile';

const horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const verticalAxis = ['1', '2', '3', '4', '5', '6', '7', '8'];

interface Piece {
    image: string;
    x: number;
    y: number;
}

const pieces: Piece[] = [];

for (let p = 0; p <2 ; p++) {
    const type=(p===0)?"b":"w"
    const y=(p===0)?7:0
    pieces.push({image: `imgChess/rook_${type}.png`, x: 7, y: y});
    pieces.push({image: `imgChess/rook_${type}.png`, x: 0, y: y});
    pieces.push({image: `imgChess/knight_${type}.png` , x: 1, y: y});
    pieces.push({image: `imgChess/knight_${type}.png` , x: 6, y: y});
    pieces.push({image: `imgChess/bishop_${type}.png`, x: 2, y: y});
    pieces.push({image: `imgChess/bishop_${type}.png`, x: 5, y: y});
    pieces.push({image: `imgChess/queen_${type}.png`, x: 3, y: y});
    pieces.push({image: `imgChess/king_${type}.png`, x: 4, y: y});
}
for (let i = 0; i < verticalAxis.length; i++) {
    pieces.push({image: "imgChess/pawn_w.png", x: i, y: 1});
    pieces.push({image: "imgChess/pawn_b.png", x: i, y: 6});
}


// pieces.push({image: rookW, x: 0, y: 0});
// pieces.push({image: rookW, x: 7, y: 0});
// pieces.push({image: knightW, x: 1, y: 0});
// pieces.push({image: knightW, x: 6, y: 0});
// pieces.push({image: bishopW, x: 2, y: 0});
// pieces.push({image: bishopW, x: 5, y: 0});
// pieces.push({image: queenW, x: 3, y: 0});
// pieces.push({image: kingW, x: 4, y: 0});




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

            board.push(<Tile number={number} image={image}/>);
        }
    }
    return (
        <div className={s.chessboard}>
            {board}
        </div>
    );
};

