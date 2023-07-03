import React from 'react';
import s from './Tile.module.css';


type PropsType = {
    number: number
    image?: string
}
export const Tile = ({number, image}: PropsType) => {
    return (
        number % 2 == 0 ?
            <div className={`${s.tile} ${s.blackTile}`}>
                {image && <div style={{backgroundImage: `url(${image})`}} className={s.chessPiece}></div>}
            </div>
            : <div className={`${s.tile} ${s.whiteTile}`}>
                {image && <div style={{backgroundImage: `url(${image})`}} className={s.chessPiece}></div>}
            </div>
    );
};

