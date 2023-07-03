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
                <img className={s.chessPieceImg} src={image}/>
            </div>
            : <div className={`${s.tile} ${s.whiteTile}`}>
                <img className={s.chessPieceImg} src={image}/>
            </div>
    );
};

