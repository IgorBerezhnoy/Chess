import React from 'react';
import s from './Tile.module.css';

import rook from "./../../../imgChess/rook_b.png"

type PropsType={
    className:string
}
export const Tile = (props:PropsType) => {
    return (
        <div className={props.className} >
           <img src={rook} />
        </div>
    );
};

